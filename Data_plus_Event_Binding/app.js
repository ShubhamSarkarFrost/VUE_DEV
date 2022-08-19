const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: ''
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function (){
          that.counter = 0;
        },2000);
      }
    },
    name(value) {
      if(value === ' '){
        this.fullName = ' ';
      }else{
        this.fullName = value;
      }
    },
    lastName(value){
      if(value === ' '){
        this.fullName = ' ';
      }else{
        this.fullName = this.name + ' '+ this.lastName;
      }
    }
  },
  computed:{
    // fullName() {
    //    console.log("Running again .........")
    //     if (this.namme === ' ' || this.lastName === ' ') {
    //       return ' ';
    //     }
    //     return this.name + ' ' + this.lastName;
    //
    //   }
    },
  methods: {
    // outputFullNamme(){
      // Not a Good Option as the following method will be executed everytime
      // if(this.namme === ''){
      //   return ' ';
      // }
      //   return this.name + ' ' +'Sarkar';

    // },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name ='';
    }
  }
});

app.mount('#events');
