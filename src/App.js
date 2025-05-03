import styled from "styled-components"
import logo from './imgs/logo.png'
import sala1 from './imgs/consultorio1.jpg'
import sala2 from './imgs/consultorio2.jpg'
import foto from './imgs/perfil2.jpg'
import perfil from './imgs/perfil.jpg'
import { useEffect, useState } from "react";
import Botao from "./Botao"
import { FaInstagram } from 'react-icons/fa';
import BotaoWpp from "./BotaoWpp"
import Nomear from "./Nomear"
import Vinheta from "./Vinheta"
import Titulo from "./Titulo"

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
        }, 1000);
    },[])
    return(vinho?<Vinheta/>:
        <Fundo>
            
        {isOpen?
        <Tela style={{marginRight:'12px',background:'transparent'}}>
            <BotaoWpp handle={mandarWpp}/>
            <Menu>
                <img src={logo}/>
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
            <BotaoWpp handle={mandarWpp}/>
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
                    <h3>Sou Psicóloga Especialista em Avaliação Neuropsicológica.</h3>
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
                    <h3>Atualmente sou Professor de Psicologia na UniLaSalle. Também sou Mestre e Doutorando em Psicologia Clínica pela PUC-Rio. Minha formação universitária também inclui os cursos de Graduação em Psicologia e em Administração pela UFRJ. Por fim, realizo minha Especialização em Neuropsicologia pelo Instituto de Ensino Albert Einstein. </h3>
                    <Botao texto={'SAIBA MAIS'} fundo={'#ffffff'} fundoHover={'#C8CED0'} style={{margin:'100px 0 40px 0',color:'#292F36'}} />
                    <img style={{borderRadius:'50%'}} src={perfil} />
                    </Conteudo>
                </Servicos>
                <Consultorios style={{marginBottom:'50px'}}>
                    <Conteudo>
                    <Titulo nome='Ficou com dúvidas?'  style={{background:'var(--fundo'}} />
                    <h2>Se você quer entender melhor como funciona a avaliação psicológica ou se ela faz sentido para o seu momento, <span>entre em contato</span> e me acompanhe pelo Instagram.</h2>
                    <h2>Estou à disposição para esclarecer suas dúvidas e te ajudar a seguir com mais clareza.</h2>
                    <Insta href="https://www.instagram.com/janainafaro.neuropsi">
                        <FaInstagram style={{ color: '#925029', fontSize: '24px' }} />
                        <p>janainafaro.neuropsi</p>
                    </Insta>
                    <h2 style={{marginBottom:'150px'}}>Entender o que se sente pode mudar a forma como você vive. <span>Vamos começar essa mudança agora?</span></h2>
                    </Conteudo>
                </Consultorios>
            </Resto>
        </Tela>}
        </Fundo>
    )
}
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
display:flex;align-items:center;
 text-decoration: none;
  color: inherit;margin:20px 0 0 0;
  p{margin-left:10px;}
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
background:var(--fundo);
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
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}
img{width:300px;margin:40px 0 20px 0}
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
}
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

`
const Intro=styled.div`

flex-direction:column;
width:100%;align-items:center;
padding:0 30px 0 30px;
color:var(--texto);
max-width:700px;
font-family: "Poppins", sans-serif;
h1{width:100%;font-size:22px;font-weight:400;color:var(--detalhe);
margin:0;font-family: "Dancing Script", cursive;}

h3{width:100%;font-size:22px;font-weight:600;margin:0 0 10px 0;}
h4{width:100%;font-size:18px;line-height:26px;font-weight:300;margin:10px 0 10px 0;
span{font-weight:500;}
}
  img{width:300px;}
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