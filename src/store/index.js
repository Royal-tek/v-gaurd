import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({
  state: {
    user : false,
    token : localStorage.getItem('token'),
    error : false,
    errorMsg : '',
    disable : false
  },
  mutations: {
    logout(state){
      state.user = false
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('role')
      router.push({name:'Login'})
    },
    loginUser(state, data){
      state.user = true
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('role', data.role)
      router.push({ name : 'Home'})
      
    },
    setError(state, status){
      state.error = status
    },
    setErrorMsg(state, message){
      state.errorMsg = message
    },
    setDisabled(state, status){
      state.disable = status
    }
  },
  actions: {
    async login(context, userCredentials){
      context.commit('setDisabled', true)
      
      try {
        const response = await axios.post('https://v-guard.onrender.com/api/admin/auth/login', {
          email : userCredentials.email,
          password : userCredentials.password
        })
        context.commit('loginUser', response.data.data)
        
        console.log(response.data.data);
      } catch (error) {
        context.commit('setError', true)
        context.commit('setErrorMsg', error.response.data.message)
        setTimeout(()=>{
          context.commit('setError', false)
          context.commit('setDisabled', false)
          context.commit('setErrorMsg', '')
        },2000)
        console.log(error);
      }
      
    }
  },
  modules: {
  }
})
