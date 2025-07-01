import Tarefa from '../../components/Tarefa';

import * as S from './styles';

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Assistir a aula 3.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura e pagar a conta',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA,
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Realizar o treino do dia.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
  },
];

const ListaTarefas = () => (
  <S.Container>
    <p></p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </S.Container>
);

export default ListaTarefas;
