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
    return <a onClick={this.props.onClick}>{this.props.children}</a>;
  }
}

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
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
