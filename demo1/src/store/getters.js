import store from "./index";

let getters =  {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  retDone: (state)=>{
    return store.getters.doneTodos
  }
};

export default getters ;
