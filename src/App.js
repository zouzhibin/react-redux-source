import React from 'react';
import {connect} from './react-redux'

let actions = {
  increment(){
    return {type:'increment',data:99}
  },
  decrement(){
    return {type:'decrement',data:99}
  }
}
function App(props) {
  console.log('111',props)
  return (
    <div className="App">
        <div>{props.number}</div>
        <button onClick={props.decrement}>-</button>
        <button onClick={props.increment}>+</button>
    </div>
  );
}

let mapStateToProps = state=>{
  return state
}
export default connect(
  mapStateToProps,
  actions
)(App);
