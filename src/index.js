import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Button extends Component {

  static defaultProps = {
    children: 'Salvar',
  };
  
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
  };

  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
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
        <Button onClick={this.handleClick}>Salvar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
