## Init do projeto

yarn init -y
yarn add react react-dom
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli

Criação do arquivo .babelrc, .prettierc e webpack.config.js

yarn add -D webpack-dev-server //automatizar server do webpack

Tudo no react é um componente

## Definições

Tudo no react é um componente

A maioria dos componentes do React são classes e que ela extende a classe padrão do React de componente

Metodo render tem por obligação retornando o conteúdo em JSX para o componente.

No react não pode ter dois componentes sem ter uma div por fora

Propriedades: informações que são passadas entre componentes (this.props.nomePropriedade)
Children: Pega toda informação que está dentro do componente e repassa: (this.props.children)

yarn add prop-types: Biblioteca para utilizar para fazer tipagem dentro do código, tipos que são etc.

yarn add -D @babel/plugin-proposal-class-properties: Instalar plugin do babel para deixar prop-types estáticos dentro das classes

## Estados e imutabilidade

Estados: são todas variáveis que possam ser utilizadas pelo componente.
O estado é sempre um objeto. Exemplo:
state = {
counter: 0
};

Imutabilidade: sempre criar um novo valor da variável no estado ao invés de setar o valor dela.
O estado é imutável.

Podemos ter duas funções dentro da classe:

handleClick(){} : this passa a se posicional para a função, ou seja, this.app ele vai procurar dentro do handleClick

handleClick = () => {}: this se posiciona sempre para classe principal, ou seja, this.app ele vai procurar sempre na classe principal do componente e não na função criada. Com isso, no react sempre vamos usar por padrão como arrow funcion as funções

**IMPORTANTE**: Toda vez que altero a propriedade ou estado de um componente a função render é executada novamente

Todo componente do react tem uma fila de alterações que tem que realizar dentro do estado.
Conforme ele cresce isso pode ficar lento e a fila demorar para processar

setState assincrono: já pego o resultado atualizado em função de callback

## Stateful vs Stateless

Stateful: componentes com estado
Stateless: componentes sem estado

Componentes stateless não da para fazer exports default, que o React não deixa. Deve fazer uma constante.
Com isso componente fica com sintaxe de função

## CSS

Javascript importa arquivo css no ReactJs

yarn add -D style-loader css-loader

Com isso, webpack faz com que arquivo css seja lido dentro do componente e no arquivo .JS

css-loader faz isso.

Com less usamos:

yarn add -D sass-loader node-sass

No react não é utilizado a propriedade class e sim a className

## Boas práticas do React, EditorConfig e eslint

Extensão do editorconfig e arquivo .editorconfig

React Developer Tools: para debugar codigo

yarn add eslint -D

yarn add babel-eslint -D

Após isso e criação do prettier, deve ir no settings do visual studio e colocar:

"editor.formatOnSave": true. Para ele salvar e corrigir a identação e padrão do eslint sempre que salvar o arquivo

npx eslint --init
