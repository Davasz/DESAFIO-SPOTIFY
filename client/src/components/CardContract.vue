<template>

    <!-- Assigns v-model to all fields and disables editing -->
    <div class="contract">
        <input v-model="artistName" class="full-input" id="name-artist" type="text" readonly>
        <input v-model="userName" class="full-input" type="text" readonly>
        <div class="conjunt-inputs">
            <input v-model="date" class="input-data" readonly type="text">
            <input v-model="cache" class="input-number" type="number" readonly>
        </div>
        <input v-model="eventAdress" class="full-input" type="text" readonly>
    </div>

</template>

<script>

// Import vue functions
import { ref } from 'vue'

export default {
    props: {
        contract: Object
    },

    setup(props) {

        // Variables
        let artistName = ref(props.contract.artist_name)
        let userName = ref(props.contract.user_name)
        let date = ref(props.contract.date.split('T')[0])
        let cache = ref(props.contract.cache)
        let eventAdress = ref(props.contract.event_adress)

        // Return the variables
        return {
            artistName,
            userName,
            date,
            cache,
            eventAdress
        };
    }

}

</script>

<style scoped>

/* Mobile First */
.contract {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 90vw;
    height: 20rem;
    margin-bottom: 2rem;
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

.artist-informations {
    width: 100%;
    margin-left: 1rem;
    background-color: #8f8f8f;
}

.full-input {
    width: 90%;
}

/* Large Screens */
@media (min-width: 780px) {
    form {
        width: 70vw;
    }
}
</style>