<template>
    <div class="container w-full box-border">
        <h1 class="m-3 text-3xl tracking-wide font-semibold">Pantone List</h1>
        <div class="flex justify-center flex-wrap">
            <div v-for="(list, index) in getList.data" :key="index">
                <CardList :dataList="list"/>
            </div>
        </div>
        <div class="pagination flex justify-center my-5">
            <button @click.prevent="handlePage(pages-1)" class="bg-gray-300 w-5 h-6 flex justify-center items-center rounded-md focus:outline-none hover:bg-gray-600"><b-icon icon="arrow-left"></b-icon></button>
            <ul class="mx-1 text-center bg-gray-300 w-5 h-6 rounded-md overflow-hidden" v-for="(page, index) in getList.total_pages" :key="index">
                <li><button @click.prevent="handlePage(page)" class="w-full focus:outline-none hover:bg-gray-600" :class="[page == pages ? ' bg-gray-800 text-gray-50': '']">{{page}}</button></li>
            </ul>
            <button @click.prevent="handlePage(pages+1)" class="bg-gray-300 w-5 h-6 flex justify-center items-center rounded-md focus:outline-none hover:bg-gray-600"><b-icon icon="arrow-right"></b-icon></button>
        </div>
    </div>
</template>

<script>
import CardList from '../../../components/_base/cardLsit'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      pages: 1
    }
  },
  components: {
    CardList
  },
  methods: {
    ...mapActions(['getAllList']),
    handlePage (e) {
      if (e <= 1) {
        e = 1
      } else if (e >= this.getList.total_pages) {
        e = this.getList.total_pages
      }
      this.pages = e
      const url = `?page=${e}`
      this.getAllList(url)
    }
  },
  computed: {
    ...mapGetters(['getList'])
  }
}
</script>

<style scoped>

</style>
