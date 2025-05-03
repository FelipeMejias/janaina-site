import styled from "styled-components"

export default function Titulo({nome,style}){
    return(
        <Holder style={style}>
        <P><span>{nome}</span></P>
        </Holder>
    )
}
const Holder=styled.div`
height:70px;
align-items:center;
z-index:4;width:100%;
position:sticky;
top:80px;
@media(max-width:850px){
top:0px;
}
`
const P=styled.p`
font-size:26px;font-weight:600;
margin:0
`