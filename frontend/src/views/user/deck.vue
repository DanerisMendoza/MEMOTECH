<template>
    <Navbar :navType="'user'"/>
    <NewDeckComp/>
    <deckTableComp/>
</template>

<script>
    import Navbar from '../../components/Navbar.vue';
    import deckTableComp from '../../components/deckTableComp.vue';
    import NewDeckComp from '../../components/NewDeckComp.vue';
    export default{
        components: { Navbar,deckTableComp,NewDeckComp},
    }
</script>