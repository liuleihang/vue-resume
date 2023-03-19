import Vue from 'vue'
import Vuex from 'vuex'
// import shuffle from 'shuffle-array'

Vue.use(Vuex)

import { info, skills, profiles, career, contact } from './data/index'

export default new Vuex.Store({
  state: {
    info,
    skills,
    profiles,
    career,
    contact,
    activeIndex: 0
  },
  mutations: {
    setActiveIndex(state, index){
      state.activeIndex = index;
    }
  },
  actions: {
    changeActiveIndex({ commit }, index){
      commit('setActiveIndex',index);
    }
  }
})