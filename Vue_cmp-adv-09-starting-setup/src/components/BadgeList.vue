<template>
  <base-card>
    <template v-slot:header>
    <h2>Available Badges</h2>
    </template>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
  </base-card>
</template>



// scoped Style only Affects the component in which it is defined
<style scoped>


section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
<script>
import BaseCard from "./BaseCard";
export default {
  components: {BaseCard}
}
</script>