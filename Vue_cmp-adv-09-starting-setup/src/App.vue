<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!--    <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>-->
<!--    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals>-->
<!--    Swap Components using Dynamic Component == Component Keyword-->
    <keep-alive>
      <component v-bind:is="selectedComponents"></component>
    </keep-alive>

<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals>-->
<!--      <template #default="slotProps">-->
<!--        <h2>{{ slotProps.item }}</h2>-->
<!--      </template>-->
<!--    </course-goals>-->
  </div>
</template>

<script>

//Local Import of Component Using Component Keyword
import TheHeader from './components/TheHeader.vue'
import ManageGoals from './components/ManageGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
// import UserInfo from "./components/UserInfo";
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals'

export default {
  components: {
    'the-header': TheHeader,
    // 'user-info': UserInfo,
    // 'badge-list': BadgeList,
    // 'course-goals': CourseGoals
    'manage-goals': ManageGoals,
    'active-goals': ActiveGoals

  },
  data() {
    return {
      selectedComponents: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponents = cmp;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>