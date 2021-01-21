<template>
    <div class="w-full min-h-screen h-full shadow-md p-3 bg-white relative box-border">
        <h2 class="font-bold text-center">User List</h2>
        <div class="container-card " v-for="(user, index) in dataUserList.data" :key="index">
            <div class="card w-full bg-white shadow-sm mb-2 flex flex-wrap items-center">
                <div class="img-container w-14 h-14 p-1">
                    <img class="w-full h-full object-cover rounded-md" :src="user.avatar" alt="">
                </div>
                <div class="details ml-2 text-gray-400">
                    <p class="font-bold text-base">{{user.first_name}} {{user.last_name}}</p>
                    <p class="font-light text-sm">{{user.email}}</p>
                </div>
            </div>
        </div>
         <div class="pagination flex justify-center my-5">
            <button @click.prevent="handlePage(pages-1)" class="bg-gray-300 w-5 h-6 flex justify-center items-center rounded-md focus:outline-none hover:bg-gray-600"><b-icon icon="arrow-left"></b-icon></button>
            <ul class="mx-1 text-center bg-gray-300 w-5 h-6 rounded-md overflow-hidden" v-for="(page, index) in dataUserList.total_pages" :key="index">
                <li><button @click.prevent="handlePage(page)" class="w-full focus:outline-none hover:bg-gray-600" :class="[page == pages ? ' bg-gray-800 text-gray-50': '']">{{page}}</button></li>
            </ul>
            <button @click.prevent="handlePage(pages+1)" class="bg-gray-300 w-5 h-6 flex justify-center items-center rounded-md focus:outline-none hover:bg-gray-600"><b-icon icon="arrow-right"></b-icon></button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserList',
  data () {
    return {
      pages: 1
    }
  },
  props: {
    dataUserList: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['getAllUser']),
    handlePage (e) {
      if (e <= 1) {
        e = 1
      } else if (e >= this.dataUserList.total_pages) {
        e = this.dataUserList.total_pages
      }
      this.pages = e
      const url = `?page=${e}`
      this.getAllUser(url)
    }
  }
}
</script>

<style scoped>

</style>
