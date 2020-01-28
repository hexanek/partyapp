import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedEvents: [
      {
        title: "Domoweczka",
        location: "Narcyzowa 9",
        description: "najlepsza domowka ever",
        eventType: "Local/House Party",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        dress: "Smart Casual",
        cash: "30",
        lat: 54.291,
        lng: 18.341
      },
      {
        title: "Club",
        location: "Pokojowa 31",
        description: "najlepsza imprezka ever 2",
        eventType: "Club",
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        dress: "Smart Casual",
        cash: "30",
        lat: 54.91,
        lng: 18.41
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
