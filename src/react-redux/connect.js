import React,{Component } from 'react'
import ReduxContext from "./context";

import {bindActionCreators} from 'redux'
function connect(mapStateToProps,mapDispatchToProps){
    return function(WrappedComponet){
        return class extends Component {
            static contextType = ReduxContext
            constructor(props,context){
                console.log('hahh ',context)
                super(props) // context = {store:this.props.store}
                this.state = mapStateToProps(context.store.getState())
            }
            componentDidMount(){
                this.unsubscribe = this.context.store.subscribe(()=>{
                    this.setState(mapStateToProps(this.context.store.getState()))
                })
            }
            componentWillUnmount(){
                this.unsubscribe()
            }
            render(){
                let actions = bindActionCreators(mapDispatchToProps,this.context.store.dispatch)
                return <WrappedComponet {...this.state} {...actions}></WrappedComponet>
            }
        }
    }
}
export default connect