const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            result: ''
        }
        },
    watch: {
      counter(value){
          if(value < 37){
             this.result = 'Not There Yet'
          }else if(value > 37){
              this.result = 'Too much!'
          }else{
              this.result = 'You Have reached the Mark of 37'
          }
      }
    },
    methods: {
        add(num) {
            console.log("The Number was Clicked!!")
            this.counter = this.counter + num;

        }
    }
});

app.mount('#assignment');