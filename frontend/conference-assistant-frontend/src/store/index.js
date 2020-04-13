// Vuex 스토어에 대한 기본 설정

import Vue from 'vue'
import Vuex from 'vuex'

import state from './states.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
        socket,
    },
    strict : debug,
});
