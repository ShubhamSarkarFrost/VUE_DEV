<template>
  <base-dialog v-if="inputisInvalid" title="Invalid Input" @close="confirmError">
    <template v-slot:message>
      <p> Unfortunately At Least One or More Input is Incorrect.</p>
      <p> Plese Check all the Inputs and Enter Valid Characters.</p>
    </template>
    <template v-slot:actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div>
      <label for="title">Title</label>
      <input id="title" type="text" name="title"  ref="titleInput">
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description"  name="description" rows="3" ref="descriptionInput"></textarea>
      </div>
      <div>
        <label for="link">Link</label>
        <input id="link" type="url" name="link" ref="linkInput">
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from "@/components/UI/BaseDialog";
import BaseButton from "@/components/UI/BaseButton";
export default {
  components: {BaseButton, BaseDialog},
  inject: ['addResource'],
   data() {
       return{
         inputisInvalid: false
       }
   },


   methods: {
      submitData(){
           const InputTitle = this.$refs.titleInput.value
           const DescInput = this.$refs.descriptionInput.value
           const LinkInput = this.$refs.linkInput.value

           if(InputTitle.trim() === '' || DescInput.trim() === '' || LinkInput.trim() === ''){
              this.inputisInvalid = true
             return;
           }

         this.addResource(InputTitle,DescInput,LinkInput)
      },
     confirmError() {
        this.inputisInvalid = false
     }
   },



}
</script>





<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
