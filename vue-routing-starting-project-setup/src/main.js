import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('2---------------Before Enter-----------------');
        console.log(to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    //console.log(to, from ,savedPosition)
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

//-------------  Navigation Guard -----------------------//
router.beforeEach(function (to, from, next) {
  console.log('1--------Global Before Each---------');
  console.log(to, from);
  if(to.meta.needsAuth){
    console.log('Users needs Auth!!')
  }else{
    next();
  }
  //next('/users')
  //     if(to.name === 'team-members'){
  //      next()
  //     }else{
  //      next({name: 'team-members', params: { teamId: 't2' }});
  //     }
 
});

// Last Navigation Guard
router.afterEach(function (to, from) {
  console.log('5------ Global After Each ----------------------');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
