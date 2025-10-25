<template>
  <div class="container py-4" style="max-width:480px">
    <h1>Create an Account</h1>
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
      <button class="btn btn-primary w-100" @click="register">
        Save to Firebase
      </button>
    </p>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Register Successful!", data.user)
      alert("Registered successfully!")
      router.push("/FireLogin")
    })
    .catch((error) => {
      console.log("Firebase Register Error:", error.code, error.message)
      console.log(error.code)
    })
}
</script>
