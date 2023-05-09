<template>
    <AdminView />
    <!-- <SuperAdminView v-if="show"/> -->
    
</template>

<script>
import AdminView from '../components/AdminView.vue';
import SuperAdminView from '../components/SuperAdminView.vue';
export default {
  name: 'Home',
  data(){
    return{
        show: true
    }
  },
  components : {
    AdminView,
    SuperAdminView,
    
  },
  methods : {
    
  }
}
</script>
