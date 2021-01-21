<template>
    <div class="container w-full m-3 box-border">
        <h1 class="text-3xl tracking-wide font-semibold">Add Data</h1>
        <form class="mb-5">
            <div class="form-group mb-2">
                <label class="block mx-2" for="name">Name</label >
                <input v-model="name" class="w-6/12 bg-gray-300 p-2 focus:outline-none rounded-md focus:bg-gray-200" type="text" name="name" id="name" placeholder="Add name...">
            </div>
            <div class="form-group mb-2">
                <label class="block mx-2" for="name">Job</label >
                <input v-model="job" class="w-6/12 bg-gray-300 p-2 focus:outline-none rounded-md focus:bg-gray-200" type="text" name="job" id="job" placeholder="Add job...">
            </div>
            <button @click.prevent="handleAdd" class="bg-gray-300 p-2 rounded-md hover:bg-gray-400 hover:text-gray-100 text-gray-400">Submit</button>
        </form>
        <hr>
        <table class="table-auto w-full mt-3">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>JOB</th>
                    <th>CREATED</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr :class="[index %2 == 0 ? 'bg-gray-100' : 'bg-gray-200']" v-for="(item, index) in getData" :key="index" >
                    <td class="text-center">{{index+1}}</td>
                    <td><span>{{item.name}}</span></td>
                    <td  class="text-center"><span>{{item.job}}</span></td>
                    <td  class="text-center">{{setTime (item.createdAt)}}</td>
                    <td  class="text-center">
                        <button @click="handleDelete(item)" class="bg-red-500 p-2 m-1 rounded-md"><b-icon icon="trash"></b-icon></button>
                        <button @click.prevent="setUpdates(item)" class="bg-yellow-500 p-2 rounded-md"><b-icon icon="pencil-square"></b-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <Modal v-show="setUpdate" @event-close="toggle" @event-update="handleUpdate" :dataUpdate="dataSetupdate"/>
    </div>
</template>

<script>
import moment from 'moment'
import Modal from '../../../components/_base/modal'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Add',
  data () {
    return {
      name: '',
      job: '',
      setUpdate: false,
      dataSetupdate: {
        id: 0,
        name: '',
        job: ''
      }
    }
  },
  components: {
    Modal
  },
  methods: {
    ...mapActions(['addData', 'updateData', 'deleteData']),
    ...mapMutations(['setDelete']),
    handleAdd () {
      const data = {
        name: this.name,
        job: this.job
      }
      this.addData(data)
        .then((res) => {
          this.name = ''
          this.job = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setTime (e) {
      moment.locale('id')
      return moment(e).format('LL')
    },
    toggle () {
      this.setUpdate = !this.setUpdate
    },
    setUpdates (e) {
      this.toggle()
      this.dataSetupdate.name = e.name
      this.dataSetupdate.job = e.job
      this.dataSetupdate.id = e.id
    },
    handleDelete (e) {
      this.deleteData(e.id)
        .then((res) => {
          this.setDelete(e)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleUpdate (e) {
      const data = {
        name: this.dataSetupdate.name,
        job: this.dataSetupdate.job
      }
      const container = {
        id: e,
        data
      }
      this.updateData(container)
        .then((res) => {
          this.setDelete(container)
          this.toggle()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters(['getData'])
  }
}
</script>

<style scoped>

</style>
