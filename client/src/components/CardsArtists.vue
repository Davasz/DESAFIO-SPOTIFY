<template>
    <div class="card">
        <div class="card-content">
            <!-- Getting the image src via props -->
            <img class="img-card" :src="imgUrl" alt="Imagem do Artista/Banda">
            <div class="card-informations">
                <!-- Getting the father information via slots -->
                <slot name="name"></slot>
                <slot name="genres"></slot>
            </div>
        </div>
    </div>
</template>

<script>

// Import vue functions
import { computed } from 'vue'

export default {
    props: {
        imgArtist: {
            Object
        }
    },

    setup(props) {
        // Checks if there is an image url, if not, it returns a default one
        const imgUrl = computed(() => {
            if (props.imgArtist && props.imgArtist.url) {
                return props.imgArtist.url
            } else {
                return 'https://via.placeholder.com/640'
            }
        });

        // Returning the variables
        return {
            imgUrl
        };
    }
}

</script>

<style>

/* Mobile First */
.card {
    margin-top: 3rem;
    width: 15rem;
    height: 20rem;
    border-radius: 20px;
    padding: 5px;
    background-image: linear-gradient(144deg, #a930ff, #c693f6 50%, #42007b);
    cursor: pointer;
    transition: 0.3s;
}

.card-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #150731;
    border-radius: 20px;
    width: 100%;
    height: 100%;
}

.img-card {
    width: 13rem;
    height: 13rem;
    margin-top: 1rem;
    border-radius: 15px;
}

.card-informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

.card-name {
    font-family: 'Sansation', sans-serif;
    font-size: 1.5em;

}

.card-gender {
    font-family: 'Sansation', sans-serif;
    color: #B1B1B1;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px 4px #a930ff;
}
</style>