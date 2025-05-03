import styled from "styled-components"
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import Titulo from "./Titulo";
import { CgEnter } from "react-icons/cg";
export default function Quem(){
    const [atual,setAtual]=useState(0)
    const cards=[
{titulo:'Dificuldades no dia a dia',texto:`
Sente dificuldades de memória, atenção, organização ou tomada de decisões
`,icone:"🌱"},
{titulo:'Sofrimento sem nome',texto:`
Está em sofrimento emocional e não identifica exatamente por quê
    `,icone:"💬"},
{titulo:'Mudanças internas',texto:`
Tem percebido mudanças recentes em sua forma de pensar, agir ou lidar com as pessoas
    `,icone:"🔍"},

    ]
    return(
        <Servicos>
            <Conteudo>
                <h1><span>Para quem é meu trabalho</span></h1>
                <Carrossel>
                    {cards.map(card=><Card>
                        {/*<p style={{fontSize:'50px'}}>{card.icone}</p>*/}
                        <h1>{card.titulo}</h1>
                        <p>{card.texto}</p>
                    </Card>)}
                </Carrossel>
                <h2>Se identifica com algum desses casos?</h2>
            </Conteudo>
        </Servicos>
    )
}
const Bolinha=styled.div`
width:10px;height:10px;border-radius:50%;margin:3px;
background:${p=>p.selec?'white':'#6b381b'};
`
const Bolinhas=styled.div`
align-items:center;justify-content:center;
`
const Card=styled.div`
background:rgb(0,0,0,0.3);
flex-direction:column;
align-items:center;
border-radius:15px;
width:30%;
color:var(--fundo);
max-width:180px;
font-size:30px;
height:100%;
p{margin:5px;font-size:14px;text-align:center;}
h1{margin:5px;font-size:18px;font-weight:600;text-align:center;}
`
const Seta=styled.div`
align-items:center;position:absolute;
width:150px;justify-content:center;height:100%;
`
const Carrossel=styled.div`
align-items:center;position:relative;
justify-content:space-evenly;
width:100%;margin:20px 0 40px 0;
`
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Servicos=styled.div`
background:transparent;
flex-direction:column;
width:100%;align-items:center;
padding:0;
font-family: "Poppins", sans-serif;
color:var(--fundo);
h2{background:transparent;font-size:26px;font-weight:400;color:var(--fundo);
margin:0 0 40px 0;font-family: "Dancing Script", cursive;background:transparent;

}
img{width:300px;margin:40px 0 20px 0}
 @media(max-width:850px){h1{top:0}}
`