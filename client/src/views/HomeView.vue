<template>

    <main>
        <!-- Reactive alert component -->
        <TheAlert :msg="msgAlert" :alertType="alertType" v-if="showAlert"></TheAlert>

        <div class="salutation">
            <h1>
                <span>Olá</span>, seja bem-vindo!
            </h1>
        </div>

        <!-- Search component -->
        <TheSearch></TheSearch>

        <!-- Reactive form component -->
        <FormArtist :artist="selectedArtist" @alertDone="apperAlert('done')" @alertError="apperAlert('error')"
            @close="removeForm" v-if="showForm">
        </FormArtist>

        <!-- It only appears if there is no artist being searched for -->
        <h1 v-if="store.state.recenteArtist[0] && !store.state.artist[0]" class="recent-artists">Artistas contratados recentemente:</h1>

        <!-- It only appears if there is no artist being searched for -->
        <section v-if="!store.state.artist[0]" class="recente-cards">

            <!-- Take each recent artist from the state store and generate a card with information about each one -->
            <CardsArtists v-for="(artist, index) in store.state.recenteArtist" :key="index" @click="apperForm(artist)"
                :imgArtist="artist.images[0]">
                <!-- Transmitting name information via slots -->
                <template v-slot:name>
                    <h1 class="card-name">{{ artist.name.split(' ').slice(0, 2).join(' ') }}</h1>
                </template>

                <!-- Transmitting genres information via slots -->
                <template v-slot:genres>
                    <p class="card-gender">{{ artist.genres[0] }}</p>
                </template>

            </CardsArtists>

        </section>

        <h1 v-if="store.state.artist[0]" class="recent-artists">Resultado:</h1>

        <!-- Card component -->
        <section class="section-cards">
            
            <!-- Take each artist from the state store and generate a card with information about each one -->
            <CardsArtists v-for="(artist, index) in store.state.artist" :key="index" @click="apperForm(artist)"
                :imgArtist="artist.images[0]">
                <!-- Transmitting name information via slots -->
                <template v-slot:name>
                    <h1 class="card-name">{{ artist.name.split(' ').slice(0, 2).join(' ') }}</h1>
                </template>

                <!-- Transmitting genres information via slots -->
                <template v-slot:genres>
                    <p class="card-gender">{{ artist.genres[0] }}</p>
                </template>

            </CardsArtists>

        </section>
    </main>

</template>

<script>

// Import components
import TheSearch from '@/components/TheSearch.vue';
import CardsArtists from '@/components/CardsArtists.vue';
import FormArtist from '@/components/FormArtist.vue'
import TheAlert from '@/components/TheAlert.vue';

// Import vue functions
import { ref } from 'vue'

// Import store
import { useStore } from 'vuex';

export default {
    components: {
        TheSearch,
        CardsArtists,
        FormArtist,
        TheAlert
    },

    setup() {
        // Store initialization
        const store = useStore();

        // Loads recent artists in the state, if there is no artist loaded
        if(!store.state.artist[0]) {
            store.dispatch('getRecentArtists')
        }

        // Variables
        let showForm = ref(false)
        let selectedArtist = ref(null);
        let showAlert = ref(false)
        let alertType = ref('')
        let msgAlert = ref('')

        // Methods

        // Shows the alert according to the type received from the child
        const apperAlert = (type) => {
            showAlert.value = true
            alertType.value = type
            if (type == 'done') {
                msgAlert.value = 'Feito!'
            } else {
                msgAlert.value = 'Erro!'
            }

            // Keeps the alert on the screen for 2 seconds
            setTimeout(() => {
                removeAlert(type)
            }, 2000)
        }

        // Remove the alert
        const removeAlert = (type) => {
            if(type == 'done') {
                window.location.reload()
            }
            showAlert.value = false
        }

        // Shows the form according to the artist received from the child
        const apperForm = (artist) => {
            selectedArtist.value = artist
            showForm.value = true
        }

        // Remove the form
        const removeForm = () => {
            showForm.value = false
        }

        // Returning the variables
        return {
            store,
            showForm,
            apperForm,
            removeForm,
            selectedArtist,
            alertType,
            showAlert,
            apperAlert,
            removeAlert,
            msgAlert,
        }
    }
}

</script>

<style scoped>

/* Mobile First */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
}

.salutation {
    font-family: 'Sansation', sans-serif;
    font-size: 1em;
    margin-bottom: 2rem;
}

.salutation span {
    color: #B1B1B1; 
}


.recent-artists {
    font-family: sans-serif;
    font-size: 1.6em;
    margin-top: 2rem;
}

/* Large Screens */
@media (min-width: 780px) {
    .section-cards {
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }

    .recente-cards{
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }
}

</style>