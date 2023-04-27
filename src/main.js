import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

router.beforeEach((to, from, next)=>{
    if(to.matched.some(record => record.meta.requiresLogin)){
        if(!localStorage.getItem('token')){
            next({name:'Login'})
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})


router.beforeEach((to, from, next)=>{
    if(to.matched.some(record=> record.meta.cannotBeAccessedAfterLogin)){
        if(localStorage.getItem('token')){
            next({name:'Home'})
        }else{
            next()
        }
    }
    else{
        next()
    }
})