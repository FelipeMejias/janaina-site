import styled from "styled-components"

export default function Titulo({noGrude,nome,style,fonte}){
    return(
        <Holder n={noGrude} style={style}>
        <P fonte={fonte||26}><span>{nome}</span></P>
        </Holder>
    )
}
const Holder=styled.div`
@media(max-width:850px){
padding-right:10px;
}
padding-right:5px;

height:70px;flex-direction:column;
align-items:center;justify-content:center;
z-index:4;width:100%;
${p=>p.n?'':`position:sticky;top:0px;`}

`
const P=styled.p`
font-family: "Bricolage Grotesque", sans-serif;
font-size:${p=>p.fonte}px;font-weight:600;
margin:0;text-align:center;
`