<template>
      <div class="h-screen w-screen  flex justify-center items-center">
          <div class="register bg-white shadow-md w-4/12 h-auto py-7 px-10 rounded-lg">
            <h3 class="text-2xl text-center font-bold">Create account</h3>
            <p class="text-center">Already have an account? <router-link class="text-blue-300" to="/login">Sign in</router-link></p>
            <form class="mt-2">
              <input v-model="email" class="bg-gray-200 ring-1 ring-gray-200 ot rounded-md w-full p-2 focus:outline-none focus:bg-white mb-2" type="text" name="email" id="email" placeholder="Email...">
              <input v-model="password" class="bg-gray-200 ring-1 ring-gray-200 ot rounded-md w-full p-2 focus:outline-none focus:bg-white mb-2" type="password" name="password" id="password" placeholder="Password...">
              <button @click.prevent="handleRegister" class="w-full bg-blue-600 rounded-md relative p-2 text-white text-xl mb-2">Sign up <b-icon class="absolute top-3 right-3" icon="arrow-right"></b-icon></button>
              <p class="bg-red-500 p-2 rounded-lg text-white" v-if="err">Pastikan Email, Password Harus Di isi Dahulu</p>
              <div class="terms"><input type="checkbox" class="mr-2" name="terms" id="tersm"><span>I have read and agree to the &nbsp;</span><a class="text-blue-300" href="#">Terms of Service</a></div>
            </form>
          </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      err: false
    }
  },
  methods: {
    ...mapActions(['register']),
    handleRegister () {
      const data = {
        email: this.email,
        password: this.password
      }
      if (data.email.length > 3 && data.password.length > 3) {
        this.register(data)
          .then((res) => {
            this.$router.push('/login')
          })
          .catch((err) => {
            console.log(err)
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
