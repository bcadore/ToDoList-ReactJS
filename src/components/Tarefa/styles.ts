import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import * as enums from '../../utils/enums/Tarefa';

type TagProps = {
  prioridade?: enums.Prioridade;
  status?: enums.Status;
  parametro: 'status' | 'prioridade';
};

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho;
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.laranja;
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo;
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde;
  }

  return '#CCCCCC';
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`;

export const Descricao = styled.textarea`
  line-height: 24px;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
