<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');
    console.log(context);
    onBeforeMount(() =>{
      console.log("On Before Mount is Trigerred");
    })
    onMounted(() => {
      console.log("On Mounted Hook is Trigerred");
    })
    onBeforeUpdate(() =>{
      console.log("On Before Update is Trigerred");
    })
    onUpdated(() =>{
      console.log("On Updated is Trigerred");
    })
    onBeforeUnmount(() =>{
      console.log("On Before Unmount is Trigerred");
    })
    onUnmounted(() =>{
      console.log("On Unmounted is Trigerred");
    })
    return { userName: uName, age:age };
  }
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
}
</script>