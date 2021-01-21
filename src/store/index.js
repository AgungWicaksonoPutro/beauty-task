import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    idUser: localStorage.getItem('id') || null,
    user: {},
    list: {},
    userList: {},
    dataDummy: []
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setProfile (state, payload) {
      state.user = payload
    },
    setIdUser (state, payload) {
      state.idUser = payload
    },
    setLogout (state) {
      state.token = null
      state.idUser = null
    },
    setList (state, payload) {
      state.list = payload
    },
    setUserList (state, payload) {
      state.userList = payload
    },
    setDataDummy (state, payload) {
      state.dataDummy.push(payload)
    },
    setDelete (state, payload) {
      state.dataDummy = state.dataDummy.filter(a => {
        return a.id !== payload.id
      })
    }
  },
  actions: {
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_URL + 'register', payload)
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_URL + 'login', payload)
          .then((res) => {
            const id = res.data.token.split('X')
            context.commit('setToken', res.data.token)
            context.commit('setIdUser', id[1])
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', id[1])
            resolve(res.data.token)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    logOut (context) {
      context.commit('setLogout')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      router.push('/login')
    },
    getUserById (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_API_URL + 'users/' + payload)
          .then((res) => {
            context.commit('setProfile', res.data.data)
            resolve(res.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllList (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_API_URL + 'unknown' + payload)
          .then((res) => {
            context.commit('setList', res.data)
            resolve(res.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_API_URL + 'users' + payload)
          .then((res) => {
            context.commit('setUserList', res.data)
            resolve(res.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addData (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_URL + 'users', payload)
          .then((res) => {
            context.commit('setDataDummy', res.data)
            resolve(res.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateData (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_API_URL + 'users/' + payload.id, payload.data)
          .then((res) => {
            context.commit('setDataDummy', res.data)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    deleteData (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_API_URL + 'users/' + payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getUserId (state) {
      return state.idUser
    },
    getUser (state) {
      return state.user
    },
    getList (state) {
      return state.list
    },
    getUserlist (state) {
      return state.userList
    },
    getData (state) {
      return state.dataDummy
    }
  },
  modules: {
  }
})
