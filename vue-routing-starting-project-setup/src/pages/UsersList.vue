<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved : false}
  },
  methods: {
    confirmInput() {
      // do something and navigate away to Teams Tab 
      this.$router.push('/teams');
  },
    saveChanges(){
      this.changesSaved = true;
    }
},
beforeRouteEnter(to, from, next){
   console.log('3------Before Route Enter-------')
   console.log(to, from)
   next();
},
beforeRouteLeave(to, from , next){
  console.log('Users List Component Before Route Leave')
  console.log(to, from)

  if(this.changesSaved){
    next()
  }else{
    const userwantstoleave = prompt("Are You Sure ? You Have some Unsaved Data")
    if(userwantstoleave === 'Yes'){
      next()
    }
    next(false)
  }

},
// unmounted() {
//   if(this.saveChanged === false){
//      alert("The Changes have not been Saved")
//   }
  
// }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>