import styled from "styled-components"
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useRef, useState } from "react";
import Titulo from "./Titulo";
import { CgEnter } from "react-icons/cg";
export default function Nomear(){
    const [atual,setAtual]=useState(0)
    const cards=[
{titulo:'O início de um olhar mais atento',texto:`
Nem sempre temos todas as respostas — e tudo bem. O importante é dar o primeiro passo e começar a olhar com mais atenção para o que está pedindo cuidado.
`,icone:"🌱"},
{titulo:'Dar nome ao que te trouxe até aqui',texto:`
No primeiro encontro, escuto sua história, compreendo o motivo da sua busca e juntos começamos a organizar o que precisa ser investigado.
`,icone:"💬"},
{titulo:'Investigar com profundidade',texto:`
A partir da escuta, iniciamos a testagem, sempre escolhida de forma individualizada, para compreender a fundo como você pensa, reage e se organiza no dia a dia.
`,icone:"🔍"},
{titulo:'Integrar e direcionar',texto:`
Na devolutiva, não entrego apenas um laudo, mas uma visão clara das dificuldades e potencialidades identificadas, com sugestões de caminhos mais assertivos para promover qualidade de vida.
`,icone:"🌀"},
{titulo:'Você merece entender o que sente. E saber o que fazer com isso',texto:`
Esse é o propósito do Nomear para Transformar.
`,icone:"✨"},
    ]
    const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    const limite = 50; // mínimo de px pra considerar um swipe

    if (delta > limite) {
      // Swipe para ESQUERDA (próxima imagem)
       if(atual!=4)setAtual(atual+1)
    } else if (delta < -limite) {
      // Swipe para DIREITA (imagem anterior)
     
        if(atual!=0)setAtual(atual-1)
    }
  };
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Nomear para Transformar' fonte={21} style={{background:'var(--fundo2',justifyContent:'center'}} />
                <Carrossel
                  onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
                >
                    {atual!=0?<Seta onClick={()=>setAtual(atual-1)} style={{left:'-70px',fontSize:'36px',cursor:'pointer'}}><SlArrowLeft /></Seta>:<Seta/>}
                    <Card
                  
                    >
                        <p style={{fontSize:'50px'}}>{cards[atual].icone}</p>
                        <h1>{cards[atual].titulo}</h1>
                        <p>{cards[atual].texto}</p>
                    </Card>
                    {atual!=4?<Seta onClick={()=>setAtual(atual+1)} style={{right:'-70px',fontSize:'36px',cursor:'pointer'}}><SlArrowRight /></Seta>:<Seta/>}
                </Carrossel>
                <Bolinhas>
                    {cards.map((c,i)=><Bolinha selec={i==atual}/>)}
                </Bolinhas>
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
padding:15px 5px 15px 5px;
background:rgb(255,255,255,0.1);
flex-direction:column;
align-items:center;
width:calc(100% - 60px);
max-width:500px;
font-size:30px;
border-radius:15px;
p{margin:5px;font-size:16px;text-align:center;}
h1{margin:5px;font-size:19px;font-weight:600;text-align:center;
font-family: "Bricolage Grotesque", sans-serif;
}
`
const Seta=styled.div`
align-items:center;position:absolute;
width:150px;justify-content:center;height:100%;
`
const Carrossel=styled.div`
align-items:center;position:relative;
justify-content:space-evenly;
width:100%;height:320px;margin:30px 0 30px 0;
`
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
color:var(--fundo);min-height:480px;
h2{font-size:24px;font-weight:600;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}
img{width:300px;margin:40px 0 20px 0}
 @media(max-width:850px){h1{top:0}}
`