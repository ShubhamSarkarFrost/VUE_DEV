<template>
  <ul>
    <learning-resource
        v-for="res in storedResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link">

    </learning-resource>
  </ul>
</template>

<script>

import LearningResource from './components/resources/LearningResource.vue'




export default {

   components: {

     'learning-resource': LearningResource

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