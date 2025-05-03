import styled from "styled-components"

export default function Nomear(){
    return(
        <Servicos>
            <Conteudo>
            <h1><span>Nomear para Transformar</span></h1>
            <h2><span>Avaliação Terapêutica</span></h2>
            <h3>A Avaliação Neuropsicológica vai além do diagnóstico – é uma oportunidade de autoconhecimento e crescimento. Inspirada na Avaliação Terapêutica, desenvolvida em Houston, Texas, minha abordagem ajuda a compreender seu perfil cognitivo e emocional de forma profunda, com ou sem um psicodiagnóstico.
                Trabalho com adultos e idosos.</h3>
            
            
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
h1{display:flex;align-items:center;justify-content:center;
z-index:4;width:100%;text-align:center;height:80px;background:var(--fundo2);
position:sticky;top:0;font-size:32px;font-weight:600;margin:0}
h2{font-size:24px;font-weight:600;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}

  img{width:300px;margin:40px 0 20px 0}
`