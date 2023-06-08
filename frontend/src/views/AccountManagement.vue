<template>
    <div>
        <Navbar/>
        <h1>Account Management Page</h1>
        <RegistrationComp/>

    </div>
</template>

<script>
 import Navbar from '../components/Navbar.vue';
 import RegistrationComp from '../components/RegistrationComp.vue';

 export default {
    name: 'App',
    components: { Navbar,RegistrationComp},
  }
</script>