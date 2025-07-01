import { useSelector } from 'react-redux';
import Tarefa from '../../components/Tarefa';
import * as S from './styles';
import { RootReducer } from '../../store';

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas )
  return (
    <S.Container>
      <p> 2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ListaTarefas;
