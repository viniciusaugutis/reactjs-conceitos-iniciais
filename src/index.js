import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.title}
      </a>
    );
  }
}

class ButtonChildren extends Component {
  render() {
    return <a href="">{this.props.children}</a>;
  }
}

class App extends Component {
  handleClick() {
    alert('Botão clicado');
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Teste</h1>
        <Button title="Enviar" onClick={this.handleClick} />
        <ButtonChildren> Salvar </ButtonChildren>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
