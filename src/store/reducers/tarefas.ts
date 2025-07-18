import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar JavaScript',
    },
    {
      id: 2,
      descricao: 'Estudar ReactJS',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar ReactJS',
    },
    {
      id: 3,
      descricao: 'Estudar TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar TypeScript',
    },
  ],
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      );

      if (tarefaExiste) {
        alert('Já existe uma tarefa com esse nome');
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];
        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1,
        };
        state.itens.push(novaTarefa);
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    },
  },
});

export const { remover, editar, cadastrar, alterarStatus } =
  tarefasSlice.actions;
export default tarefasSlice.reducer;
