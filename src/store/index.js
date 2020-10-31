import Vue from 'vue'
import Vuex from 'vuex'
import red from '../components/point_red.svg'
import grean from '../components/point_grean.svg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: [
    {
      name: 'Сергй Корнеев',
      addres: 'xrfkjdf',
      tel: '+78885888946',
      tupe: 'Порыв',
      cord: [4418028.0838792, 5978621.017680609],
      priorit: 'Высокий',
      src: red
    },
    {
      name: 'Сергй',
      addres: 'xrf',
      tel: '+77777888946',
      cord: [4428691.049324982, 5984659.5429151375],
      tupe: 'Порыв',
      priorit: 'Высокий',
      src: grean
    }
  ],
  mutations: {
    addNewPoint (state, data) {
      state.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
