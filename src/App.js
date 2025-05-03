import styled from "styled-components"
import logo from './imgs/logo.png'
import logoBranco from './imgs/logobranco.png'
import sala1 from './imgs/consultorio1.jpg'
import sala2 from './imgs/consultorio2.jpg'
import foto from './imgs/perfil2.jpg'
import perfil from './imgs/perfil.jpg'
import { useEffect, useRef, useState } from "react";
import Botao from "./Botao"
import { FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import BotaoWpp from "./BotaoWpp"
import Nomear from "./Nomear"
import Vinheta from "./Vinheta"
import Titulo from "./Titulo"
import Quem from "./Quem"

//import dayjs from 'dayjs'
export default function App(){
    const [isOpen, setIsOpen] = useState(false)
    const [vinho,setVinho]=useState(true)
    const [copiado,setCopiado]=useState(false)
    function mandarWpp(){
            const telefone = 5521999242603;
            let texto=""
            const encodedText = encodeURIComponent(texto);
            const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;
            window.open(urlWhatsapp);
        }
    function copiarTexto(){
        navigator.clipboard.writeText('janainafaro.neuropsi@gmail.com').then(() => {setCopiado(true);setTimeout(() => setCopiado(false), 2000)}).catch(err => console.error('Erro ao copiar o texto: ', err));
        };
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
                <Intro>
                    <Conteudo>
                    {/*<h1>Seja bem-vindo(a)!</h1>*/}
                    <Titulo nome='Prazer, Janaina Faro'  style={{background:'var(--fundo'}} />
                    <h3>Sou Psicóloga Especialista em Avaliação Neuropsicológica</h3>
                    <h4>Acredito que <span>reconhecer e nomear</span> o que sentimos nos ajuda a compreender melhor nossos comportamentos e fazer <span>escolhas mais conscientes</span>.</h4>
                    <h4>Meu trabalho vai além de testes e diagnósticos — é um processo de escuta, análise e compreensão profunda do seu funcionamento, para <span>transformar esse entendimento em direcionamento</span>.</h4>
                    <h4>A partir dessa visão, nasceu o <span>Nomear para Transformar!</span></h4> 
                    <h4 style={{marginBottom:'25px'}}>Explore os cards abaixo e conheça nossa proposta:</h4>
                    {/*<h1>Vamos conversar?</h1>*/}
                    {/*<Botao handle={mandarWpp} texto={'AGENDE SUA CONSULTA!'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'} style={{margin:'100px 0 40px 0'}} />*/}
                   
                    {/*<img src={foto} />*/}
                    </Conteudo>
                </Intro>
                <Nomear/>
                <Quem/>
                <Consultorios>
                    <Conteudo>
                    <Titulo nome='Consultório'  style={{background:'var(--fundo'}} />
                    <h2>Atendo presencialmente em um consultório localizado em <span>Botafogo</span>, no Rio de Janeiro.
                    Um espaço moderno e acolhedor, com vista privilegiada e fácil acesso, pensado para proporcionar bem-estar e conforto em cada atendimento.</h2>
                    <section>
                        <Sala>
                            <img src={sala1} />
                            <img src={sala2} />
                        </Sala>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2274185040246!2d-43.18327508970663!3d-22.941850239037308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f8c92c676c3%3A0xc365c4c40a8892d6!2sPraia%20de%20Botafogo%2C%20210%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022250-145!5e0!3m2!1spt-BR!2sbr!4v1746196291762!5m2!1spt-BR!2sbr" 
                            width="100%" height="200px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                    </Conteudo>
                </Consultorios>
                <Servicos>
                    <Conteudo>
                    <Titulo nome='Minha Formação'  style={{background:'var(--fundo2',justifyContent:'center'}} />
                    <h3>Sou psicóloga formada pela PUC-Rio, onde atuei como monitora em disciplinas com enfoque em neurociência e comportamento. Durante a graduação, fui bolsista de Iniciação Científica e participei ativamente de grupos de estudo e pesquisa.</h3>
                    <h3>Minha experiência clínica começou no Projeto Lótus, com foco nas Terapias Cognitivo-Comportamentais, incluindo a Terapia Comportamental Dialética (DBT). Também fui bolsista de Treinamento e Capacitação Técnica pela FAPERJ, atuando no Programa de Estudos e Assistência ao Uso Indevido de Drogas (PROJAD), no IPUB/UFRJ.</h3>
                    <h3>Atualmente, curso a Especialização em Neuropsicologia pelo Instituto Israelita de Ensino e Pesquisa Albert Einstein.</h3>
                    <img style={{borderRadius:'50%'}} src={perfil} />
                    </Conteudo>
                </Servicos>
                <Consultorios style={{marginBottom:'50px'}}>
                    <Conteudo>
                    <Titulo nome='Ficou com dúvidas?'  style={{background:'var(--fundo'}} />
                    <h2>Se você quer entender melhor como funciona a Avaliação Neuropsicológica ou se ela faz sentido para o seu momento, <span>entre em contato</span> e me acompanhe pelo Instagram.</h2>
                    <h2>Estou à disposição para esclarecer suas dúvidas e te ajudar a seguir com mais clareza.</h2>
                    <Insta style={{marginTop:'10px'}} href="https://www.instagram.com/janainafaro.neuropsi">
                        <FaInstagram style={{ color: '#925029', fontSize: '24px' }} />
                        <p>janainafaro.neuropsi</p>
                    </Insta>
                    <Insta onClick={copiarTexto}>
                        <IoMailOutline style={{ color: '#925029', fontSize: '24px' }} />
                        <p>janainafaro.neuropsi@gmail.com</p>
                        {copiado?<aside>Email copiado!</aside>:<></>}
                    </Insta>
                    <h5>Entender o que se sente pode mudar a forma como você vive. <span>Vamos começar essa mudança agora?</span></h5>
                    <Marker ref={markerRef} />
                    </Conteudo>
                </Consultorios>
            </Resto>
        </Tela>}
        </Fundo>
    )
}
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
const Insta=styled.a`
cursor:pointer;position:relative;
width:360px;
display:flex;align-items:center;
 text-decoration: none;
  color: inherit;
  p{margin-left:10px;}
aside{border-radius:5px;color:var(--fundo);padding:3px;
position:absolute;top:45px;background:var(--detalhe)}
`
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Sala=styled.div`
justify-content:space-between;
width:100%;
img{width:calc(50% - 10px);};
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
img{border-radius:10px;}
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
const Servicos=styled.div`
background:var(--fundo2);
flex-direction:column;
width:100%;align-items:center;
padding:0 30px 0 30px;

font-family: "Poppins", sans-serif;
color:var(--fundo);

h2{font-size:24px;font-weight:600;margin:0}
h3{font-size:18px;line-height:24px;font-weight:400;margin:20px 0 0 0;}
text-align: justify;}
img{width:300px;margin:30px 0 30px 0}
`
const Consultorios=styled.div`
background:var(--fundo);
flex-direction:column;

width:100%;align-items:center;
padding:0 30px 0 30px;
font-family: "Poppins", sans-serif;
color:var(--texto);

h2{font-size:18px;font-weight:400;margin:20px 0 0 0;span{font-weight:500;}}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
text-align: justify;}
h5{font-size:18px;font-weight:400;margin:20px 0 80px 0;span{font-weight:500;}}

strong{
font-weight:600;
}
section{
flex-direction:column;
display:flex;width:100%;
justify-content:space-between;
max-width:600px;
}
iframe{border:0;border-radius:10px;margin:0 0 40px 0}
@media(min-width:850px){
h5{margin:0 0 140px 0}
}
`
const Intro=styled.div`
background:var(--fundo);
flex-direction:column;
width:100%;align-items:center;
padding:0 30px 0 30px;
color:var(--texto);
max-width:950px;
font-family: "Poppins", sans-serif;
h1{width:100%;font-size:22px;font-weight:400;color:var(--detalhe);
margin:0;font-family: "Dancing Script", cursive;}

h3{width:100%;font-size:20px;font-weight:600;margin:0 0 10px 0;}
h4{width:100%;font-size:18px;line-height:26px;font-weight:300;margin:10px 0 10px 0;
span{font-weight:500;}
}
  img{width:300px;}
@media(min-width:850px){
h3{margin-top:80px;}
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