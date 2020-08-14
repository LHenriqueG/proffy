import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* 
- Componente -> Função que retorna um HTML;
- Criamos componentes para conseguir reaproveitar código na nossa aplicação;
- Sempre começar um componente com letra maiúscula;
- Sempre que incluir o código HTML, é preciso importar o react, 
mesmo que ele não esteja sendo utilizado;
- JSX - HTML dentro do JavaScript
*/
