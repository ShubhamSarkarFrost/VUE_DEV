<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],    // In Order to Pass the Data through Multiple Component , use Provide and Inject
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>