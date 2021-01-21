<template>
    <div class="w-full flex md:flex-wrap">
      <div class="w-3/12" :class="[show ? 'block w-8/12 h-screen fixed z-40' : 'lg:block md:hidden']">
        <Sidebar :userData="getUser" @set-logout="handleLogout" @event-close="handleMenu"/>
      </div>
      <div class="panel-menu relative left-3 top-1">
        <button @click.prevent="handleMenu" class=" w-8 bg-gray-100 rounded-md shadow-md p-2 flex justify-center items-center"><b-icon icon="box-arrow-right"></b-icon></button>
      </div>
      <div class="router-view w-6/12 md:w-full mb-2">
        <router-view></router-view>
      </div>
      <div class="user-list w-3/12 md:w-full">
        <UserList :dataUserList="getUserlist"/>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Sidebar from '../../components/_base/sidebar'
import UserList from '../../components/_base/userList'
export default {
  name: 'Dashboard',
  data () {
    return {
      show: false
    }
  },
  components: {
    Sidebar,
    UserList
  },
  methods: {
    ...mapActions(['getUserById', 'logOut', 'getAllList', 'getAllUser']),
    handleLogout () {
      this.logOut()
    },
    handleMenu () {
      this.show = !this.show
    }
  },
  computed: {
    ...mapGetters(['getUserId', 'getUser', 'getList', 'getUserlist'])
  },
  mounted () {
    this.getAllList('?page=1')
    this.getAllUser('?page=1')
  }
}
</script>

<style scoped>
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
