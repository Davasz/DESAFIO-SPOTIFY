<template>

    <!-- Handle and prevent the form default event -->
    <form @submit.prevent="handleSubmit(this)">
        <!-- Close icon -->
        <img @click="onClick" class="close-icon" src="../assets/img/icons/close-icon.svg" alt="close-icon">

        <!-- Assigns v-model to all fields -->
        <div class="artist-informations">
            <img class="img-artist" :src="imgUrl" alt="Image Artist">
            <input v-model="artistName" type="text" name="artistName" required readonly>
        </div>
        <input v-model="userName" class="full-input" type="text" required placeholder="Nome do contratante">
        <div class="conjunt-inputs">
            <input v-model="date" class="input-data" required type="date">
            <input v-model="cache" class="input-number" type="number" placeholder="Cachê">
        </div>
        <input v-model="eventAdress" class="full-input" type="text" placeholder="Endereço do evento">
        <div class="buttons">
            <button class="button-submit" type="submit">Contratar</button>   <!-- Submit form button -->
            <button @click.prevent="clickSpotify" class="spotify-button">    <!-- Go to Spotify button -->   
                <img src="../assets/img/icons/spotify-icon.svg" alt="Logo Spotify">
                Ver no Spotify
            </button>
        </div>
    </form>

</template>

<script>

// Import vue functions
import { ref, computed } from 'vue'

// Import store
import { useStore } from 'vuex'

export default {
    props: {
        artist: Object
    },

    setup(props, { emit }) {
        // Store initialization
        const store = useStore()

        // Variables
        let artistName = ref(props.artist.name)
        let userName = ref('')
        let date = ref('')
        let cache = ref('')
        let eventAdress = ref('')

        // Computeds
        const imgUrl = computed(() => {
            if (props.artist.images[0] && props.artist.images[0].url) {
                return props.artist.images[0].url
            } else {
                return ''
            }
        });

        // Methods
        const clickSpotify = () => {
            window.open(props.artist.external_urls.spotify, "_blank")
        }

        // Handle form submit
        const handleSubmit = async () => {
            // Checks if it is a valid date
            const dateYear = date.value.split('-')[0]
            if (dateYear.length > 4) {
                emit('alertError')
            } else {
                const contract = {
                    artist_name: artistName.value,
                    user_name: userName.value,
                    date: date.value,
                    cache: cache.value ? cache.value : null, 
                    event_adress: eventAdress.value,
                    artist_id: props.artist.id
                }

                console.log(contract)

                // Calls the StoreContract acction
                await store.dispatch('storeContract', contract)
                //sends the alert to the father
                emit('alertDone')
                // Close the form
                onClick()
            }
        }
        // Close the form
        const onClick = () => {
            emit('close')
        }

        // Return the variables
        return {
            onClick,
            artistName,
            imgUrl,
            clickSpotify,
            handleSubmit,
            userName,
            date,
            cache,
            eventAdress
        }
    }
}

</script>

<style scoped>
form {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    width: 90vw;
    height: 30rem;
    gap: 2rem;
    border-radius: 23px;
    z-index: 1;
}

input {
    font-family: sans-serif;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 9px;
    background-color: #D9D9D9;
    box-sizing: border-box;
    outline: none;
}

.close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}

.artist-informations {
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 3.5rem
}

.conjunt-inputs {
    display: flex;
    align-items: center;
    width: 90%;
}

.input-number {
    width: 40%;
    margin-left: 7%;
}

.input-data {
    width: 53%;
}

.artist-informations input {
    width: 100%;
    margin-left: 1rem;
    background-color: #8f8f8f;
}

.img-artist {
    width: 5rem;
    height: 5rem;
    clip-path: circle(50% at center)
}

.full-input {
    width: 90%;
}

.buttons {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    gap: 2rem;
}

.button-submit {
    display: flex;
    justify-content: center;
    font-family: 'Sansation';
    align-items: center;
    width: 7rem;
    height: 2.5rem;
    background-color: #D9D9D9;
    color: #000000;
    border-radius: 8px;
    box-shadow: 0 4px 0 0 #8f8e8e;
}

.spotify-button {
    display: flex;
    justify-content: center;
    font-family: 'Sansation';
    align-items: center;
    width: 10rem;
    height: 2.5rem;
    background-color: #00DA5A;
    box-shadow: 0 4px 0 0 #00a846;
    color: #FFFFFF;
    border-radius: 8px;
}

.spotify-button:hover,
.button-submit:hover {
    transform: translateY(-3px);
}

.spotify-button img {
    margin-right: 0.5rem;
}

@media (min-width: 780px) {
    form {
        width: 70vw;
    }
}
</style>