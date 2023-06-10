import { createStore } from 'vuex';
import { emitter } from '../eventBus';

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
      emitter.emit("user_data_changed");
    }
  }
});

export default store;
