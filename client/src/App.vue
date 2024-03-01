<template>

  <TheHeader />  <!-- Dynamic header -->

  <router-view />
  
  <TheFooter /> <!-- Dynamic footer -->

</template>

<script>

// Import global css
import '@/assets/css/global.css'

// Import components
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
}

</script>