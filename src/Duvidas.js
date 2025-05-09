import styled from "styled-components"
import { TiSpiral } from "react-icons/ti";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import Titulo from "./Titulo";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
export default function Duvidas(){
    const [abertas,setAbertas]=useState([false,false,false,false,false,false,false,])
    const duvidas=[
{perg:'Quanto tempo dura o processo de avaliação?',
resp:'A avaliação neuropsicológica costuma durar de 6 a 10 sessões presenciais, com cerca de 1h30 cada. A duração exata depende da complexidade da demanda e da quantidade de instrumentos clínicos necessários para responder às perguntas centrais do caso.'},

{perg:'Qual a diferença entre psicoterapia e avaliação neuropsicológica?',

resp:'A psicoterapia é um processo contínuo de acompanhamento emocional. Já a avaliação neuropsicológica tem início, meio e fim bem definidos, com o objetivo de investigar como seu cérebro está funcionando e como isso impacta sua vida. Ao final, em uma sessão de devolutiva você recebe um laudo com orientações práticas.'},

{perg:'Preciso de encaminhamento médico para realizar a avaliação?',

resp:'Não. Você pode buscar a avaliação por vontade própria, especialmente se estiver vivenciando dificuldades de atenção, memória, organização ou qualquer disfunção executiva que possa ser um alvo terapêutico. Encaminhamentos médicos são bem-vindos, mas não obrigatórios.'},

{perg:'Psicólogo pode dar diagnóstico?',

resp:'Sim! Psicólogos têm competência legal e técnica para realizar diagnósticos psicológicos e neuropsicológicos. No caso da avaliação, o trabalho é feito com base em testes padronizados, entrevistas e critérios clínicos — com o mesmo rigor utilizado por outros profissionais da saúde.'},

{perg:'A avaliação é indicada mesmo sem suspeita de diagnóstico?',

resp:'Sim. Muitas pessoas buscam esse processo para entender melhor suas dificuldades cotidianas ou aprofundar o autoconhecimento. Ter um diagnóstico não é o único motivo — a avaliação também é uma ferramenta de clareza e direcionamento.'},

{perg:'Quais são as formas de pagamento disponíveis?',

resp:'O pagamento pode ser feito via Pix com 10% de desconto ou cartão de crédito, com possibilidade de parcelamento em até 12 vezes (acrescido da taxa da operadora). Os detalhes são combinados diretamente no momento do agendamento.'},

{perg:'Aceita plano de saúde?',
resp:`Atualmente, o atendimento é realizado de forma particular. No entanto, posso emitir recibo para solicitação de reembolso junto ao seu plano de saúde, conforme as regras da operadora.
Fica a cargo do paciente verificar diretamente com o convênio se há reembolso disponível para avaliação neuropsicológica realizada por psicólogo.
Muitos planos oferecem essa opção por meio da modalidade de reembolso ou livre escolha.`},
    ]
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Duvidas Frequentes' fonte={22} style={{justifyContent:'center',background:'var(--fundo)'}} />
                {duvidas.map((duv,i)=><Duv onClick={()=>{
                        const nova=[]
                        for(let k=0;k<abertas.length;k++){
                            const valor=abertas[k]
                            nova.push(k==i?!valor:valor)
                        }
                        console.log(nova)
                        setAbertas(nova)
                    }}>
                    <Holder>
                    <h2>{duv.perg}</h2>
                    <Seta >
                    {abertas[i]?<SlArrowUp/>:<SlArrowDown/>}
                    </Seta>
                    </Holder>
                    {abertas[i]?<h3>{duv.resp}</h3>:<></>}
                </Duv>)}
            </Conteudo>
        </Servicos>
    )
}
const Holder=styled.div`
width:100%;
`
const Seta=styled.div`
width:40px;height:40px;
justify-content:center;
align-items:center;
font-size:22px;
`
const Duv=styled.div`
cursor:pointer;
flex-direction:column;
border-radius:10px;
background:#c9b59b;padding:0 10px 0 10px;
align-items:center;
width:90%;max-width:700px;
margin-bottom:12px;
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
font-weight:600;
font-size:18px;
width:100%;
}
h3{

font-size:16px;margin:10px 0 10px 0;
font-weight:500;
width:100%;
}

img{width:300px;margin:40px 0 20px 0}
 @media(max-width:850px){h1{top:0}}
`