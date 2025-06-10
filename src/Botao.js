import styled from "styled-components"

export default function Botao({handle,texto,fundo,fundoHover,style}){
    return(
        <But onClick={handle} fundo={fundo} fundoHover={fundoHover} style={style}>
            {texto}
        </But>
    )
}
const But=styled.button`
background:${p=>p.fundo};color:white;
width:90%;height:50px;
border-radius:10px;
border:0;font-size:17px;font-weight:500;
cursor:pointer;
max-width:400px;
&:hover{
background:${p=>p.fundoHover}}
`