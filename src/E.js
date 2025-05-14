import styled from "styled-components"
import Titulo from "./Titulo"
import { useState } from "react"
import { GrSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
export function E(){
        const [abertas,setAbertas]=useState([false,false,false,false,false,false,false,])
    const cards=[
{icone:'🌿',titulo:'O que investigamos?',
texto:'A avaliação neuropsicológica é uma investigação clínica que busca compreender como condições neurológicas e/ou psicológicas afetam o funcionamento cognitivo, comportamental e adaptativo da pessoa. Avaliamos habilidades como atenção, memória, linguagem, funções executivas e mais — com base no entendimento de que todo comportamento tem origem em sistemas neurais específicos.'
},
{icone:'🧠',titulo: 'Como funciona?',
texto:'O processo é estruturado em etapas presenciais, com duração média de 6 a 10 encontros de 1h30 cada. Ele combina entrevista clínica, aplicação de testes padronizados, escalas e observação comportamental. Cada instrumento é escolhido com base em hipóteses clínicas e nas particularidades de cada caso.'
},
{icone:'🧩',titulo: ' Por que é tão específico?',
texto:'Testes não devem ser aplicados de forma aleatória. O neuropsicólogo seleciona tarefas com base em hipóteses clínicas bem definidas. Isso garante precisão nos achados e direcionamento eficaz — com atenção tanto às dificuldades quanto às potencialidades do paciente.'
},
{icone:'🧭',titulo: ' Vai além do diagnóstico',
texto:'Mais do que identificar um transtorno, a avaliação esclarece como ele impacta o cotidiano da pessoa. Os resultados servem como base para intervenções personalizadas, contribuindo para decisões mais conscientes sobre cuidado, adaptação e qualidade de vida.'
},
{icone:'🔍',titulo: ' Técnica com responsabilidade',
texto:'Os dados obtidos são analisados à luz da história clínica, da evolução dos sintomas e dos modelos contemporâneos da neuropsicologia. Por isso, o processo exige escuta qualificada, formação especializada e atualização constante do profissional.'
},
]
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='A avaliação neuropsicológica é:' fonte={22}  style={{background:'var(--fundo',justifyContent:'center'}} />
                {cards.map((duv,i)=>
                <Holder>
                <Duv onClick={()=>{
                        const nova=[]
                        for(let k=0;k<abertas.length;k++){
                            const valor=abertas[k]
                            nova.push(k==i?!valor:valor)
                        }
                        console.log(nova)
                        setAbertas(nova)
                    }}>
                    <h2>{duv.icone}{duv.titulo}</h2>
                    <Seta >
                    {abertas[i]?<GrSubtract/>:<GrAdd/>}
                    </Seta>
                </Duv>
                <p>{abertas[i]?<h3>{duv.texto}</h3>:<></>}</p>
                </Holder>
                )}
            </Conteudo>
        </Servicos>
    )
}
const Holder=styled.div`
width:90%;align-items:center;
max-width:700px;
flex-direction:column;
p{
margin:0 0 10px 0;width:80%;
text-align:justify;
}

`
const Seta=styled.div`
width:40px;height:40px;
flex-direction:column;
justify-content:center;
align-items:center;background:;
font-size:22px;
`
const Duv=styled.div`
cursor:pointer;
border-radius:10px;
background:var(--claro);
color:white;
padding:0 10px 0 10px;
align-items:center;
width:100%;
margin-bottom:12px;
@media(min-width:850px){
&:hover{
width:calc(100% + 10px);
}
}

`
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Servicos=styled.div`
background:var(--fundo);
flex-direction:column;
width:100%;align-items:center;
padding:0;
font-family: "Poppins", sans-serif;
color:var(--texto);
h2{
font-family: "Bricolage Grotesque", sans-serif;
font-weight:500;
font-size:18px;
width:100%;
}
h3{

font-size:16px;margin:0px 0 10px 0;
font-weight:400;
width:100%;
}

img{width:300px;margin:40px 0 20px 0}
 @media(max-width:850px){h1{top:0}}
`