<template>
        <div class="h-screen w-screen  flex justify-center items-center">
            <div class="register bg-white shadow-md w-4/12 h-auto py-7 px-10 rounded-lg">
            <h3 class="text-2xl text-center font-bold">Log in to your account</h3>
            <p class="text-left font-light text-gray-300">Log in now to access the lates insights<br> experience for your social media performance</p>
            <form class="mt-2">
                <input v-model="email" class="bg-gray-200 ring-1 ring-gray-200 ot rounded-md w-full p-2 focus:outline-none focus:bg-white mb-2" type="text" name="email" id="email" placeholder="Email...">
                <input v-model="password" class="bg-gray-200 ring-1 ring-gray-200 ot rounded-md w-full p-2 focus:outline-none focus:bg-white mb-2" type="password" name="password" id="password" placeholder="Password...">
                <button @click.prevent="handleLogin" class="w-full bg-blue-600 rounded-md relative p-2 text-white text-xl mb-2" :disabled="err">Sign in</button>
                <p class="bg-red-500 p-2 rounded-lg text-white" v-if="err">Pastikan Email, Password Harus Di isi Dahulu</p>
                <p class="text-center font-light">Not registered yet? <router-link class="text-blue-300" to="/register">Create a new account</router-link></p>
            </form>
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      err: false
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      if (data.email.length > 3 && data.password.length > 3) {
        this.login(data)
          .then((res) => {
            this.email = ''
            this.password = ''
            this.$router.push('home')
          })
          .catch((err) => {
            alert(err)
          })
      } else {
        this.err = true
        setTimeout(() => { this.err = false }, 6000)
      }
    }
  }
}
</script>

<style scoped>

</style>
