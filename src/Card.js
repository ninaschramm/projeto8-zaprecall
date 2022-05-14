import React from "react";
import AnswerCard from "./AnswerCard";

export default function Card({card, countAskedQuestions}) {
    const [isAnswer, setIsAnswer] = React.useState(false)

    function seeAnswer(card) {
       setIsAnswer(true)
    }
   
    return (
        isAnswer ? 
        <AnswerCard card={card} countAskedQuestions={countAskedQuestions}/>
        : 
        <div className={`questionAsked index${card.index}`}> {card.question} <div className='questionAskedIcon'><ion-icon name="swap-horizontal" onClick={() => seeAnswer(card)}></ion-icon></div></div>
    )
}