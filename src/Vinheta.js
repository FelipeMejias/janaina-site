import React from "react";
import styled, { keyframes } from "styled-components";
import j from './j.png'
import f from './f.png'

const tamanho=250
export default function Vinheta() {
  return (
    <Container>
      <ImagemSuperior src={j}  />
      <ImagemInferior src={f} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: 100vh;width:100vw;
  overflow: hidden;
  background:var(--fundo)

`;

const subir = keyframes`
  from {
    transform: translateY(50vh);
  }
  to {
    transform: translateY(0);
  }
`;

const descer = keyframes`
  from {
    transform: translateY(-50vh);
  }
  to {
    transform: translateY(0);
  }
`;

const ImagemSuperior = styled.img`
position:absolute;left:calc(50vw - ${tamanho/2}px);top:calc(50vh - ${tamanho/2}px);
height:${tamanho}px;width:${tamanho}px;
  transform: translateX(-50vh);
  animation: ${descer} 0.4s ease-out forwards;
`;

const ImagemInferior = styled.img`
position:absolute;left:calc(50vw - ${tamanho/2}px);top:calc(50vh - ${tamanho/2}px);
height:${tamanho}px;width:${tamanho}px;
  transform: translateX(-50vh);
  animation: ${subir} 0.4s ease-out forwards;
`;