import React from "react";

export default function Card(props) {
    let card = props.card
    const [isAnswer, setIsAnswer] = React.useState(false)

    function seeAnswer(card) {
       setIsAnswer(true)
    }
   
    return (
        isAnswer ? 
        <div className={`questionAsked index${card.index}`}> {card.answer} <div className='gotAnswer'>
            <button className="gotAnswerBtn wrong">Não lembrei</button>
            <button className="gotAnswerBtn almost">Quase não lembrei</button>
            <button className="gotAnswerBtn right">Zap!</button>
            </div></div> 
        : 
        <div className={`questionAsked index${card.index}`}> {card.question} <div className='questionAskedIcon'><ion-icon name="swap-horizontal" onClick={() => seeAnswer(card)}></ion-icon></div></div>
    )
}