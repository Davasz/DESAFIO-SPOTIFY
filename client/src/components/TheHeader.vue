<template>
    <header>
        <nav>
            <!-- Dynamic class according to path -->
            <div :class="['div-link', 'home', { 'active': $route.path === '/' }]">
                <router-link class="link" to="/">Home</router-link>
            </div>
            <!-- Dynamic class according to path -->
            <div :class="['div-link', 'contracts', { 'active': $route.path === '/contratos' }]">
                <router-link class="link" to="/contratos">Contratos</router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped>

/* Mobile First */
header {
    font-family: 'Sansation', sans-serif;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}

nav {
    width: 90vw;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
}

nav .home {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 15px;
    width: 5rem;
    height: 3rem;
    border: solid;
    border-width: 2px;
    border-color: #B1B1B1;
}

nav .contracts {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 15px;
    width: 7rem;
    height: 3rem;
    border: solid;
    border-width: 2px;
    border-color: #B1B1B1;
}

nav .link {
    color: #FFFFFF;
}

.div-link {
    transition: 0.3s;
}

.div-link:hover {
    transform: translateY(-3px);
}

/* Dynamic link class */
nav .active {
    border: none;
    background-color: #993DF8;
}
</style>