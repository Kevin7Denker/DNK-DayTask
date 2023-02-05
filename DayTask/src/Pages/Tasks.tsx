import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import "./Style/Tasks.scss"
import Nav from "@/Components/Nav"
import { myTarefa } from "@/Components/Tarefa"
import Tarefas from "@/Components/Tarefa"

const Tasks: FC = () => {
  const [tarefa, setTarefa] = useState<string>("")
  const [descricao, setDescricao] = useState<string>("")
  const [todoList, setTodoList] = useState<myTarefa[]>([])
  const oldtarefa = localStorage.getItem('lista')
  

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "tarefa") {
      setTarefa(event.target.value)
    } else {
      setDescricao(event.target.value)
    }
  }

  const addTarefa = (): void => {
    const newtarefa = { nome: tarefa, descricao: descricao }
    setTodoList([...todoList, newtarefa])
    setTarefa("")
    setDescricao("")
    JSON.stringify(localStorage.setItem('lista', JSON.stringify(todoList)))
    console.log(oldtarefa)
  }

  const tarefaCompleta = (tarefaNameToDelete: string): void => {
    setTodoList(
      todoList.filter((tarefa) => {
        return tarefa.nome != tarefaNameToDelete
      })
    )
  }


  return (
    <div className="tasks">
      <div className="nav">
        <Nav />
      </div>
      <div className="container">
      <div className="conteudo">
        <div className="inputs">
            <div className="nome">
            <label>Nome:</label>
          <input
            type="text"
            placeholder=" "
            name="tarefa"
            value={tarefa}
            onChange={handleChange}
          />
          </div>
          <div className="descricao">
          <label>Descrição:</label>
          <input
            type="text"
            placeholder=" "
            name="descricao"
            value={descricao}
            onChange={handleChange}
          />
          </div>
        </div>
        <button onClick={addTarefa}>Adicionar </button>
      </div>
      </div>
        <div className="lista">
        <div className="title">Lista:</div>
        <div className="items">
        {todoList.map((task: myTarefa, key: number) => {
          return <Tarefas key={key} Tarefa={task} tarefaCompleta={tarefaCompleta}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default Tasks


