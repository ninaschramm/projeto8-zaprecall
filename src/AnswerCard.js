import React from "react";

export default function AnswerCard({card, countAskedQuestions, isAnswered, answeredClass}) {

        
    return (
        isAnswered?
        <div className={`questionIndex index${card.index} ${answeredClass}`}> Pergunta {card.index} <ion-icon name="play-outline" onClick={() => askQuestion(card.index)}></ion-icon></div> :
        <div className={`questionAsked index${card.index}`}> {card.answer} <div className='gotAnswer'>
            <button className="gotAnswerBtn wrong" onClick={() => countAskedQuestions("wrong")}>Não lembrei</button>
            <button className="gotAnswerBtn almost" onClick={() => countAskedQuestions("almost")}>Quase não lembrei</button>
            <button className="gotAnswerBtn right" onClick={() => countAskedQuestions("right")}>Zap!</button>
            </div></div> 
    )
}