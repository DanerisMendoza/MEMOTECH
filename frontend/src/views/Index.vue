<template>
    <div>
        <Navbar/>
        <h1>Index Page</h1>
        <h1>Hi, {{ this.$store.getters.getUsername}}!</h1>
    </div>
</template>

<script>
 import Navbar from '../components/Navbar.vue';
 import { emitter } from '../eventBus';

 export default {
  created() {
    emitter.on('user_data_changed', this.user_data_changed);
  },
  beforeUnmount() {
    emitter.off('user_data_changed', this.user_data_changed);
  },
  mounted() {
    window.addEventListener('storage', this.handleStorageChange);
  },
  destroyed() {
    window.removeEventListener('storage', this.handleStorageChange);
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'username') {
        const newUsername = event.newValue;
        this.$store.commit('setUsername', newUsername);
      }
    },
    user_data_changed(newUsername){
      console.log(newUsername);
    }
  },
    name: 'App',
    components: { Navbar},
  }
</script>