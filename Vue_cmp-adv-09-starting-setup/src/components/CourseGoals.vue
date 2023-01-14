<template>
  <ol>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
  </ol>
</template>


<script>
export default {
  data() {
    return {
      goals: ['Finish the Course', 'Evaluate the Course', 'Learn Vue']
    }
  }
}
</script>