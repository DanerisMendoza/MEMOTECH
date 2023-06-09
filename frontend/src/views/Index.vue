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
    name: 'App',
    components: { Navbar},
  }
</script>