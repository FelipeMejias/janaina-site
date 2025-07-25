import styled from "styled-components"
import { useState } from "react";
import Titulo from "./Titulo";
import { GrSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";
export default function Duvidas(){
    const [abertas,setAbertas]=useState([false,false,false,false,false,false,false,])
    const duvidas=[
{perg:'Quanto tempo dura o processo de avaliação?',
resp:'A duração da Avaliação Neuropsicológica depende da complexidade do caso e da quantidade de instrumentos necessários para responder às perguntas centrais da demanda. De modo geral, o processo envolve uma sessão inicial de anamnese, cerca de quatro sessões presenciais de testagem e uma sessão final de devolutiva, na qual os resultados são discutidos e o laudo é entregue. O número de encontros pode variar conforme as particularidades do caso, sempre com foco na escuta qualificada, na profundidade da análise e na aplicabilidade prática das conclusões.'},

{perg:'Qual a diferença entre psicoterapia e avaliação neuropsicológica?',
resp:'A psicoterapia é um processo contínuo, com acompanhamento frequente e elaboração emocional mais aprofundada. Já a avaliação neuropsicológica tem início, meio e fim bem definidos e se caracteriza como uma investigação clínica pontual, com o objetivo de analisar profundamente como seu cérebro está funcionando e como isso impacta sua vida. Ao final, em uma sessão de devolutiva, você recebe um laudo com orientações práticas. São atuações diferentes, mas que podem se potencializar.'},

{perg:'Preciso de encaminhamento médico para realizar a avaliação?',
resp:'Não. Você pode buscar a avaliação por vontade própria, especialmente se estiver vivenciando dificuldades de atenção, memória, organização ou qualquer disfunção executiva que possa ser um alvo terapêutico. Encaminhamentos médicos são bem-vindos, mas não obrigatórios.'},

{perg:'Psicólogo pode dar diagnóstico?',
resp:'Sim! Psicólogos têm competência legal e técnica para realizar diagnósticos. No caso da avaliação, o trabalho é feito com base em testes padronizados, entrevistas e critérios clínicos, com o mesmo rigor utilizado por outros profissionais da saúde.'},

{perg:'A avaliação é indicada mesmo sem suspeita de diagnóstico?',
resp:'Sim. Muitas pessoas buscam esse processo para entender melhor suas dificuldades cotidianas ou aprofundar o autoconhecimento. A avaliação também é uma ferramenta de clareza e direcionamento.'},

{perg:'Quais são as formas de pagamento disponíveis?',
resp:'O pagamento pode ser feito via Pix ou por cartão de crédito, com parcelamento em até 4x sem juros. Os detalhes são alinhados diretamente no momento do agendamento.'},

{perg:'Aceita plano de saúde?',
resp:`Atualmente, o atendimento é realizado de forma particular. No entanto, posso emitir recibo para solicitação de reembolso junto ao seu plano de saúde, conforme as regras da operadora.
Fica a cargo do paciente verificar diretamente com o convênio se há reembolso disponível para avaliação neuropsicológica realizada por psicólogo.
`},
    ]
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Dúvidas Frequentes'style={{justifyContent:'center',background:'var(--fundo)'}} />
                {duvidas.map((duv,i)=>
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
                        <h2>{duv.perg}</h2>
                        <Seta >
                        {abertas[i]?<GrSubtract/>:<GrAdd/>}
                        </Seta>
                    </Duv>
                    <p>{abertas[i]?<h3>{duv.resp}</h3>:<></>}</p>
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