import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // Artists' reference object
    artist: [{ "external_urls": { "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm" }, "followers": { "href": null, "total": 29796618 }, "genres": ["r&b", "soul"], "href": "https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm", "id": "3fMbdgg4jU18AjLCKBhRSm", "images": [{ "height": 640, "url": "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa", "width": 640 }, { "height": 320, "url": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa", "width": 320 }, { "height": 160, "url": "https://i.scdn.co/image/ab6761610000f1780e08ea2c4d6789fbf5cbe0aa", "width": 160 }], "name": "Michael Jackson", "popularity": 82, "type": "artist", "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/5OURNqzn8QmdMHVWSQ83eo" }, "followers": { "href": null, "total": 415 }, "genres": [], "href": "https://api.spotify.com/v1/artists/5OURNqzn8QmdMHVWSQ83eo", "id": "5OURNqzn8QmdMHVWSQ83eo", "images": [{ "height": 640, "url": "https://i.scdn.co/image/ab67616d0000b273afde7be6dae1659050bc3ce0", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/ab67616d00001e02afde7be6dae1659050bc3ce0", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/ab67616d00004851afde7be6dae1659050bc3ce0", "width": 64 }], "name": "Michael Jackson", "popularity": 25, "type": "artist", "uri": "spotify:artist:5OURNqzn8QmdMHVWSQ83eo" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/2XKBOnP3qXHP2FpzKplAYh" }, "followers": { "href": null, "total": 104248 }, "genres": ["classic opm", "soft rock"], "href": "https://api.spotify.com/v1/artists/2XKBOnP3qXHP2FpzKplAYh", "id": "2XKBOnP3qXHP2FpzKplAYh", "images": [{ "height": 900, "url": "https://i.scdn.co/image/eb9e5a64eb02e387f8b176179dc1779c42dc9a6e", "width": 602 }, { "height": 299, "url": "https://i.scdn.co/image/e27803dd5b82ded4b64f89df4f71e2cace59f49e", "width": 200 }, { "height": 96, "url": "https://i.scdn.co/image/1e4779e2d60b724f85be382123f9af6f9830deaf", "width": 64 }], "name": "Michael Johnson", "popularity": 52, "type": "artist", "uri": "spotify:artist:2XKBOnP3qXHP2FpzKplAYh" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/4Q3aSZGYDiFjmeoilPa8zE" }, "followers": { "href": null, "total": 863 }, "genres": [], "href": "https://api.spotify.com/v1/artists/4Q3aSZGYDiFjmeoilPa8zE", "id": "4Q3aSZGYDiFjmeoilPa8zE", "images": [], "name": "Michael Jackson For Siegfried", "popularity": 7, "type": "artist", "uri": "spotify:artist:4Q3aSZGYDiFjmeoilPa8zE" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1DsOlo169ovaAx19956vOb" }, "followers": { "href": null, "total": 5708 }, "genres": [], "href": "https://api.spotify.com/v1/artists/1DsOlo169ovaAx19956vOb", "id": "1DsOlo169ovaAx19956vOb", "images": [{ "height": 640, "url": "https://i.scdn.co/image/ab6761610000e5eb529283cec641d43f9839ad61", "width": 640 }, { "height": 320, "url": "https://i.scdn.co/image/ab67616100005174529283cec641d43f9839ad61", "width": 320 }, { "height": 160, "url": "https://i.scdn.co/image/ab6761610000f178529283cec641d43f9839ad61", "width": 160 }], "name": "MikeJack3200", "popularity": 35, "type": "artist", "uri": "spotify:artist:1DsOlo169ovaAx19956vOb" }]
  },
  getters: {
  },
  mutations: {
    // Mutation to store artist data
    storeArtist(state, data) {
      data.forEach(e => {
        console.log(e)
        state.artist.push(e)
      });
    }
  },
  actions: {
    async storeArtist({ commit }, data) {
      const response = await axios.get(`${data}`, {
        headers: {
          Authorization: 'Bearer BQBb3ZnrLONVOIfJtNliXsxe4RMs1ZS6kfQ1gE8CiGfzwINAy9wG-rMiNMVTA33aAadE_o2nmzud0sDzfVGOr3qjy6sKyW3ocUPs5jvRB6mOhINWO94'
        }
      }).then()
      commit('storeArtist', response.data.artists.items)
    }
  }
})
