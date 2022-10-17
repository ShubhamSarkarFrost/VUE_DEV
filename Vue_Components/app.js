const App = Vue.createApp({
    data() {
        return {

            friends: [
                {id: 'manual', name: 'Manuel Lorenz', Phone: '01234 5678 991', Email: 'manuel@localhost.com'},
                {id: 'julie', name: 'Julie Jones', Phone: '09876 543 221', Email: 'julie@localhost.com'},
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})
App.component('friend-contact', {
    template:`<li>
    <h2>{{ friend.name }}</h2>
    <button  @click="toggleDetails">{{ detailsAreVisible ? 'HIDE' : 'SHOW' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.Phone }}</li>
      <li><strong>Email:</strong>{{ friend.Email }}</li>
    </ul>
    </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friends:
                {id: 'manual', name: 'Manuel Lorenz', Phone: '01234 5678 991', Email: 'manuel@localhost.com'},


        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }


    }
})


App.mount('#app')