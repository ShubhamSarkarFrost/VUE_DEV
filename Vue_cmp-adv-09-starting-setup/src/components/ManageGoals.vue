<template>
  <h2>Manage Goals</h2>
  <label>
    <input type="text" ref="goal"/>
  </label>
  <button @click="saveGoal">Save Goal</button>
  <teleport to="body">
  <error-alert v-if="inputIsInvalid">
    <h2>Input is Invalid</h2>
    <p> Please Enter a Valid Input</p>
    <button @click="confirmError">Okay</button>
  </error-alert>
  </teleport>
</template>


<script>

import ErrorAlert from './ErrorAlert.vue'

export default {
  components: {
    'error-alert': ErrorAlert
  },


  data() {
    return {
      inputIsInvalid: false
    }
  },

  methods: {
    saveGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        // alert('Input Must Not be Empty !!!')
        this.inputIsInvalid = true
      }
    },


    confirmError() {
          this.inputIsInvalid = false
    }


  }
}

</script>
