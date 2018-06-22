import React, { Component } from 'react';
import './Iterar.css';

class Iterar extends Component {

  constructor(props) { 
    super(props)
    this.props = props
    console.log(props)
  }


handleChange(e) {
  const value = e.target.value
  this.setState({
  textValue: value
  })
}

  render() {
    return (
      <input type="text" onChange={this.handleChange.bind(this)} />
    );
  } 
}

export default Iterar;