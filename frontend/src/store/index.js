import { createStore } from 'vuex';

const store = createStore({
  state: {
    username: localStorage.getItem('username')
  },

  getters: {
    getUsername: state => state.username
  },

  mutations: {
    setUsername: (state, newUsername) => {
      state.username = newUsername;
      localStorage.setItem('username', newUsername);
    }
  }
});

export default store;
