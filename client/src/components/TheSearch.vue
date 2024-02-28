<template>
    <div class="search-div">
        <input class="search" placeholder="Procure o artista/banda" type="text">
        <img @click="onSearch()" class="search-icon" src="../assets/img/icons/search-icon.svg" alt="Ícone de pesquisa">
    </div>
</template>

<script>

// Import store
import { useStore } from 'vuex';

export default {
    setup() {
        // Store initialization
        const store = useStore();

        // Handling research method
        const onSearch = () =>  {
            // Calling the storeArtist action
            // store.dispatch('storeArtist', 'https://api.spotify.com/v1/search?q=Michael+Jackson&type=artist&limit=5')
        }

        // Returning the variables
        return {
            store,
            onSearch
        }
    }

}

</script>

<style scoped>

/* Mobile First */
.search-div {
    position: relative;
}

.search {
    font-family: sans-serif;
    width: 90vw;
    height: 3.2rem;
    background-color: #35294D;
    color: #B3B1B1;
    font-size: 1em;
    border: none;
    outline: none;
    border-radius: 46px;
    padding: 1rem;
    box-sizing: border-box;
}

.search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    cursor: pointer;
}</style>
