import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './style.module.scss'

interface Props {
    tarefas : ITarefa[],
    selecionaTarefa : (tarefaSelecionada : ITarefa) => void
}


const Lista = ({ tarefas, selecionaTarefa } : Props) => {

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {
                    tarefas.map(item => (
                        <Item key={item.id}
                            selecionaTarefa={selecionaTarefa}
                            {...item}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;