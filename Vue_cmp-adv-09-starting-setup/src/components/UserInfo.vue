<template>
    <base-card>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p>
    </base-card>
</template>

<script>
import BaseCard from "./BaseCard";
export default {
  components: {BaseCard},
  props: ['fullName', 'infoText', 'role'],
};
</script>

// scoped Style only Affects the component in which it is defined
<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>