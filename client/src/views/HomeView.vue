<template>
    <main>
        <div class="salutation">
            <h1>
                <span>Olá</span>, seja bem-vindo!
            </h1>
        </div>

        <!-- Search component -->
        <TheSearch></TheSearch>

        <FormArtist :artist="selectedArtist" @close="removeForm" v-if="showForm"></FormArtist>

        <!-- Card component -->
        <!-- Take each artist from the state store and generate a card with information about each one -->
        <section class="section-cards">
            <CardsArtists v-for="(artist, index) in store.state.artist" :key="index" @click="apperForm(artist)" :imgArtist="artist.images[0]">
                <!-- Transmitting name information via slots -->
                <template v-slot:name>
                    <h1 class="card-name">{{ artist.name.split(' ').slice(0, 2).join(' ')}}</h1>
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

// Import vue functions
import { ref } from 'vue'

// Import store
import { useStore } from 'vuex';

export default {
    components: {
        TheSearch,
        CardsArtists,
        FormArtist
    },

    setup() {
        // Store initialization
        const store = useStore();

        // Variables
        let showForm = ref(false)
        const selectedArtist = ref(null);

        // Methods
        const apperForm = (artist) => {
            selectedArtist.value = artist
            showForm.value = true
        }
        const removeForm = () => {
            showForm.value = false
        }

        // Returning the variables
        return {
            store,
            showForm,
            apperForm,
            removeForm,
            selectedArtist
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
    color: aliceblue;
}

.salutation {
    font-family: 'Sansation', sans-serif;
    font-size: 1em;
    margin-bottom: 2rem;
}

.salutation span {
    color: #B1B1B1;
}

@media (min-width: 780px) {
    .section-cards {
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }
}
</style>