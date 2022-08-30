const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            taskListIsVisible: true,

        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        },
        computed: {
            buttonCaption() {
                return this.taskListIsVisible ? 'Hide List' : 'Show List';
            },
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        },
    }
})

app.mount('#assignment')