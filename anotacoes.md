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
