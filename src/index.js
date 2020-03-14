import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

//componente com sintaxe de classe: Stateful component

class App extends Component {
  state = {
    counter: 0,
  };

  //chamado no inicio do ciclo de vida do componente. Para carregar dados da API ou event listeners. Semelhante ao onInit do Angular
  componentDidMount() {
    console.log('start component');
  }

  //Executado quando componente não existe mais. Executado para limpar event listeners, etc. Semelhante ao destroy do Angular
  componentWillUnmount() {
    console.log('destroy component');
  }

  //toda vez que componente sofrer alteração em propriedade ou estado ele é chamado. Podemos vetar a atualização do render após sofrer alterações no estado
  //Setamos se o render vai ser executado novamente ou não
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10; //so executa render novamente quando counter for menor igual 10
  }

  //Executado depois de sofrer alteração de propriedade ou estado. Após executar o render do componente
  componentDidUpdate(prevProps, nextState) {
    console.log(prevProps);
    console.log(nextState);
  }

  handleClick = () => {
    //callback para ja pegar state atualizado
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(5 + this.state.counter);
    });
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
