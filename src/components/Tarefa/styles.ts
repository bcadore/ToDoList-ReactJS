import styled from "styled-components";

export const Card = styled.div`
    padding: 16px;
    margin-bottom: 32px;
    background-color: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const Tag = styled.span`
    display: inline-block;
    padding: 4px 8px;
    margin-right: 16px;
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #E1A32A;
    border-radius: 8px;
`

export const Descricao = styled.textarea`
    line-height: 24px;
    color: #8B8B8B;
    font-size: 14px;
    font-family: "Roboto Mono", monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`

export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
`

export const Botao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2F3640;
    border-radius: 8px;
    margin-right: 8px;
`