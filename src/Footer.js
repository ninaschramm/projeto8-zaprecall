export default function Footer(props) {
    const total = props.deck.length
    return (
        <div className="footer">
            <div>{props.askedQuestions}/{total} CONCLUÍDOS</div>
            <div>{props.resultList.map((result) => <ion-icon class={result.classIcon} name={result.icon}></ion-icon>)}</div>
        </div>
    )
}