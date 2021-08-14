import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';

import './test.css';

interface IAnswer {
    question: string;
    answer: string;
}

interface IOptions {
    id: string;
    value: string;
    question_alternative: string;
}

interface ITestItem {
    id: string;
    question: string;
    options: Array<IOptions>;
}

export const Test: React.FC = () => {
    const [test, setTest] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [answers, setAnswers] = useState<IAnswer[]>([])

    const history = useHistory()

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

    const submitAnswers = useCallback(async (event) => {
        event.preventDefault()

        if(name === '' || email === '' || answers.length < 4){
            alert('Marque todos os campos obrigatórios')
            return
        }

        try{
            await api.post('/test_answers', {
                name,
                email,
                answers
            })

            history.push('/sucess')

        } catch(err) {
            console.log(err)
        }
    }, [name, email, answers, history])

    return (
        <div className="container">
            <header>
                <div className="block first-block">
                    <h1>Prova de Conhecimentos Gerais</h1>
                    <span>*Obrigatório</span>
                </div>
            </header>

            <form onSubmit={submitAnswers}>
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
                    {test.map((item: ITestItem) => {
                        return(
                            <div key={item.id} className="block">
                                <h4>
                                    {item.question}
                                    <span>*</span>
                                </h4>

                                <div className="answer-radio">
                                    {item.options.map((option: IOptions) => {
                                        return(
                                            <Input
                                                key={option.id}
                                                option="input-radio"
                                                type="radio"
                                                className="input-radio"
                                                answer={option.value}
                                                name={`questions${item.id}`}
                                                value={option.question_alternative}
                                                onChange={(e) => {
                                                    setAnswers([
                                                        ...answers,
                                                        {
                                                            question: item.id,
                                                            answer: e.target.value
                                                        }
                                                    ])
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </section>

                <Button>Enviar</Button>
            </form>
        </div>
    )
}