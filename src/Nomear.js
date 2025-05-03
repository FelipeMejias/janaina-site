import styled from "styled-components"
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
export default function Nomear(){
    const [atual,setAtual]=useState(0)
    const cards=[
{texto:`
texto 1
`,icone:"🌱"},
{texto:`
texto 2
`,icone:"💬"},
{texto:`
texto 3
`,icone:"🔍"},
{texto:`
texto 4
`,icone:"🌀"},
{texto:`
Você merece entender o que sente. E saber o que fazer com isso. Esse é o propósito do Nomear para Transformar.
`,icone:"✨"},
    ]
    return(
        <Servicos>
            <Conteudo>
                <h1><span>Nomear para Transformar</span></h1>
                <Carrossel>
                    {atual!=0?<Seta onClick={()=>setAtual(atual-1)} style={{left:'-50px',fontSize:'36px',cursor:'pointer'}}><SlArrowLeft /></Seta>:<Seta/>}
                    <Card>
                        <p style={{fontSize:'50px'}}>{cards[atual].icone}</p>
                        <p>{cards[atual].texto}</p>
                    </Card>
                    {atual!=4?<Seta onClick={()=>setAtual(atual+1)} style={{right:'-50px',fontSize:'36px',cursor:'pointer'}}><SlArrowRight /></Seta>:<Seta/>}
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
flex-direction:column;
align-items:center;
width:260px;
font-size:30px;
p{margin:5px;font-size:18px;text-align:center;}
`
const Seta=styled.div`
align-items:center;position:absolute;
width:150px;justify-content:center;height:100%;
`
const Carrossel=styled.div`
align-items:center;position:relative;
justify-content:space-evenly;
width:100%;height:300px;margin:30px 0 30px 0;
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
h1{display:flex;align-items:center;justify-content:center;
z-index:4;width:100%;text-align:center;height:80px;background:var(--fundo2);
position:sticky;top:0;font-size:28px;font-weight:600;margin:0}
h2{font-size:24px;font-weight:600;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}

  img{width:300px;margin:40px 0 20px 0}
`