import React,{Component} from 'react'

// function hello(props){
// //     return (
// //     <h1>Hello {props.name}</h1>
// //     )
// // }
class HelloWorld extends Component{
    render() {
        return (
          <h1>Hello {this.props.name}</h1>
        )
    }
}
export default HelloWorld