import React from "react";
import party from './img/party.png';
import sad from './img/sad.png';

export default function Footer(props) {
    const total = props.deck.length

    
    const gameOver = props.askedQuestions === total;
    const zapResult = isAllRight() ? <><div className="strong">Parabéns! <img src={party} /></div><div className="footerText">Você não esqueceu de nenhum flashcard!</div></> : <><div className="strong">Putz... <img src={sad} /></div><div className="footerText">Ainda faltam alguns...
    Mas não desanime!</div></> 
    
    function isAllRight() {
        
        for (let i=0; i<props.resultList.length; i++) {
            console.log(props.resultList[i].icon)
            if (props.resultList[i].icon === "close-circle") {
            return false}
        return true}}

    return (
        <div className="footer">
            {gameOver ?
            zapResult :
            <div></div>
            }
            <div>{props.askedQuestions}/{total} CONCLUÍDOS</div>
            <div>{props.resultList.map((result) => <ion-icon class={result.classIcon} name={result.icon}></ion-icon>)}</div>
            

        </div>
    )
}