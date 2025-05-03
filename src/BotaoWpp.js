import styled from "styled-components"
import { FaWhatsapp } from 'react-icons/fa';
export default function BotaoWpp({handle}){

    return(
        <Bot onClick={handle}>
            <p>Agende sua consulta</p>
            <FaWhatsapp style={{ color: 'white', fontSize: '48px' }} />
            
        </Bot>
    )
}
const Bot=styled.div`
justify-content:center;align-items:center;
cursor:pointer;
position:fixed;
bottom:10px;right:20px;
height:70px;width:70px;
background:#24cc63;border-radius:50%;
color:white;z-index:15;
p{display:none;width:210px;font-size:18px;}
&:hover{width:280px;
border-radius:35px;
background:#2cba60;
p{display:flex;justify-content:center;}
}
@media(min-width:850px){
right:calc(50vw - 410px);
}
`