import smalllogo from './img/logo-pequeno.png';
import Footer from './Footer';
import React from 'react';
import Card from './Card';

export default function QuestionList() {
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

    const [askedQuestions, setAskedQuestions] = React.useState(0)
    const [resultList, setResultList] = React.useState([])
        

    function askQuestion(index) {
        let i = index-1;
        let newDeck = [...deck]
        newDeck[i].questionAsked = true;
        setDeck(newDeck)
    }

    function setCards(card) {
        if (card.questionAsked == true) {
            return <Card card={card} countAskedQuestions={countAskedQuestions}/>
        }
        else {
            return <div className={`questionIndex index${card.index}`}> Pergunta {card.index} <ion-icon name="play-outline" onClick={() => askQuestion(card.index)}></ion-icon></div>
        }
    }    

    function countAskedQuestions (gotAnswer) {
        let askedQuestionsTotal = askedQuestions + 1
        setAskedQuestions(askedQuestionsTotal)

        let newResultList = [...resultList]
        if (gotAnswer === "wrong") {
            newResultList.push({icon: "close-circle", classIcon: "answeredWrong"})
        }
        if (gotAnswer === "almost") {
            newResultList.push({icon: "help-circle", classIcon: "answeredAlmost"})
        }
        if (gotAnswer === "right") {
            newResultList.push({icon: "checkmark-circle", classIcon: "answeredRight"})
        }
        setResultList(newResultList)
    }


    return (
        <div className="qList layout">
            <div className="logotop"><img src={smalllogo} alt="ZapRecall" /> ZapRecall </div>
            <div className="cards">
                {deck.map((card) => setCards(card))}
            </div>
            <Footer deck={deck} askedQuestions={askedQuestions} resultList={resultList}/>
        </div>
       
    )
}