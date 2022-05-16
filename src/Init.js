import logo from './img/logo.png'

export default function Init(props) {

    function initGame(){
        props.setIsInit(true)
        shuffle(props.deck)
    }

    function shuffle(deck) {
        let newDeck = deck.sort(comparador)
        for (let i=0; i<deck.length; i++) {
            newDeck[i].index = i + 1
        }
        props.setDeck(newDeck)
      }

    function comparador() { 
        return Math.random() - 0.5; 
    }

    return (
        <div className='init layout'>
            <img src={logo} alt="Entrar" />
            <div className="initText">Zap Recall</div>
            <button className="initBtn" onClick={initGame}>Iniciar Recall!</button>
        </div>
    )
}