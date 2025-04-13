import styled from "styled-components"

export default function Botao({texto,fundo,fundoHover,style}){
    return(
        <But fundo={fundo} fundoHover={fundoHover} style={style}>
            {texto}
        </But>
    )
}
const But=styled.button`
background:#${p=>p.fundo};color:white;
width:90%;height:50px;
border-radius:10px;
border:0;font-size:14px;font-weight:600;
cursor:pointer;

&:hover{
background:#${p=>p.fundoHover}}
`