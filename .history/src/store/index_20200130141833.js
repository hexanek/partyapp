import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

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
    user: null
  },
  mutations: {
    setLoadedEvents(state, payload) {
      state.loadedEvents = payload;
    },
    addEvent(state, payload) {
      state.loadedEvents.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setCreatedMeetupKey(state, payload) {
      state.createdMeetupKey = payload;
    }
  },
  actions: {
    loadEvents({ commit }) {
      firebase
        .database()
        .ref("events")
        .once("value")
        .then(data => {
          const event = [];
          const obj = data.val();
          for (let key in obj) {
            event.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              location: obj[key].location,
              eventType: obj[key].eventType,
              imageUrl: obj[key].imageUrl,
              dress: obj[key].dress,
              cash: obj[key].cash,
              lat: obj[key].lat,
              lng: obj[key].lng,
              date: obj[key].date,
              time: obj[key].time,
              creatorId: obj[key].creatorId
            });
          }
          commit("setLoadedEvents", event);
        })
        .catch(error => {
          alert(error);
        });
    },
    addEvent({ commit, getters }, payload) {
      const event = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        eventType: payload.eventType,
        dress: payload.dress,
        cash: payload.cash,
        lat: payload.lat,
        lng: payload.lng,
        date: payload.date.toString(),
        time: payload.time,
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;
      firebase
        .database()
        .ref("events")
        .push(event)
        .then(data => {
          return data.key;
        })
        .then(key => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
          commit("setCreatedMeetupKey", key);
          return firebase
            .storage()
            .ref("events/" + key + ext)
            .put(payload.image);
        })
        .then(fileData => {
          let fullPath = fileData.metadata.fullPath;
          return firebase
            .storage()
            .ref(fullPath)
            .getDownloadURL();
        })
        .then(URL => {
          imageUrl = URL;
          key = getters.createdMeetupKey;
          return firebase
            .database()
            .ref("events")
            .child(key)
            .update({ imageUrl: imageUrl });
        })
        .then(() => {
          commit("addEvent", {
            ...event,
            imageUrl: imageUrl,
            id: key
          });
        })
        .catch(error => {
          alert(error);
        });
    },
    signUpUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            joinedEvents: [],
            name: payload.name
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          alert(error);
        });
    },
    signInUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const setUser = {
            id: user.uid,
            joinedEvents: [],
            name: payload.name
          };
          commit("setUser", setUser);
        })
        .catch(error => {
          alert(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        joinedEvents: [],
        name: payload.name
      });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
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
    },
    user(state) {
      return state.user;
    },
    createdMeetupKey(state) {
      return state.createdMeetupKey;
    }
  }
});
