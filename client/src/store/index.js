import { createStore } from 'vuex'
import axios from 'axios'
import getToken from '@/assets/js/getToken'

export default createStore({
  state: {
    artist: [],  // Artists' reference object
    recenteArtist: [],   // Recent Artists' reference object
    contracts: []   // Contracts' reference object
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
    },

    // Mutation to store recente artist data
    saveRecentArtist(state, data) {
      state.artist = []
      const exists = state.recenteArtist.some(c => c.id === data.id)
      // If the artist does not exist, add it to the array
      if (!exists) {
        state.recenteArtist.push(data)
      }
    },

    // Mutation to store contracts data
    storeContract(state, data) {
      state.contracts = []
      data.forEach(e => {
        state.contracts.push(e)
      })
    }
  },
  actions: {

    // Save the Spotify API response at store state
    async storeArtist({ commit }, data) {
      try {
        const token = await getToken() // Verify token

        const response = await axios.get(`${data}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then()

        commit('storeArtist', response.data.artists.items) // Call the mutations to save

      } catch (error) {
        localStorage.removeItem('token') // The only likely error is that the token is expired, so remove the token from localstorage
        console.log(error)
      }
    },

    // Save the contracts data from local API
    async storeContract(commit, data) {
      try {
        await axios.post('http://localhost:3000', data)
      } catch (error) {
        console.log(error) // Basic errors have already been addressed in the components
      }
    },

    // Save the Recente Artists
    async getRecentArtists({ commit }) {
      try {
        const token = await getToken() // Verify token

        this.state.recenteArtist = [] // Clean the recente artists array

        await this.dispatch('getContracts') // Call the getCOntracts acction


        // For each contract, get the artist's ID
        this.state.contracts.forEach((async (c) => {
          // Calls the Spotify API, which returns the artist with the specific id
          const artistContrated = await axios.get('https://api.spotify.com/v1/artists/' + c.artist_id, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then()

          commit('saveRecentArtist', artistContrated.data) // Call the mutation
        }))
      } catch (error) {
        localStorage.removeItem('token') // The only likely error is that the token is expired, so remove the token from localstorage
        console.log(error)
      }


    },

    // Save all contracts at store state
    async getContracts({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000').then()

        commit('storeContract', response.data) // Call the mutation 
      } catch (error) {
        console.log(error) // There is no serious error that is precisely addressed
      }
    }
  }
})
