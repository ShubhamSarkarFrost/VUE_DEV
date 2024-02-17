<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ Age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    // const user_name = ref('Shubham');
    // const age = ref(12);

    const user = reactive({
      user_name: 'Shubham',
      age: 12,
    });
    
    const userRefs = toRefs(user);
    
    function setUserAge() {
      user.age = 32;
    }

    // setTimeout(function () {
    //   (user.user_name = 'Joseph'), (user.age = 15);
    // }, 2000);

    
    return {
      userName: userRefs.user_name,
      Age: userRefs.age,
      setAge: setUserAge,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };l̥
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
