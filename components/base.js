import { Component } from 'react'

export default class BaseComponent extends Component{
  constructor(props){
    super(props);
    //console.log('BaseComponent.constructor', props);
  }
  componentWillMount(){
    //console.log('BaseComponent.componentWillMount');
  }
  componentWillUnmount(){
    //console.log('BaseComponent.componentWillUnmount');
  }
}
