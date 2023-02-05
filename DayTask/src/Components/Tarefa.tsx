import React from "react";

export interface myTarefa {
  nome: string;
  descricao: string;
}

interface Props {
  Tarefa: myTarefa;
  tarefaCompleta(TarefaNameToDelete: string): void;
}

const Tarefas = ({ Tarefa, tarefaCompleta }: Props) => {
  return (
    <div className="Tarefa">
      <div className="content">
        <span>{Tarefa.nome}</span>
        <span>{Tarefa.descricao}</span>
      </div>
      <button
        onClick={() => {
          tarefaCompleta(Tarefa.nome);
        }}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default Tarefas;
