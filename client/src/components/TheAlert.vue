<template>

    <!-- Dynamic class -->
    <div :class="['alert', alertType]">
        <div class="alert-content">
            <h1>{{ msg }}</h1>
        </div>
    </div>

</template>

<script>

export default {
    props: {
        alertType: String,
        msg: String,
    },
}

</script>

<style scoped>
.alert {
    display: flex;
    position: fixed;
    align-items: end;
    width: 70vw;
    height: 10rem;
    border-radius: 20px;
    background-color: #000000;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 0 10px 0 #000000;
}

.error {
    background-color: #ff0000;
}

.done {
    background-color: #44ff00;
}

.alert-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    height: 70%;
    width: 100%;
    background-color: #FFFFFF;
}

h1 {
    font-family: 'Sansation';
    color: #000000;
    font-size: 1.5em;
}
</style>