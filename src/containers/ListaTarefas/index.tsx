import Tarefa from '../../components/Tarefa';

import * as S from './styles';

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Assistir a aula 3.',
    prioridade: 'importante',
    status: 'pendente',
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura e pagar a conta',
    prioridade: 'urgente',
    status: 'concluída',
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Realizar o treino do dia.',
    prioridade: 'importante',
    status: 'pendente',
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
