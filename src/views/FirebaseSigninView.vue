<template>
  <div class="container py-4" style="max-width:480px">
    <h1>Sign In</h1>
    <p>
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="form-control mb-2"
      />
    </p>
    <p>
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="form-control mb-2"
      />
    </p>
    <p>
      <button class="btn btn-primary w-100" @click="signin">
        Sign in via Firebase
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const email = ref("")
const password = ref("")
const router = useRouter()

const signin = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((cred) => {
      console.log("Firebase Sign-in Successful!", cred.user)
      console.log("Current user:", auth.currentUser)
      router.push("/")
    })
    .catch((error) => {
      console.log(error.code)
    })
};
</script>
