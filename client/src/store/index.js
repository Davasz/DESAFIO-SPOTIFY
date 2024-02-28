import { createStore } from 'vuex'
import axios from 'axios'
import getToken from '@/assets/js/getToken'

export default createStore({
  state: {
    // Artists' reference object
    artist: []
  },
  getters: {
  },
  mutations: {
    // Mutation to store artist data
    storeArtist(state, data) {
      state.artist = []
      data.forEach(e => {
        state.artist.push(e)
      });
    }
  },
  actions: {
    async storeArtist({ commit }, data) {
      try {
        const token = await getToken()

        const response = await axios.get(`${data}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then()
        commit('storeArtist', response.data.artists.items)
      } catch (error) {
        localStorage.removeItem('token')
      }
    }
  }
})
