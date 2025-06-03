import styled from "styled-components";
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRef, useState, useEffect } from "react";
import Titulo from "./Titulo";
import { CgEnter } from "react-icons/cg";
import i5 from './imgs-nomear/6.png';
import i4 from './imgs-nomear/7.png';
import i2 from './imgs-nomear/8.png';
import i3 from './imgs-nomear/9.png';
import i1 from './imgs-nomear/10.png';

export default function Nomear() {
  const [atual, setAtual] = useState(0);
  const cards = [
    { titulo: 'O início de um olhar mais atento', texto: `Nem sempre temos todas as respostas e tudo bem. O importante é dar o primeiro passo e começar a olhar com mais atenção para o que está pedindo cuidado.`, icone: i1 },
    { titulo: 'Dar nome ao que te trouxe até aqui', texto: `No primeiro encontro, escuto sua história, compreendo o motivo da sua busca e juntos começamos a organizar o que precisa ser investigado.`, icone: i2 },
    { titulo: 'Investigar com profundidade', texto: `A partir da escuta, iniciamos a testagem, sempre escolhida de forma individualizada, para compreender a fundo como você pensa, se comporta e se organiza no dia a dia.`, icone: i3 },
    { titulo: 'Integrar e direcionar', texto: `Na devolutiva, não entrego apenas um laudo, mas uma visão clara das dificuldades e potencialidades identificadas, com sugestões de caminhos mais assertivos para promover qualidade de vida.`, icone: i4 },
    { titulo: 'Você merece entender o que sente. E saber o que fazer com isso', texto: `Esse é o propósito:`, icone: i5 },
  ];

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const carrosselRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    const limite = 50;

    if (delta > limite && atual < cards.length - 1) {
      setAtual(atual + 1);
    } else if (delta < -limite && atual > 0) {
      setAtual(atual - 1);
    }
  };

  useEffect(() => {
    const el = carrosselRef.current;
    if (!el) return;

    const bloquearScrollVertical = (e) => {
      const deltaX = Math.abs(touchStartX.current - e.touches[0].clientX || 0);
      const deltaY = Math.abs(e.touches[0].clientY || 0);
      if (deltaX > deltaY) {
        e.preventDefault(); // bloqueia scroll vertical
      }
    };

    el.addEventListener("touchmove", bloquearScrollVertical, { passive: false });

    return () => {
      el.removeEventListener("touchmove", bloquearScrollVertical);
    };
  }, []);

  return (
    <Servicos>
      <Conteudo>
        <Titulo nome='Nomear para Transformar' fonte={21} style={{ background: 'var(--fundo2)', justifyContent: 'center' }} />
        <Carrossel
          ref={carrosselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {atual !== 0 ? (
            <Seta onClick={() => setAtual(atual - 1)} style={{ left: '-70px', fontSize: '36px', cursor: 'pointer' }}>
              <SlArrowLeft />
            </Seta>
          ) : <Seta />}

          <Card>
            <img src={cards[atual].icone} />
            <h1>{cards[atual].titulo}</h1>
            <p>{cards[atual].texto}</p>
            {atual === 4 && <h6>Nomear para Transformar</h6>}
          </Card>

          {atual !== 4 ? (
            <Seta onClick={() => setAtual(atual + 1)} style={{ right: '-70px', fontSize: '36px', cursor: 'pointer' }}>
              <SlArrowRight />
            </Seta>
          ) : <Seta />}
        </Carrossel>
        <Bolinhas>
          {cards.map((c, i) => (
            <Bolinha key={i} onClick={() => setAtual(i)} selec={i === atual} />
          ))}
        </Bolinhas>
      </Conteudo>
    </Servicos>
  );
}

// Styled Components (os mesmos que você já tinha)
const Bolinha = styled.div`
  width: 10px; height: 10px; border-radius: 50%; margin: 3px;
  background: ${p => p.selec ? 'white' : '#6b381b'};
`;
const Bolinhas = styled.div`
  align-items: center; justify-content: center;
  margin-bottom: -10px;
`;
const Card = styled.div`
  img { height: 80px; width: auto; margin: 0; }
  color: var(--fundo2);
  background: url('/marmore.png'); background-size: cover; background-position: center;
  height: 300px; padding: 15px 5px; flex-direction: column; align-items: center;
  width: calc(100% - 60px); max-width: 500px;
  font-size: 30px; border-radius: 15px;
  p { margin: 5px; font-size: 16px; text-align: center; }
  h1 { margin: 5px; font-size: 19px; font-weight: 600; text-align: center;
    font-family: "Bricolage Grotesque", sans-serif; }
  h6 {
    font-family: "Qwitcher Grypen", cursive;
    margin: 20px 0 0 0; font-size: 36px;
  }
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  @media(max-width:850px){ width: calc(100% - 0px); }
`;
const Seta = styled.section`
  display: flex; align-items: center; position: absolute;
  width: 150px; justify-content: center; height: 100%;
  @media(max-width:850px){ display: none; }
`;
const Carrossel = styled.div`
  align-items: center; position: relative;
  justify-content: space-evenly;
  width: 100%; height: 320px; margin: 10px 0;
`;
const Conteudo = styled.div`
  flex-direction: column; align-items: center;
  width: 100%; max-width: 700px;
`;
const Servicos = styled.div`
  background: var(--fundo2);
  flex-direction: column;
  width: 100%; align-items: center;
  padding: 0 30px;
  font-family: "Poppins", sans-serif;
  color: var(--fundo); min-height: 480px;
  h2 { font-size: 24px; font-weight: 600; margin: 15px 0 30px 0; }
  h3 { width: 80%; font-size: 18px; line-height: 24px; font-weight: 400; margin: 0; }
  @media(max-width:850px){ h1 { top: 0; } }
`;
