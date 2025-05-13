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
Se você sente dificuldades de memória, atenção, organização ou tomada de decisões
`,icone:"🌱"},
{titulo:'Sofrimento sem nome',texto:`
Caso esteja em sofrimento emocional e não identifique exatamente por quê
    `,icone:"💬"},
{titulo:'Mudanças internas',texto:`
Caso esteja percebendo mudanças recentes em sua forma de pensar, agir ou lidar com as pessoas
    `,icone:"🔍"},

    ]
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Quando a avaliação faz sentido?' noGrude={true} fonte={19} style={{justifyContent:'center'}} />
                <Carrossel>
                    {cards.map(card=><Card>
                        {/*<p style={{fontSize:'50px'}}>{card.icone}</p>*/}
                        <h3>{card.titulo}</h3>
                        <p>{card.texto}</p>
                    </Card>)}
                </Carrossel>
                <h2>Se identifica com algum desses casos? Então, deixa eu te explicar melhor...</h2>
            </Conteudo>
        </Servicos>
    )
}

const Card=styled.div`
background:rgb(255,255,255,0.5);
flex-direction:column;
align-items:center;
border-radius:15px;
width:30%;
color:var(--texto);
max-width:180px;
font-size:30px;
height:100%;
p{margin:5px;font-size:14px;text-align:center;}
h3{margin:5px;font-size:17px;font-weight:500;text-align:center;
font-family: "Bricolage Grotesque", sans-serif;
}
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
text-align:center;width:250px;
margin:0 0 40px 0;font-family: "Dancing Script", cursive;background:transparent;
}
img{width:300px;margin:40px 0 20px 0}
 @media(max-width:850px){h1{top:0}}
`