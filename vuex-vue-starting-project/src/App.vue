<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
   <the-counter></the-counter>
   <favourite-value></favourite-value>
  <button @click="addOne">Add 10</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import {mapGetters} from "vuex";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  
  methods: {
    addOne(){
       this.$store.dispatch({ type:'increase', value: 10});
    }
  },
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>