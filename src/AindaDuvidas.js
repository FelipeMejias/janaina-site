import styled from "styled-components"
import Titulo from "./Titulo"
import { FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
export function AindaDuvidas(){
    const [copiado,setCopiado]=useState(false)

    function copiarTexto(){
            navigator.clipboard.writeText('janainafaro.neuropsi@gmail.com').then(() => {setCopiado(true);setTimeout(() => setCopiado(false), 2000)}).catch(err => console.error('Erro ao copiar o texto: ', err));
            };
    return(
        <Consultorios style={{marginBottom:'50px'}}>
            <Conteudo>
            <Titulo nome='Ainda com dúvidas?'  style={{background:'var(--fundo)'}} />
            <h2>Se você quer entender melhor como funciona a Avaliação Neuropsicológica ou se ela faz sentido para o seu momento, <span>me manda uma mensagem!</span> Será um prazer te ouvir! Aproveita para me acompanhar no Instagram também.</h2>
            <h2>Estou à disposição para te ajudar a seguir com mais clareza.</h2>
            <Insta style={{marginTop:'10px'}} href="https://www.instagram.com/janainafaro.neuropsi">
                <FaInstagram style={{ color: '#925029', fontSize: '24px' }} />
                <p>janainafaro.neuropsi</p>
            </Insta>
            <Insta onClick={copiarTexto}>
                <IoMailOutline style={{ color: '#925029', fontSize: '24px' }} />
                <p>janainafaro.neuropsi@gmail.com</p>
                {copiado?<aside>Email copiado!</aside>:<></>}
            </Insta>
            <h5>Entender o que se sente pode mudar a forma como você vive. <span>Vamos começar essa mudança agora?</span></h5>
            {/*<Marker ref={markerRef} />*/}
            </Conteudo>
        </Consultorios>
    )
}
const Insta=styled.a`
cursor:pointer;position:relative;
width:300px;background:;
display:flex;align-items:center;
 text-decoration: none;
  color: inherit;
  p{margin-left:10px;}
aside{border-radius:5px;color:var(--fundo);padding:3px;
position:absolute;top:45px;background:var(--detalhe)}
`
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Consultorios=styled.div`
background:var(--fundo);
flex-direction:column;

width:100%;align-items:center;
padding:0 30px 0 30px;
font-family: "Poppins", sans-serif;
color:var(--texto);

h2{font-size:18px;font-weight:400;margin:20px 0 0 0;span{font-weight:500;}}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
text-align: justify;}
h5{font-size:18px;font-weight:400;margin:20px 0 80px 0;span{font-weight:500;}}

strong{
font-weight:600;
}
section{
flex-direction:column;
display:flex;width:100%;
justify-content:space-between;
max-width:600px;
}
iframe{border:0;border-radius:10px;margin:0 0 40px 0}
@media(min-width:850px){
h5{margin:0 0 140px 0}
}
`