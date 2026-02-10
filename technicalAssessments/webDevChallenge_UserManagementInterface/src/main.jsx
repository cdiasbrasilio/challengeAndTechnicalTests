/* Este é o ponto de entrada da aplicação React.
 Ele importa o componente principal App e o arquivo de estilos index.css, 
 e renderiza a aplicação dentro do elemento com id "root" no HTML. 
 O React.StrictMode é usado para destacar potenciais problemas na aplicação durante o desenvolvimento. */

 /* Importa o React e ReactDOM para criar e renderizar a aplicação, e o componente App que é a raiz da aplicação. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css' 

/* Renderiza a aplicação React dentro do elemento com id "root" no HTML.
O React.StrictMode é usado para destacar potenciais problemas na aplicação durante o desenvolvimento, 
mas pode ser removido em produção para melhorar o desempenho. */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)