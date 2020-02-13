import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedEvents: [],
    user: null,
    loading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setLoadedEvents(state, payload) {
      state.loadedEvents = payload;
    },
    addEvent(state, payload) {
      state.loadedEvents.push(payload);
    },
    updateEvent(state, payload) {
      const obj = state.loadedEvents.find(obj => {
        obj.id === payload.id;
      });
      if (payload.title) {
        obj.title = payload.title;
      }
      if (payload.description) {
        obj.description = payload.description;
      }
      if (payload.location) {
        obj.location = payload.loaction;
      }
      if (payload.eventType) {
        obj.eventType = payload.eventType;
      }
      if (payload.lat) {
        obj.lat = payload.lat;
      }
      if (payload.lng) {
        obj.lng = payload.lng;
      }
      if (payload.dress) {
        obj.dress = payload.dress;
      }
      if (payload.cash) {
        obj.cash = payload.cash;
      }
      if (payload.date) {
        obj.date = payload.date;
      }
      if (payload.time) {
        obj.time = payload.time;
      }
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setCreatedKey(state, payload) {
      state.createdKey = payload;
    },
    joinUserEvent(state, payload) {
      const id = payload.id;
      if (state.user.joinedEvents.findIndex(meetup => meetup.id === id) >= 0) {
        return;
      }
      state.user.joinedEvents.push(id);
      state.user.key[id] = payload.key;
    },
    disJoinUserEvent(state, payload) {
      const joinedEvents = state.user.joinedEvents;
      joinedEvents.splice(
        joinedEvents.findIndex(event => event.id === payload),
        1
      );
      Reflect.deleteProperty(state.user.key, payload);
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
          commit("setCreatedKey", key);
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
          key = getters.createdKey;
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
    updateEvent({ commit }, payload) {
      const replaceAll = (s = "", f = "", r = "") =>
        s.replace(
          new RegExp(f.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
          r
        );

      const obj = {};
      if (payload.title) {
        obj.title = payload.title;
      }
      if (payload.description) {
        obj.description = payload.description;
      }
      if (payload.location) {
        obj.location = payload.location;
      }
      if (payload.eventType) {
        obj.eventType = payload.eventType;
      }
      if (payload.lat) {
        obj.lat = payload.lat;
      }
      if (payload.lng) {
        obj.lng = payload.lng;
      }
      if (payload.dress) {
        obj.dress = payload.dress;
      }
      if (payload.cash) {
        obj.cash = payload.cash;
      }
      if (payload.date) {
        obj.date = payload.date;
      }
      if (payload.time) {
        obj.time = payload.time;
      }
      firebase
        .database()
        .ref("events")
        .child(payload.id)
        .update(
          JSON.parse(replaceAll(JSON.stringify(obj), "undefined", "null"))
        )
        .then(() => {
          commit("updateEvent", payload);
        })
        .catch(e => {
          alert(e);
        });
    },
    // joinUserEvent({ commit }, getters) {
    //   const user = getters.user;
    //   firebase
    //     .database()
    //     .ref("/users/" + user.id)
    //     .child("/events")
    //     .push(payload)
    //     .then(data => {
    //       commit("joinUserEvent", {
    //         id: payload,
    //         key: data.key
    //       }).catch(e => {
    //         alert(e);
    //       });
    //     });
    // },
    disJoinUserEvent({ commit, getters }, payload) {
      const user = getters.user;
      if (!user.key) {
        return;
      }
      const key = user.key[payload];
      firebase
        .database()
        .ref("/users/" + user.id + "/events")
        .child(key)
        .remove()
        .then(() => {
          commit("disJoinUserEvent", payload);
        })
        .catch(e => {
          alert(e);
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
            name: payload.name,
            key: {}
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
            name: payload.name,
            key: {}
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
        name: payload.name,
        key: {}
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
    createdKey(state) {
      return state.createdKey;
    },
    loading(state) {
      return state.loading;
    }
  }
});
