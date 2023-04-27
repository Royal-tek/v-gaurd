<template>
  <Login v-if="!navigation"/>
  <section class="grid-container" v-if="navigation">
    <SideBar/>
    <router-view/>
  </section>
  
</template>

<script>
// import router from './router'
import Login from './views/Login.vue'
import SideBar from './components/SideBar.vue'
import axios from 'axios'
export default {
  name : 'App',
  components : {
    SideBar, Login
  },
  data () {
    return {
      navigation : true,
      user : ''
    }
  },
  methods : {
    disableNavigation() {
    if (this.$route.name === 'Login') {
      this.navigation = false
    } else {
      this.navigation = true
    }
  },
    async getUserInfo(){
      try {
        const user = await axios.get('https://v-guard.onrender.com/api/admin/auth/info', {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
        // console.log(user);
      } catch (error) {
        this.$store.commit('logout')

      }
    }
  },
  watch : {
    $route(){
      this.disableNavigation()
    }
  },
  created(){
    this.disableNavigation()
    this.getUserInfo()
  
  },
}
</script>


<style lang="scss">

</style>
