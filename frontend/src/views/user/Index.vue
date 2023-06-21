<template>
    <Navbar :navType="'user'"/>

    <h1>HELLO USER</h1>
</template>

<script>
    import Navbar from '../../components/Navbar.vue';
    export default{
        components: { Navbar},
    }
</script>