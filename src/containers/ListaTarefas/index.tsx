import { useSelector } from 'react-redux';
import Tarefa from '../../components/Tarefa';
import * as S from '../../styles';
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

  const exibeResultadoFiltro = (quantidade: number) => {
    let mensagem = '';
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : '';

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: Todas ${complementacao}`;
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`;
    }

    return mensagem;
  };

  const tarefas = filtraTarefas();
  const mensagem = exibeResultadoFiltro(tarefas.length);

  return (
    <S.MainContainer>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {tarefas.map((t) => (
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
    </S.MainContainer>
  );
};

export default ListaTarefas;
