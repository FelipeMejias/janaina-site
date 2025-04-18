import styled from "styled-components"
import logo from './logo.png'
import sala1 from './sala1.jpg'
import sala2 from './sala2.jpg'
import foto from './foto.jpg'
import perfil from './perfil.jpg'
import { useState } from "react";
import Botao from "./Botao"
export default function App(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <Tela>
            {isOpen?<Acessos>
                <section>
                <h1>Serviços</h1>
                <h1>Quem sou?</h1>
                <h1>Contato</h1>
                <h1>Rescursos</h1>
                </section>
                <Botao texto={'Agende agora'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'} style={{width:'200px'}} />
            </Acessos>:<></>}
            <Menu>
                <img src={logo}/>
                <Xis onClick={() => setIsOpen(!isOpen)}>
                    <Line isOpen={isOpen} />
                    <Line isOpen={isOpen} />
                </Xis>
            </Menu>
            <Resto>
                <Intro>
                    <Conteudo>
                    <h1>Seja bem-vindo(a)!</h1>
                    <h2><span>Prazer, Janaina Faro</span></h2>
                    <h3>Psicólogo Especialista em Avaliação Neuropsicológica e Professor de Psicologia</h3>
                    <h4>Ofereço serviços profissionais de <span>avaliação neuropsicológica e avaliação terapêutica</span> através de um processo humanizado e inovador, focado em fornecer <span>psicodiagnósticos precisos e recomendações claras</span> para promover a sua saúde mental e qualidade de vida. Além disso, <span>ministro cursos, palestras e workshops</span> voltados para psicólogos e estudantes.</h4>
                    <h1>Vamos conversar?</h1>
                    <Botao texto={'AGENDE SUA CONSULTA!'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'} style={{margin:'100px 0 40px 0'}} />
                    <img src={foto} />
                    </Conteudo>
                </Intro>
                <Servicos>
                    <Conteudo>
                    <h1><span>Meus Serviços</span></h1>
                    <img src={foto} />
                    <h2><span>Avaliação Terapêutica</span></h2>
                    <h3>A Avaliação Neuropsicológica vai além do diagnóstico – é uma oportunidade de autoconhecimento e crescimento. Inspirada na Avaliação Terapêutica, desenvolvida em Houston, Texas, minha abordagem ajuda a compreender seu perfil cognitivo e emocional de forma profunda, com ou sem um psicodiagnóstico.
                        Trabalho com adultos e idosos.</h3>
                    
                    <img src={foto} />
                    <h2><span>Avaliação Neuropsicológica</span></h2>
                    <h3>É um processo que investiga funções cognitivas como memória, atenção e raciocínio, auxiliando no diagnóstico e planejamento de intervenções para condições neurológicas e psicológicas.
                        Trabalho com adultos e idosos.</h3>

                    <img src={foto} />
                    <h2><span>Cursos, Palestras e Workshops</span></h2>
                    <h3>Ofereço cursos, palestras e workshops sobre diversos temas da psicologia para alunos e profissionais. Trabalho com pessoas físicas e jurídicas.
                        Entre em contato!</h3>
                    </Conteudo>
                </Servicos>
                <Consultorios>
                    <Conteudo>
                    <h1><span>Consultórios</span></h1>
                    <h2>Atendo de forma <strong>híbrida (presencial e/ou online)</strong>, dependendo do serviço desejado. Meu local de atendimento é nas unidades da <strong>Livance do Rio de Janeiro (Botafogo e Barra da Tijuca)</strong>. Os consultórios são modernos, acolhedores, impecáveis e com localização privilegiada, pensado para te oferecer conforto e privacidade. Ambos os consultórios possuem <strong>estacionamento rotativo no local</strong>.</h2>
                    <section>
                        <Sala>
                            <img src={sala1} />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6122.34895520131!2d-43.33000321756923!3d-23.009051901954066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd09e5b354cff%3A0x3a8abfaa90de14ba!2sPosto%204!5e0!3m2!1spt-BR!2sbr!4v1744536220686!5m2!1spt-BR!2sbr" 
                                width="100%" height="50%" 
                                allowfullscreen="" loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </Sala>
                        <Sala>
                            <img src={sala2} />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.4266463480494!2d-43.17399977002668!3d-22.934509376003675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981da51082559%3A0x3e0a236d5eb8fe6a!2sPosto%203%20-%20Praia%20do%20Flamengo!5e0!3m2!1spt-BR!2sbr!4v1744536330937!5m2!1spt-BR!2sbr" 
                                width="100%" height="50%"  
                                allowfullscreen="" loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </Sala>
                    </section>
                    </Conteudo>
                </Consultorios>
                <Consultorios>
                    <Conteudo>
                    <h1><span>Agendar</span></h1>
                    <h2>Agende sua consulta de maneira <strong>simples e prática</strong>. Vamos encontrar um horário que se encaixe na sua rotina.</h2>
                    <Botao texto={'AGENDE SUA CONSULTA!'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'}  />
                    </Conteudo>
                </Consultorios>
                <Servicos>
                    <Conteudo>
                    <h1><span>Minha Formação</span></h1>
                    <h3>Atualmente sou Professor de Psicologia na UniLaSalle. Também sou Mestre e Doutorando em Psicologia Clínica pela PUC-Rio. Minha formação universitária também inclui os cursos de Graduação em Psicologia e em Administração pela UFRJ. Por fim, realizo minha Especialização em Neuropsicologia pelo Instituto de Ensino Albert Einstein. </h3>
                    <Botao texto={'SAIBA MAIS'} fundo={'#ffffff'} fundoHover={'#C8CED0'} style={{margin:'100px 0 40px 0',color:'#292F36'}} />
                    <img style={{borderRadius:'50%'}} src={perfil} />
                    </Conteudo>
                </Servicos>
                <Consultorios>
                    <Conteudo>
                    <h1><span>Dúvidas? Entre em Contato!</span></h1>
                    <h2>Tem dúvidas ou quer saber mais sobre meus serviços? Estou aqui para te ajudar! <strong>Entre em contato</strong> pelo formulário ao lado e responderei assim que possível. Será um prazer atender você e esclarecer qualquer questão.</h2>
                    <h2>Você também pode entrar em contato através das <strong>minhas redes sociais</strong>:</h2>
                    </Conteudo>
                </Consultorios>
            </Resto>
        </Tela>
    )
}
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Sala=styled.div`
flex-direction:column;
img{width:100%;max-height:45%};
width:calc(50% - 10px);height:60vw;max-height:400px;
iframe{border:0;}
`
const Consultorios=styled.div`
flex-direction:column;

width:100%;align-items:center;
padding:30px;
font-family: "Poppins", sans-serif;
color:#292F36;
h1{z-index:4;width:100%;height:70px;background:#E6E6E6;position:sticky;top:0;width:100%;font-size:32px;font-weight:600;margin:15px 0 30px 0;}
h2{font-size:18px;font-weight:400;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}
strong{
font-weight:600;
}
section{
display:flex;width:100%;
justify-content:space-between;
max-width:600px;
}
`
const Acessos=styled.div`
flex-direction:column;
justify-content:space-evenly;
align-items:center;
height:100dvh;width:100dvw;
background:#E6E6E6;
position:fixed;top:0;z-index:5;
section{
display:flex;flex-direction:column;align-items:center;width:100%;

}
h1{cursor:pointer;font-size:36px;
font-weight:400;margin:10px 0 20px 0}

`
const Tela=styled.div`
flex-direction:column;
height:100dvh;width:100dvw;
background:#E6E6E6;

`
const Menu=styled.div`
justify-content:space-between;
align-items:center;
height:80px;width:100dvw;
img{height:80px;width:80px;margin:0;}
z-index:6;
`
const Resto=styled.div`
flex-direction:column;
align-items:center;
height:calc(100% - 80px);width:100%;
overflow:auto;
`
const Servicos=styled.div`
background:#292F36;
flex-direction:column;
width:100%;align-items:center;
padding:30px;
font-family: "Poppins", sans-serif;
color:white;
h1{z-index:4;width:100%;text-align:center;height:70px;background:#292F36;position:sticky;top:0;font-size:32px;font-weight:600;margin:15px 0 30px 0;}
h2{font-size:24px;font-weight:600;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}
span{
position: relative;
  background-image: linear-gradient(transparent 60%, var(--detalhe) 60%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
  img{width:300px;margin:40px 0 20px 0}
`
const Intro=styled.div`
flex-direction:column;
width:100%;align-items:center;
padding:30px;
color:#292F36;
font-family: "Poppins", sans-serif;
h1{width:100%;font-size:22px;font-weight:400;color:var(--detalhe);margin:0;font-family: "Dancing Script", cursive;}
h2{z-index:4;width:100%;height:90px;background:#E6E6E6;position:sticky;top:0;
width:100%;font-size:45px;font-weight:600;margin:10px 0 10px 0;}
h3{width:100%;font-size:22px;font-weight:600;margin:0;}
h4{width:100%;font-size:18px;line-height:26px;font-weight:300;margin:10px 0 10px 0;
span{font-weight:500;}
}
span{
position: relative;
  background-image: linear-gradient(transparent 60%, var(--detalhe) 60%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
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

const Line = styled.span`
  position: absolute;
  width: 32px;
  height: 2px;
  background-color: black;
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