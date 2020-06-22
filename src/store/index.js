import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
const store = new Vuex.Store({
    state:{
        user:[
            {name:'小明',age:'18'}
        ]
    },
    mutations,
    getters,
    actions,
    modules
})

export default store