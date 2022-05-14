export default function Footer(props) {
    const total = props.deck.length
    return (
        <div className="footer">
            <div>{props.askedQuestions}/{total} CONCLUÍDOS</div>
            <div className="answersCount">{props.resultList}</div>
        </div>
    )
}