<template>
    <Navbar :navType="'user'"/>

    <h1>Deck</h1>
</template>

<script>
    import Navbar from '../../components/Navbar.vue';
    export default{
        components: { Navbar},
    }
</script>