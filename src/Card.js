import React from "react";
import AnswerCard from "./AnswerCard";

export default function Card({card, countAskedQuestions, isAnswered, answeredClass}) {
    const [isAnswer, setIsAnswer] = React.useState(false)

    function seeAnswer(card) {
       setIsAnswer(true)
    }
   
    return (
        isAnswer ? 
        <AnswerCard card={card} countAskedQuestions={countAskedQuestions} isAnswered={isAnswered} answeredClass={answeredClass} />
        : 
        <div className={`questionAsked index${card.index}`}> {card.question} <div className='questionAskedIcon'><ion-icon name="swap-horizontal" onClick={() => seeAnswer(card)}></ion-icon></div></div>
    )
}