import React from "react";

export default function AnswerCard({card, countAskedQuestions, setDefault}) {

    const [isAnswered, setIsAnswered] = React.useState(false)
    const [answeredClass, setAnswerClass] = React.useState("answeredQuestion")
    const [iconName, setIconName] = React.useState("")
    const [counter, setCounter] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)

    function answerThis(gotAnswer){
        setCounter(counter +1)
        if (counter === 8) {
            setGameOver(true)
            setIsAnswered(false)
            setCounter(0)
        }
        setIsAnswered(true)

        countAskedQuestions(gotAnswer)

        if (gotAnswer === "wrong") {
            setAnswerClass("answeredQuestion answeredWrong")
            setIconName("close-circle")
        }
        if (gotAnswer === "almost") {
            setAnswerClass("answeredQuestion answeredAlmost")
            setIconName("help-circle")
        }
        if (gotAnswer === "right") {
            setAnswerClass("answeredQuestion answeredRight")
            setIconName("checkmark-circle")
        }
    }
        
    return (
        isAnswered?
        <div key={card.index} className={`questionIndex index${card.index} ${answeredClass}`}> Pergunta {card.index} <ion-icon name={`${iconName}`}></ion-icon></div> :
        <div key={card.index} className={`questionAsked index${card.index}`}> {card.answer} <div className='gotAnswer'>
            <button className="gotAnswerBtn wrong" onClick={() => answerThis("wrong")}>Não lembrei</button>
            <button className="gotAnswerBtn almost" onClick={() => answerThis("almost")}>Quase não lembrei</button>
            <button className="gotAnswerBtn right" onClick={() => answerThis("right")}>Zap!</button>
            </div></div> 
    )
}