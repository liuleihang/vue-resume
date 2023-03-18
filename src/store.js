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
    contact
  },
  mutations: {
    // 重排序 skills[]
    changeSkillsList (state, data) {
      state.skills = data
    }
  },
  actions: {
    // 重排序技能页面的 skills[]
    shuffleSkills ({ commit, state }) {
      const newSkills = shuffle(state.skills, { 'copy': true })
      // console.log(newSkills === state.skills)
      commit('changeSkillsList', newSkills)
    }
  }
})