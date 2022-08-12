const App = Vue.createApp({
    data(){
      return{
        name: '',
        updatename: ''
      };
    },
    methods:{
        clickbuttonevent(event){
            alert("You Clicked it!!")
        },
        setName(event){
            this.name = event.target.value;
        },
        setupdateName(event){
            this.updatename = event.target.value;
        }
    }

})

App.mount("#assignment")