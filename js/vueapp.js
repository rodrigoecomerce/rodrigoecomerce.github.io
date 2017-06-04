import Vue from 'vue'  
import VueRouter from 'vue-router' // << aqui  

var Mainpage = Vue.component('mainpage', {
    template: "#mainpage",
    methods: {
             
    }
});

var Contactpage = Vue.component('contactpage', {
    template: "#contactpage",
    methods: {
             
    }
});


const router = new VueRouter()

router.map({  
    '/': {
        component: Mainpage
    },
    '/contact': {
        component: Contactpage
    },
})

Vue.use(VueRouter) // << e aqui

new Vue({  
  el: 'body',
  components: { Mainpage }
})
