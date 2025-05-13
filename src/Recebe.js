import styled from "styled-components"
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import Titulo from "./Titulo";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Recebe(){
    const [atual,setAtual]=useState(0)
    const cards=[
'Laudo técnico detalhado',

'Sessão de 1h30 de devolutiva para sanar todas as suas dúvidas',

'Explicação profissional sobre o seu funcionamento cognitivo (dificuldades e potencialidades)',

'Orientações práticas e personalizadas + plano de intervenção',

'Mais do que um diagnóstico, a avaliação oferece um ponto de partida',

'Uma nova perspectiva sobre si mesmo, com informações que te ajudam a entender o que está sentindo, saber o que fazer com isso e seguir com mais clareza'

    ]
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Ao final, você recebe:' noGrude={true} fonte={22} style={{justifyContent:'center'}} />
                <Carrossel>
                    {cards.map(card=><Card>
                        <IoMdCheckmarkCircleOutline/>
                        <p>{card}</p>
                    </Card>)}
                </Carrossel>
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
border-radius:15px;
width:95%;
color:var(--fundo2);
font-size:30px;
margin:10px;
height:100%;
p{margin:5px 0 0 10px;color:var(--texto);
width:calc(100% - 30px);
font-size:14px;}
`
const Seta=styled.div`
align-items:center;position:absolute;
width:150px;justify-content:center;height:100%;
`
const Carrossel=styled.div`
padding:10px 0 10px 0;
flex-direction:column;
background:rgb(255,255,255,0.6);
align-items:center;position:relative;
justify-content:space-evenly;
width:90%;margin:10px 0 40px 0;
border-radius:15px;
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