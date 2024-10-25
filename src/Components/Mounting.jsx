import React, { Component } from 'react'


export default class mounting extends Component {

  constructor() {

    super()
    console.log('constructor 4');

    this.state = {
      b: 'Hello',
      a: 'world',
    };

  }

  static getDerivedStateFromProps(a, b) {
    console.log('getDerivedStateFromProps 5');
    console.log('a', a);
    console.log('b', b);
    return true;


  }
  componentDidMount() {
    console.log('componentDidMount 7');
  }

  render() {
    console.log('render 6');

    return (
      <div>
        <h1>Mounting</h1>
      
      </div>
    )
  }
}
