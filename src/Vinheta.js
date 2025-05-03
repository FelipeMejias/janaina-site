import React from "react";
import styled, { keyframes } from "styled-components";
import j from './imgs/jn.png';
import f from './imgs/fn.png';

const tamanho = 250;

export default function Vinheta() {
  return (
    <Container>
      <ImagemSuperior src={j} />
      <ImagemInferior src={f} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
 background: 
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
 url('/estilo.jpeg');
 background-size: cover;
  background-position: center;
`;

// Animação 1: movimento vertical até o centro
const descer = keyframes`
  from { transform: translateY(-50vh); }
  to { transform: translateY(0); }
`;

const subir = keyframes`
  from { transform: translateY(50vh); }
  to { transform: translateY(0); }
`;

// Animação 2: movimento lateral após 0.4s parado no centro
const sairParaEsquerda = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50vw); }
`;

const sairParaDireita = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(50vw); }
`;

const ImagemSuperior = styled.img`
  position: absolute;
  left: calc(50vw - ${tamanho / 2}px);
  top: calc(50vh - ${tamanho / 2}px);
  height: ${tamanho}px;
  width: ${tamanho}px;

  animation: 
    ${descer} 0.4s ease-out forwards,
    ${sairParaEsquerda} 0.4s ease-in forwards;
  animation-delay: 0s, 0.8s;
`;

const ImagemInferior = styled.img`
  position: absolute;
  left: calc(50vw - ${tamanho / 2}px);
  top: calc(50vh - ${tamanho / 2}px);
  height: ${tamanho}px;
  width: ${tamanho}px;

  animation: 
    ${subir} 0.4s ease-out forwards,
    ${sairParaDireita} 0.4s ease-in forwards;
  animation-delay: 0s, 0.8s;
`;
