import AdicionarTarefa from '../../components/AdicionarTarefa';
import BarraLateral from '../../containers/BarraLateral';
import ListaTarefas from '../../containers/ListaTarefas';

const Home = () => (
  <>
    <BarraLateral exibirFiltros></BarraLateral>
    <ListaTarefas></ListaTarefas>
    <AdicionarTarefa></AdicionarTarefa>
  </>
);

export default Home;
