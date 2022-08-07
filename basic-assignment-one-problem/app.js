const app = Vue.createApp({
     data(){
         return{
             yourName: 'Frost',
             yourAge: 27,
             yourAgeFuture: 32,
             googleimageLink: 'https://images.unsplash.com/photo-1659410186752-ba1d0a244c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80'

         }
     },
     methods: {
         createRandomNum() {
             const randomNumber = Math.random();
             return randomNumber
         }
    }
})

app.mount('#assignment')