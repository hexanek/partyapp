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
        lng: 18.341,
        id: "3ads3",
        date: "2020-02-03",
        time: "20:21"
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
        lng: 18.41,
        id: "fsd324",
        date: "2020-01-20",
        time: "20:30"
      }
    ],
    user: {
      id: "fdsoiji",
      joinedEvents: ["3ads3"]
    }
  },
  mutations: {
    addEvent(state, payload) {
      state.loadedEvents.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    addEvent({ commit }, payload) {
      const event = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        eventType: payload.eventType,
        imageUrl: payload.imageUrl,
        dress: payload.dress,
        cash: payload.cash,
        lat: payload.lat,
        lng: payload.lng,
        date: payload.date,
        time: payload.time,
        id: "dasdas"
      };
      commit("addEvent", event);
    },
    signUpUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            joinedEvents: []
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  modules: {},
  getters: {
    loadedEvents(state) {
      return state.loadedEvents;
    },
    loadedEvent(state) {
      return eventId => {
        return state.loadedEvents.find(event => {
          return event.id === eventId;
        });
      };
    }
  }
});
