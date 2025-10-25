import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue';
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBookAPI from '../views/GetAllBookAPI.vue';

const routes = [
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView

  },
  { path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
   {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView,
  },
  { path: '/weather', name: 'GetWeather', component: WeatherView },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI,
  },
  { path: '/GetAllBookAPI', name: 'GetAllBookAPI', component: GetAllBookAPI },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
