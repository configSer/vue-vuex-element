import Vue from 'vue'
import vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use( vuex );
let store = new vuex.Store( {//store对象
                              state ,
                              mutations ,
                              getters ,
                              actions
                            } );


export default store;
