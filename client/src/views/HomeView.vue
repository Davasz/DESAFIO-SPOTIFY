<template>
    <main>
        <div class="salutation">
            <h1>
                <span>Olá</span>, seja bem-vindo!
            </h1>
        </div>

        <TheSearch></TheSearch>
    </main>
</template>

<script>

// Imports
import TheSearch from '@/components/TheSearch.vue';

export default {
    components: {
        TheSearch
    }
}

</script>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: aliceblue;
    }
    .salutation {
        font-family: 'Sansation', sans-serif;
        font-size: 1em;
    }
    .salutation span {
        color: #B1B1B1;
    }
</style>