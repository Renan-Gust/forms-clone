import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';

import './test.css';

export const Test: React.FC = () => {
    const [test, setTest] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        async function loadData(){
            try{
                const response = await api.get('/test')
                setTest(response.data)
            } catch(err) {
                console.log(err)
            }
        }

        loadData()
    }, [])

    return (
        <div className="container">
            <header>
                <div className="block first-block">
                    <h1>Prova de Conhecimentos Gerais</h1>
                    <span>*Obrigatório</span>
                </div>
            </header>

            <form>
                <section>
                    <div className="block">
                        <h4>
                            Name
                            <span>*</span>
                        </h4>

                        <Input
                        placeholder="Sua resposta"
                        onChange={(e)=> setName(e.target.value)} />
                    </div>
                </section>

                <section>
                    <div className="block">
                        <h4>
                            E-mail
                            <span>*</span>
                        </h4>

                        <Input
                        placeholder="Sua resposta"
                        onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                </section>

                <section>
                    {/* MAP + INPUT */}
                </section>

                <Button>Enviar</Button>
            </form>
        </div>
    )
}