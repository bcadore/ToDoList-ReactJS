import styled from 'styled-components';

type Props = {
  ativo: boolean;
};

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#A1A1A1')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#FFF' : '#FCFCFC')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5E5E5E')};
  cursor: pointer;
`;

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 14px;
`;
