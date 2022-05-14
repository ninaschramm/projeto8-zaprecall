import React from "react";

export default function AnswerCard({card, countAskedQuestions}) {

    const [isAnswered, setIsAnswered] = React.useState(false)
    const [answeredClass, setAnswerClass] = React.useState("answeredQuestion")
    const [iconName, setIconName] = React.useState("")

    function answerThis(gotAnswer){

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
        <div className={`questionIndex index${card.index} ${answeredClass}`}> Pergunta {card.index} <ion-icon name={`${iconName}`}></ion-icon></div> :
        <div className={`questionAsked index${card.index}`}> {card.answer} <div className='gotAnswer'>
            <button className="gotAnswerBtn wrong" onClick={() => answerThis("wrong")}>Não lembrei</button>
            <button className="gotAnswerBtn almost" onClick={() => answerThis("almost")}>Quase não lembrei</button>
            <button className="gotAnswerBtn right" onClick={() => answerThis("right")}>Zap!</button>
            </div></div> 
    )
}