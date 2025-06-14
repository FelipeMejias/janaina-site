import styled from "styled-components"
import Titulo from "./Titulo"

export function Intro(){
    return(
        <Servicos id="p1">
            <Conteudo>
            {/*<h1>Seja bem-vindo(a)!</h1>*/}
            <Titulo nome='Sou Psicóloga Pós-Graduanda em Avaliação Neuropsicológica' noGrude={true} fonte={20}  style={{justifyContent:'center',background:'var(--fundo'}} />
            <h4>Acredito que <span>reconhecer e nomear</span> o que sentimos nos ajuda a compreender melhor nossos comportamentos e fazer <span>escolhas mais conscientes</span>.</h4>
            <h4>Meu trabalho vai além de testes e diagnósticos — é um processo de escuta, análise e compreensão profunda do seu funcionamento, para <span>transformar esse entendimento em direcionamento</span>.</h4>
            <h4>A partir dessa visão, nasceu o <span>Nomear para Transformar!</span></h4> 
            <h4 style={{marginBottom:'25px'}}>Explore os cards abaixo e conheça essa proposta:</h4>
            {/*<h1>Vamos conversar?</h1>*/}
            {/*<Botao handle={mandarWpp} texto={'AGENDE SUA CONSULTA!'} fundo={'var(--detalhe)'} fundoHover={'var(--claro)'} style={{margin:'100px 0 40px 0'}} />*/}
            
            {/*<img src={foto} />*/}
            </Conteudo>
        </Servicos>
    )
}

const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:950px;
padding:0 30px 0 30px;
`
const Servicos=styled.div`
@media(max-width:850px){
margin-left:20px;padding-right:10px;
}
margin-left:10px;padding-right:5px;

background:var(--fundo);
flex-direction:column;
width:100%;align-items:center;

color:var(--texto);
max-width:950px;
font-family: "Poppins", sans-serif;


h3{max-width: 100%;width:100%;font-size:20px;font-weight:600;margin:0 0 10px 0;font-family: "Bricolage Grotesque", sans-serif;}
h4{max-width: 100%;width:100%;font-size:18px;line-height:26px;font-weight:300;margin:10px 0 10px 0;
span{font-weight:500;}
}
  img{width:300px;}
@media(min-width:850px){
h3{margin-top:80px;}
}
`