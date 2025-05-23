import styled from "styled-components"
import logo from './imgs/logo.png'
import logoBranco from './imgs/logobranco.png'
import { useEffect, useRef, useState } from "react";
import Botao from "./Botao"
import BotaoWpp from "./BotaoWpp"
import Nomear from "./Nomear"
import Vinheta from "./Vinheta"
import Quem from "./Quem"
import Duvidas from "./Duvidas"
import Recebe from "./Recebe"
import { Intro } from "./Intro";
import { AindaDuvidas } from "./AindaDuvidas";
import { Formacao } from "./Formacao";
import { Consultorios } from "./Consultorios";
import { E } from "./E";
import perfil1 from "./imgs/perfil1.jpg"
//import dayjs from 'dayjs'
export default function App(){
    const [isOpen, setIsOpen] = useState(false)
    const [vinho,setVinho]=useState(true)
    function mandarWpp(){
            const telefone = 5521999242603;
            let texto=""
            const encodedText = encodeURIComponent(texto);
            const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;
            window.open(urlWhatsapp);
        }
    
    useEffect(()=>{
        setTimeout(() => {
            setVinho(false)
        }, 1200);
    },[])

    const markerRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Quando o marcador SAI da tela, mostramos o botão
          setShowButton(!entry.isIntersecting);
        },
        { threshold: 0 }
      );
  
      if (markerRef.current) {
        observer.observe(markerRef.current);
      }
  
      return () => {
        if (markerRef.current) {
          observer.unobserve(markerRef.current);
        }
      };
    }, []);

    return(vinho?<Vinheta/>:
        <Fundo>
        {isOpen?
        <Tela style={{marginRight:'12px',background:'transparent'}}>
            <Menu>
                <img src={logoBranco}/>
                <Xis onClick={() => setIsOpen(!isOpen)}>
                    <Line isOpen={isOpen} />
                    <Line isOpen={isOpen} />
                </Xis>
            </Menu>
            <Acessos>
                <section>
                <h1>Serviços</h1>
                <h1>Quem sou?</h1>
                <h1>Contato</h1>
                <h1>Rescursos</h1>
                </section>
                <Botao  handle={mandarWpp} texto={'Agende agora'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'} style={{width:'200px'}} />
            </Acessos>
        </Tela>
        :<Tela>
            <BotaoWpp grande={showButton} handle={mandarWpp}/>
            <Menu style={{background:'var(--fundo)'}}>
                <img src={logo}/>
                <Xis onClick={() => setIsOpen(!isOpen)}>
                    <Line isOpen={isOpen} />
                    <Line isOpen={isOpen} />
                </Xis>
            </Menu>
            <Resto>
                <Quadro>
                  <img src={perfil1} />
                  <aside/>
                </Quadro>
                <Intro/>
                <Nomear/>
                <Quem/>
                <E/>
                <Recebe />
                <Consultorios/>
                <Formacao/>
                <Duvidas/>
                <AindaDuvidas/>
            </Resto>
        </Tela>}
        </Fundo>
    )
}
const Quadro = styled.div`
position:relative;
align-items:center;
flex-direction:column;
background:var(--fundo);
width:100%;
img{width:100%;margin:0;max-width:400px;border-radius:0;}
aside{
position:absolute;bottom:0;
width:100%;height:60px;
background: linear-gradient(to top, var(--fundo),var(--fundo), transparent);
}
margin-bottom:-30px;
@media(min-width:850px){
margin-top:80px;
}
`
const Marker = styled.div`
  height: 5px;width:100%;background:;
  margin-bottom:10px;
`;
const Fundo=styled.div`
width:100dvw;height:100dvh;
justify-content:center;

 background: 
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
 url('/estilo.jpeg');
 background-size: cover;
  background-position: center;
  @media(min-width:850px){
  overflow-y:auto;
overflow-x:hidden;
  }
`

const Acessos=styled.div`margin-right:200px;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
max-width:850px;position:absolute;
height:100dvh;width:100dvw;
color:white;
position:fixed;top:80px;z-index:5;
section{
display:flex;flex-direction:column;align-items:center;width:100%;

}
h1{cursor:pointer;font-size:36px;
font-weight:400;margin:0}

`
const Tela=styled.div`
position:relative;
flex-direction:column;
height:100dvh;width:100dvw;
max-width:850px;
span{
position: relative;
  background-image: linear-gradient(transparent 85%, var(--sublinhado) 85%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
`
const Menu=styled.div`
justify-content:space-between;
align-items:center;
position:fixed;max-width:850px;
height:80px;width:100%;
img{height:50px;width:50px;margin:0 0 0 10px;}
z-index:6;
`
const Resto=styled.div`
flex-direction:column;
align-items:center;
height:calc(100% - 80px);width:100%;

position:relative;
  @media(max-width:850px){
  overflow-y:auto;
overflow-x:hidden;
margin-top:80px;
  }
`



const Xis = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;
  width: 32px;
  height: 2px;
  background-color: ${({isOpen})=>isOpen?'white':'var(--detalhe)'};
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:first-child {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translateY(0)" : "translateY(-6px)"};
  }

  &:last-child {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translateY(0)" : "translateY(6px)"};
  }
`;