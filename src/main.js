import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDVfnOY3XMoKJfpXWtIfn32SOJvg8wh-4M",
  authDomain: "week7-hechang.firebaseapp.com",
  projectId: "week7-hechang",
  storageBucket: "week7-hechang.firebasestorage.app",
  messagingSenderId: "5334467061",
  appId: "1:5334467061:web:26db4a71b8bcf307dae0bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { theme: { preset: Aura } })

app.mount('#app')
