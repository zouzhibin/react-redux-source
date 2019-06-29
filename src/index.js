import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from './react-redux'
function reduce(state={number:0},action){
    console.log(action)
    switch(action.type){
        case 'increment': 
            let state1 =  Object.assign({},state,{
                number:state.number+1
            })
            console.log(state1)
            return state1
        case 'decrement':
                return Object.assign({},state,{
                    number:state.number-1
                })
        default:
            return state
    }
}
let store = createStore(reduce)
// console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
