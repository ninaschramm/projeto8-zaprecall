import logo from './img/logo.png'

export default function Init(props) {

    function initGame(){
        props.setIsInit(true)
    }

    return (
        <div className='init layout'>
            <img src={logo} alt="Entrar" />
            <div className="initText">Zap Recall</div>
            <button className="initBtn" onClick={initGame}>Iniciar Recall!</button>
        </div>
    )
}