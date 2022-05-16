import logo from './logo.svg';
import './css/reset.css';
import './css/styles.css';
import Init from './Init';
import QuestionList from './QuestionList'

import React, { ReactDOM } from 'react';

// LEMBRAR DE OLHAR ONDE VAI A MERDA DO ION-ICON


function App() {
  const [deck, setDeck] = React.useState([
    {index: 1, question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", questionAsked: false},
    {index: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", questionAsked: false},
    {index: 3, question: "Componentes devem iniciar com __", answer: "letra maiúscula", questionAsked: false},
    {index: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões", questionAsked: false},
    {index: 5, question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma", questionAsked: false},
    {index: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências", questionAsked: false},
    {index: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes ", questionAsked: false},
    {index: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", questionAsked: false},
])


  const [isInit, setIsInit] = React.useState(false);

  return (
    <div className='layout'>
      {isInit ? <QuestionList deck={deck} setDeck={setDeck} /> : <Init isInit={isInit} setIsInit={setIsInit} deck={deck} setDeck={setDeck} />}
    </div>
  );
}

export default App;


