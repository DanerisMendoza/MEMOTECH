<template>
    <div>
        <Navbar/>
        <h1>Index Page</h1>
        <h1>Hi, {{ this.$store.getters.getUsername}}!</h1>
    </div>
</template>

<script>
 import Navbar from '../components/Navbar.vue';

 export default {
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
    }
  },
    name: 'App',
    components: { Navbar},
  }
</script>