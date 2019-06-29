import React,{Component} from 'react'
import ReduxContext from './context'
export default class Provider extends Component{
    render(){
        console.log('dd',this.props)
        return (
            <ReduxContext.Provider value={{store:this.props.store}}>
                {this.props.children}
            </ReduxContext.Provider>
        )
    }
}