import AdicionarTarefa from '../../components/AdicionarTarefa';
import BarraLateral from '../../containers/BarraLateral';
import ListaTarefas from '../../containers/ListaTarefas';

const Home = () => (
  <>
    <BarraLateral></BarraLateral>
    <ListaTarefas></ListaTarefas>
    <AdicionarTarefa></AdicionarTarefa>
  </>
);

export default Home;
