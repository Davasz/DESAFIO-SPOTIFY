<template>
    <main>
        <div class="salutation">
            <h1>
                <span>Olá</span>, seja bem-vindo!
            </h1>
        </div>

        <!-- Search component -->
        <TheSearch></TheSearch>

        <!-- Card component -->
        <!-- Take each artist from the state store and generate a card with information about each one -->
        <CardsArtists v-for="(artist, index) in store.state.artist" :key="index" :imgArtist="artist.images[0]">
            
            <!-- Transmitting name information via slots -->
            <template v-slot:name>
                <h1 class="card-name">{{ artist.name }}</h1>
            </template>

            <!-- Transmitting genres information via slots -->
            <template v-slot:genres>
                <p class="card-gender">{{ artist.genres[0] }}</p>
            </template>

        </CardsArtists>


    </main>
</template>

<script>

// Import components
import TheSearch from '@/components/TheSearch.vue';
import CardsArtists from '@/components/CardsArtists.vue';
// Import vue functions

// Import store
import { useStore } from 'vuex';

export default {
    components: {
        TheSearch,
        CardsArtists
    },

    setup() {
        // Store initialization
        const store = useStore();

        // Returning the variables
        return {
            store
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
</style>