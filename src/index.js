import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button'

//componente com sintaxe de classe: Stateful component

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    //callback para ja pegar state atualizado
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(5 + this.state.counter);
    })
    /*this.setState(state => ({ counter: this.state.counter + 1 }));*/
    //this.state.counter++ nunca vai funcionar dentro do React. Sempre tem que usar o setState para alterar o valor de um estado dentro do componente
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Teste</h1>
        <Button onClick={this.handleClick}>Salvar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
