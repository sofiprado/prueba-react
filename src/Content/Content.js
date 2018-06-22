import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) { //constructor siempre al comienzo
    super(props)
    this.props = props
    console.log(props)
    
    this.state = {
      pintado: false  
    }
  }

  //CAMBIAR EL ESTADO DEL CÍRCULO
  clickMe() { //función va siempre abajo de constructor y antes de render
    //no podemos modificar el state como objeto literal onda this.state.pintado
    //react nos da función para modificar el state clave/valor
    const actualState = this.state.pintado
    this.setState({
      pintado: !actualState
    })
  }

  render() { //render siempre al final
    let defaultClass = 'little-circle'
    if (this.state.pintado) { //ya valido que es tru sin necesidad de ==true
      defaultClass = defaultClass + ' painted-circle'
    }
    return (
      <div className="img-container">
        <img src={this.props.image} />
        <p>{this.props.contenido}</p>
        <p>{this.props.precio}</p>
        <div className={defaultClass} onClick ={this.clickMe.bind(this)}>like</div> 
      </div>  //no hace falta usar this.bla porque estoy dentro de la misma función render, entonces entiende defaultClass
    ); //todo lo dinamico (variables, funciones) va entre llaves -->  {this.clickMe.Bind(this)}

    
    }
}

export default Content;



