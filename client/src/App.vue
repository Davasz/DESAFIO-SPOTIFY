<template>

  <TheHeader />
  <router-view />

</template>

<script>
// Import global css
import '@/assets/css/global.css'
// Import components
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup() {

  }
}

</script>
