<template>

        <main>
                <h1>Contratos realizados</h1>
                
                <!-- Take each contract from the state store and generate a card with information about each one -->
                <CardContract v-for="(contract) in store.state.contracts" :key="contract.id_contract" :contract="contract" />
       
        </main>

</template>

<script>

// Import components
import CardContract from '@/components/CardContract.vue';

// Import store
import { useStore } from 'vuex';


export default {
        components: {
                CardContract
        },
        setup() {
                // Store initialization
                const store = useStore()

                // Call the action of loading contracts
                store.dispatch('getContracts')

                // Return store constant
                return {
                        store
                }
        }
}

</script>

<style scoped>

main {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FFFFFF;
}

h1 {
        font-family: 'Sansation';
        margin-bottom: 2rem;
}

</style>