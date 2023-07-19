import {createRouter, createWebHistory} from 'vue-router'
import CoachDetails  from './pages/coaches/CoachesDetails.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/' , redirect: '/coaches'}, 
       { path: '/coaches' , component: CoachList},
       { path: '/coaches/:id' , component: CoachDetails, children: [
        {path: 'contact', component: ContactCoach},     // coaches/c1/contact
       ]},
       { path: '/register' , component: CoachRegistration},
       { path: '/requests' , component: RequestReceived},
       { path: '/:notFound(.*)' , component: NotFound},

    ]
});

export default router;