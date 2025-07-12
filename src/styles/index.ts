import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;
export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  border-radius: 8px;
  border-color: #666666;
  color: #666666;
  background-color: #ffffff;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`;

export default EstiloGlobal;
