import React, { FormEvent, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";

import style from './style.module.scss';

import { v4 as uuidv4 } from 'uuid'

const Formulario = ({setTarefas} : {
    setTarefas : React.Dispatch<React.SetStateAction<ITarefa[]>>
    }) => {
    const [values, setValues] = useState({
        tarefa: '',
        tempo: '00:00'
    })

    const adicionarTarefa = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        setTarefas(tarefaOld => [...tarefaOld, {
            ...values,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }]);

        setValues({
            tarefa: "",
            tempo: "00:00"
        })
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione uma nova tarefa
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={values.tarefa}
                    onChange={(event) => setValues({...values, tarefa: event.target.value})}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={values.tempo}
                    onChange={(event) => setValues({...values, tempo: event.target.value})}
                    required
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;