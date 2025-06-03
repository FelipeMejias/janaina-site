import styled from "styled-components"
import Titulo from "./Titulo"
import perfil from './imgs/perfil.jpg'
export function Formacao(){
    return(
        <Servicos>
            <Conteudo>
            <Titulo nome='Minha Formação'  style={{background:'var(--fundo2)',justifyContent:'center'}} />
<h3>Sou psicóloga <span>(CRP 05/75316)</span>, formada pela PUC-Rio, com atuação voltada à escuta clínica de adultos e idosos.</h3>
<h3>Trabalhei com foco nas Terapias Cognitivo-Comportamentais, especialmente a TCC e a DBT, acompanhando pessoas com quadros de ansiedade, depressão, TDAH, TEA e uso prejudicial de substâncias.</h3>

<h3>Desde a graduação, estive envolvida com pesquisa e saúde pública. Fui bolsista da FAPERJ no PROJAD (IPUB/UFRJ) e do CNPq pela PUC-Rio, além de integrar grupos de estudo em psicopatologia, neuropsicologia e saúde mental.</h3>

<h3>Atualmente, sigo aprofundando minha prática com formações em Neuropsicologia pelo Instituto Albert Einstein e pela PUCPR.</h3>

<h3>Acredito que uma boa avaliação não termina com um laudo, ela <span>abre espaço para transformação</span>.</h3>
<h3>Meu papel é te ajudar a entender com clareza o que está acontecendo e, mais do que isso, <span>construirmos juntos</span> um plano que melhore sua <span>qualidade de vida</span></h3>
            <img style={{borderRadius:'50%'}} src={perfil} />
            </Conteudo>
        </Servicos>
    )
}

const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
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
img{
width:300px;margin:30px 0 30px 0;
border-radius:10px;
}
`
