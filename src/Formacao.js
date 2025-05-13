import styled from "styled-components"
import Titulo from "./Titulo"
import perfil from './imgs/perfil.jpg'
export function Formacao(){
    return(
        <Servicos>
            <Conteudo>
            <Titulo nome='Minha Formação'  style={{background:'var(--fundo2',justifyContent:'center'}} />
<h3>Sou psicóloga (CRP 05/75316) formada pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio).</h3>
<h3>Tenho experiência com as Terapias Cognitivo-Comportamentais, especialmente a TCC Clássica e a Terapia Comportamental Dialética (DBT), além do atendimento de pessoas que fazem uso prejudicial de substâncias psicoativas.</h3>
<h3>Durante a graduação, fui bolsista de Iniciação Científica e participei de grupos de estudo e pesquisa nas áreas de psicopatologia, neuropsicologia e saúde mental. Atuei também como bolsista de Treinamento e Capacitação Técnica pela FAPERJ, no Programa de Estudos e Assistência ao Uso Indevido de Drogas (PROJAD), no IPUB/UFRJ.</h3>
<h3>Atualmente, curso a Especialização em Neuropsicologia pelo Instituto Israelita de Ensino e Pesquisa Albert Einstein e a Pós-graduação em Neuropsicologia dos Transtornos Mentais pela PUCPR.</h3>
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
img{width:300px;margin:30px 0 30px 0}
`
