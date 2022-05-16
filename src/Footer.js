import React from "react";
import party from './img/party.png';
import sad from './img/sad.png';

export default function Footer(props) {
    const total = props.deck.length
    
    const gameOver = props.askedQuestions === total;
    const zapResult = props.allRight ? <><div className="strong"><img src={party} /> Parabéns!</div><div className="footerText">Você não esqueceu de nenhum flashcard!</div></> : <><div className="strong"><img src={sad} /> Putz...</div><div className="footerText">Ainda faltam alguns...
    Mas não desanime!</div></> 

    return (
        <div className="footer">
            {gameOver ?
            zapResult :
            <div></div>
            }
            <div>{props.askedQuestions}/{total} CONCLUÍDOS</div>
            <div>{props.resultList.map((result) => <ion-icon class={result.classIcon} name={result.icon}></ion-icon>)}</div>
            {gameOver ?
            <button className="startOver" onClick={props.startOver}>Reiniciar Recall</button> :
            <div></div>}
            

        </div>
    )
}