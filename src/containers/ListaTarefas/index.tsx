import { useSelector } from 'react-redux';
import Tarefa from '../../components/Tarefa';
import * as S from './styles';
import { RootReducer } from '../../store';

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );
  const filtraTarefas = () => {
    let tarefasFiltradas = itens;

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      );
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        );
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        );
      }
      return tarefasFiltradas;
    } else {
      return itens;
    }
  };

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraTarefas().map((t) => (
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
