import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { info, skills, profiles, career, contact } from './data/index'

export default new Vuex.Store({
  state: {
    info,
    skills,
    profiles,
    career,
    contact
  }
})