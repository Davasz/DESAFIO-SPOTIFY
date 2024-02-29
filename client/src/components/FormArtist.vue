<template>
    <form @submit.prevent="handleSubmit(this)">
        <img @click="onClick" class="close-icon" src="../assets/img/icons/close-icon.svg" alt="">
        <div class="artist-informations">
            <img class="img-artist" :src="imgUrl" alt="Image Artist">
            <input v-model="artistName" type="text" name="artistName" required readonly>
        </div>
        <input v-model="userName" class="full-input" type="text" required placeholder="Nome do contratante">
        <div class="conjunt-inputs">
            <input v-model="date" class="input-data" required type="date">
            <input v-model="cache" class="input-number" type="number" required placeholder="Cachê">
        </div>
        <input v-model="eventAdress" class="full-input" type="text" required placeholder="Endereço do evento">
        <div class="buttons">
            <button class="button-submit" type="submit">Contratar</button>
            <button @click="clickSpotify" class="spotify-button">
                <img src="../assets/img/icons/spotify-icon.svg" alt="Logo Spotify">
                Ver no Spotify
            </button>
        </div>
    </form>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    props: {
        artist: Object
    },
    setup(props, { emit }) {

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
        const handleSubmit = () => {
            console.log(artistName.value)
            console.log(userName.value)
            console.log(date.value)
            console.log(cache.value)
            console.log(eventAdress.value)
        }
        const onClick = () => {
            emit('close')
        }
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