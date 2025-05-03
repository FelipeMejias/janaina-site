import styled from "styled-components"
import { FaWhatsapp } from 'react-icons/fa';
export default function BotaoWpp({handle}){

    return(
        <Bot>
            <p>Agende sua consulta</p>
            <FaWhatsapp style={{ color: 'var(--fundo)', fontSize: '48px' }} />
            
        </Bot>
    )
}
const Bot=styled.div`
justify-content:center;align-items:center;
cursor:pointer;
position:fixed;
bottom:10px;right:20px;
height:70px;width:70px;
background:#925029;border-radius:50%;
color:var(--fundo);z-index:15;
p{display:none;width:210px;}
&:hover{width:280px;
border-radius:35px;
background:#925029;
p{display:flex;justify-content:center;}
}
`