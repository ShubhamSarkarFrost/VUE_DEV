<template>
    <base-card>
<!--      shortcut for v-slot is #-->
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <p>{{ infoText }}</p>
    </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard";
export default {
  components: {BaseCard},
  props: ['fullName', 'infoText', 'role'],
};
</script>

