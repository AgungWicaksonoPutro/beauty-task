<template>
    <div class="w-full h-screen shadow-md p-3 bg-white relative z-50">
      <div class="panel-menu w-full flex justify-end mb-2 lg-min:hidden">
        <button @click.prevent="$emit('event-close')" class=" w-8 bg-white rounded-md shadow-md p-2 flex justify-center items-center"><b-icon icon="box-arrow-left"></b-icon></button>
      </div>
        <div class="w-full h-20 flex justify-center items-center rounded-lg shadow-lg bg-gray-800 mb-2">
            <h2 class="text-white font-bold text-3xl lg:text-xl tracking-wider">Beauty<span class="text-blue-600">Task</span></h2>
        </div>
        <h4 class="text-lg font-semibold mx-2 text-gray-500 tracking-wide">Menu</h4>
        <ul class="nav-list">
            <li class="nav-link my-2 text-lg text-gray-500"><router-link class="w-full bg-white  hover:bg-gray-50 shadow-sm flex items-center p-2" to="/home"><b-icon class="mr-2" icon="house-door"></b-icon> Home</router-link></li>
            <li class="nav-link my-2 text-lg text-gray-500"><router-link class="w-full bg-white hover:bg-gray-50 shadow-sm flex items-center p-2" to="/profile"><b-icon class="mr-2" icon="person-badge"></b-icon> Profile</router-link></li>
            <li class="nav-link my-2 text-lg text-gray-500"><router-link class="w-full bg-white hover:bg-gray-50 shadow-sm flex items-center p-2" to="/add"><b-icon class="mr-2" icon="journal"></b-icon> Add, Update, Delete</router-link></li>
        </ul>
        <div class="user-info absolute bottom-5 w-full">
            <div class="nav flex items-center relative">
                <h4 class="text-lg font-semibold mx-2 text-gray-500 tracking-wide">Account</h4>
                <button v-if="show" @click.prevent="toggleClose" class="text-sm text-gray-500 absolute right-6 focus:outline-none z-10"><b-icon class="mr-2" icon="arrow-down-square"></b-icon></button>
                <button v-else @click.prevent="toggleOpen" class="text-sm text-gray-500 absolute right-6 focus:outline-none"><b-icon class="mr-2" icon="arrow-up-square"></b-icon></button>
            </div>
            <transition name="user">
                <div v-show="show" class="user flex items-center box-border">
                    <div class="container-img w-12 h-12 rounded-md mr-2">
                        <img class="bg-gray-200 w-full h-full rounded-md object-cover" :src="userData.avatar" alt="avatar">
                    </div>
                    <div class="details">
                        <p class="text-lg text-gray-600 font-medium">{{userData.first_name}} {{userData.last_name}}</p>
                        <p class="text-md text-gray-400 font-light">{{userData.email}}</p>
                    </div>
                    <button @click.prevent="$emit('set-logout')" class="text-sm mx-5 text-gray-600 bg-gray-100 p-1 rounded-lg hover:bg-gray-200 flex items-center ml-auto"><b-icon icon="power"></b-icon>Log out</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  props: {
    userData: {
      type: Object
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    ...mapActions(['getUserById']),
    toggleOpen () {
      this.show = !this.show
      this.getUserById(this.getUserId)
    },
    toggleClose () {
      this.show = !this.show
    }
  },
  computed: {
    ...mapGetters(['getUserId'])
  }
}
</script>

<style scoped>
.user-enter-active, .user-leave-active {
     transition: all 0.8s;
}
.user-enter, .user-leave-active {
     opacity: 0;
}
.user-enter {
     transform: translateY(-31px);
}
.user-leave-active {
     transform: translateY(31px);
}
.user-enter-active, .user-leave-active {
     transition: all 1s;
}
.user-enter, .user-leave-to {
     opacity: 0;
     transform: translateY(-30px);
}
@media (min-width: 1024px){
  .panel-menu{
    display: none;
  }
}
@media (min-width: 768px){
  .panel-menu{
    display: none;
  }
}
</style>
