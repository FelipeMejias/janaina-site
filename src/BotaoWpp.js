import styled from "styled-components"
import { FaWhatsapp } from 'react-icons/fa';
export default function BotaoWpp({handle}){
const grande=true
    return(
        <Bot g={grande} onClick={handle}>
           
            <FaWhatsapp style={{ color: 'white', fontSize: '48px' }} />
            <p>Vamos conversar?</p>
            {grande?<></>:<h6>Mande uma mensagem</h6>}
        </Bot>
    )
}
const Bot=styled.div`
overflow:hidden;
white-space: nowrap;
justify-content:center;align-items:center;
cursor:pointer;
position:fixed;
bottom:${p=>p.g?20:40}px;right:${p=>p.g?'20px':'calc(50% - 140px)'};
height:70px;
width:${p=>p.g?70:280}px;
background:#984830;border-radius:35px;
color:white;z-index:15;
p{display:none;width:210px;font-weight:500;font-size:18px;justify-content:center;}
${p=>p.g?'&:hover{width:280px;p{display:flex;}}':''}
@media(min-width:850px){
right:${p=>p.g?'calc(50vw - 410px)':'calc(50vw - 140px)'};
}
h6{display:flex;width:210px;font-size:18px;justify-content:center;font-weight:500;}
 transition: all 0.2s ease; 
`
const Botao=styled.div`
justify-content:center;align-items:center;
cursor:pointer;
position:fixed;
bottom:10px;right:calc(50% - 150px);
height:70px;
width:300px;
background:#24cc63;border-radius:35px;
color:white;z-index:15;
p{display:none;width:210px;font-size:18px;}
&:hover{width:230px;
border-radius:35px;
background:#2cba60;
p{display:flex;justify-content:center;}
}
@media(min-width:850px){
right:calc(50vw - 360px);
}
`