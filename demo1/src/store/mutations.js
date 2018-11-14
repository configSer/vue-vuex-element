import axios from 'axios'

let mutations = {
  increment ( state ) {
    state.count++
  } ,
  decrement ( state ) {
    state.count--
  } ,
  incrementAsync (state) {
    const port = "http://127.0.0.1:9395";
    axios.get(port + "/data").then((res)=>{
      state.person = res.data ;
      state.count ++ ;
    }).catch((err)=>{
      console.log(err)
    })
  }
};

export default mutations ;
