import { createStore } from 'vuex';

const store = createStore({
  state: {
    username: null
  },

  getters: {
    getUsername: state => state.username
  },

  mutations: {
    setUsername: (state, newUsername) => {
      state.username = newUsername;
    }
  }
});

export default store;
