const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({

  template: `
    <p>{{ favorite_food }}</p>
  `,
    data(){
      return{
        favorite_food: 'Pizza!!'
      };
    },
})

app2.mount('#app2')

// ...
//Reactive Property Change -Under the Hood!!
// const data = {
//   message: 'Hello',
//   longmessage: "Hello World!!"
// };
//
// const handler = {
//   set(target,key,value){
//    // console.log(target)
//    // console.log(key)
//    // console.log(value)
//     if(key === 'message'){
//       target.longmessage = value + 'World'
//     }
//     target.message = value
//   }
// }
//
// const proxy = new Proxy(data,handler);
//
// proxy.message = "Hello!!!!!"
// console.log(proxy.longmessage);
//
// proxy.message = "Hello!!"
