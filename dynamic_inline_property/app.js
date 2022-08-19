const app = Vue.createApp({
    data(){
        return{
            boxAselected : false,
            boxBselected : false,
            boxCselected : false
        };
    },

    methods : {
       boxSelected(box){
           if(box === 'A'){
               this.boxAselected = true;
               console.log('Box A was selected!!')
           }else if(box === 'B'){
               this.boxBselected = true;
               console.log('Box B was selected!!')
           }else{
               this.boxCselected = true;
               console.log('Box C was selected!!')
           }
       }

    }


});

app.mount('#styling')