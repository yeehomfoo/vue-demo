import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const moduleTest = {
  state: {
    count: 1
  },
  getters: {
    done(state) {
      return state.count + 5
    }
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    },
    add(state, n) {
      state.count += n
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    incrementAsync(context) {
      // 延时1秒
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    moduleTest
  }
})

export default store
