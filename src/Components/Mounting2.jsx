import React, { Component } from 'react'
import Mounting from './Mounting'

export default class mounting extends Component {

  constructor() {

    super()
    console.log('constructor 1');

    this.state = {
    
    };

  }

  static getDerivedStateFromProps(a, b) {
    console.log('getDerivedStateFromProps 2');
    console.log('a', a);
    console.log('b', b);
    return true;


  }
  componentDidMount() {
    console.log('componentDidMount 8');
  }

  render() {
    console.log('render 3');

    return (
      <div>
        <h1>Mounting2</h1>
        <Mounting/>
      </div>
    )
  }
}
