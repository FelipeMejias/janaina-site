import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';

export default function BotaoWpp({ handle }) {
  const [tremendo, setTremendo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTremendo(true);
      setTimeout(() => setTremendo(false), 600); // duração da tremidinha
    }, 5000); // intervalo entre tremores

    return () => clearInterval(interval);
  }, []);

  return (
    <Bot onClick={handle} className={tremendo ? "tremer" : ""}>
      <FaWhatsapp style={{ color: 'white', fontSize: '40px' }} />
      <p>Vamos conversar?</p>
    </Bot>
  );
}

// Animação de tremidinha
const shake = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(10deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(6deg); }
  60% { transform: rotate(-6deg); }
  75% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
`;

const Bot = styled.div`
  overflow: hidden;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  background: #984830;
  border-radius: 35px;
  color: white;
  z-index: 15;
  transition: all 0.2s ease;

  p {
    display: none;
    width: 210px;
    font-weight: 500;
    font-size: 18px;
    justify-content: center;
  }

  &:hover {
    width: 280px;

    p {
      display: flex;
    }

    &.tremer {
      animation: none !important; /* não treme se estiver com hover */
    }
  }

  @media (min-width: 850px) {
    right: calc(50vw - 410px);
  }

  h6 {
    display: flex;
    width: 210px;
    font-size: 18px;
    justify-content: center;
    font-weight: 500;
  }

  &.tremer {
    animation: ${shake} 0.6s ease-in-out;
  }
`;
