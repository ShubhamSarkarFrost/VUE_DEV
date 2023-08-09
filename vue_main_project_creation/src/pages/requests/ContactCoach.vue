<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{errors: !email.isValid}">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email.val"/>
      <p v-if="!email.isValid">Please Enter a Correct Email Id</p>
    </div>
    <div class="form-control" :class="{errors: !message.isValid}">
      <label for="message">Your Message</label>
      <textarea id="message" rows="5" v-model.trim="message.val"></textarea>
      <p v-if="!message.isValid">Message Field should not be Empty</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>
<script>
import BaseButton from "../../components/ui/BaseButton";
export default {
  components: {BaseButton},
  data(){
    return{
      email:{
        val: '',
        isValid: true,
      },
      message:{
        val: '',
        isValid: true,
      },
      formIsValid: true
    }
  },
  methods: {
    validateContactForm(){
      this.formIsValid = true;
      if (this.email.val === '' || !this.email.val.includes('@') || !this.email.val.includes('.')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm(){
      this.validateContactForm()
      if (!this.formIsValid) {
        return;
      }

      const contactFormData = {
        email: this.email.val,
        message: this.message.val,
      };
      console.log(contactFormData)

      // this.$emit('contact-data', contactFormData);
    }
  }
}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>