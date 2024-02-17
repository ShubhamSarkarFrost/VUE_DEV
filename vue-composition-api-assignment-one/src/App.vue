<template>
  <h2 v-if="display">{{ `My Course Goal is : ${Goals}` }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="goalsDisplay">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    
   const goals = 'Study Very Hard'
   const goalIsVisible = ref(true)

    function displayGoal() {
      goalIsVisible.value = !goalIsVisible.value;
    }

    return {
      Goals: goals, 
      display: goalIsVisible,
      goalsDisplay: displayGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
