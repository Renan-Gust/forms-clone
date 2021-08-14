import { Link } from 'react-router-dom';

import './sucess.css'

export const Sucess: React.FC = () => {
    return(
        <div className="container">
            <header>
                <div className="block first-block">
                    <h1>Prova de conhecimentos gerais</h1>

                    <span className="black">Suas respostas foi registrada</span>

                    <div className="link-goback">
                        <Link to="/" >Enviar outra resposta</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}