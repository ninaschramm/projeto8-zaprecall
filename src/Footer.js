export default function Footer(props) {
    const total = props.deck.length
    return (
        <div className="footer">0/{total} CONCLUÍDOS</div>
    )
}