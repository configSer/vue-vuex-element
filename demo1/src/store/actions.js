
let actions = {
  increment ({commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
  incrementAsync ({commit}) {
    commit('incrementAsync')
  }
};

export default actions ;
