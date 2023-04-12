<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Data is Loading...</p>
      <p v-else-if="!isLoading && errornew ">{{ errornew }}</p>
      <p v-else-if="!isLoading && (!resultts ||  resultts.length === 0)"> No Stored Experiences Found...</p>
      <ul v-else>
        <survey-result
          v-for="result in resultts"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
// import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return{
      resultts: [] ,
      isLoading: false,
      erronew: null
    }
  },
  methods: {
     loadExperiences() {
            this.isLoading = true;
            this.errornew = null;
            fetch('https://vue-http-7d2b7-default-rtdb.firebaseio.com/surveys.json').then((response) =>{
              if(response.ok){
                return  response.json() 
              }
            }).then((data) => {
              this.isLoading = false;
              // console.log(data)
              const results = []; 
              for(const id in data) {
                results.push(
                  {id: id,
                     name:data[id].name ,
                      rating:data[id].rating
                    })
              }
              this.resultts = results
            }).catch(error =>{
               this.errornew = error 
               this.isLoading = false
               console.log(this.errormnew)  
            })
      }
      
  },
  mounted(){
    this.loadExperiences();
  }    
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>