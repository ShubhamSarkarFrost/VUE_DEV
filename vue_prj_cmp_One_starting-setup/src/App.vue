<template>
  <the-header title="RemmemberMe!!"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>


import StoredResources from "./components/resources/StoredResources.vue";
import TheHeader from "./components/layout/TheHeader.vue";




export default {

   components: {
     'stored-resources' :StoredResources,
     'the-header': TheHeader

   },


    data() {
      return {
        storedResources : [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: ' The Official Vue Js Documentation',
            link: 'https://vuejs.org/guide/'
          },
          {
            id: 'MDN',
            title: 'Web Development Official Guide',
            description: 'The Official Documentation for Web Development',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          }
        ]
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>