import styled from "styled-components"
import Titulo from "./Titulo"
export function E(){
    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='A avaliação neuropsicológica é:'  style={{background:'var(--fundo'}} />
                <Carrossel>
                    <Card>
                        <h3></h3>
                        <p></p>
                    </Card>
                </Carrossel>
            </Conteudo>
        </Servicos>
    )
}
const Card=styled.div`
background:rgb(255,255,255,0.5);
flex-direction:column;
align-items:center;
border-radius:15px;
width:30%;
color:var(--texto);
max-width:180px;
font-size:30px;
height:100%;
p{margin:5px;font-size:14px;text-align:center;}
h3{margin:5px;font-size:17px;font-weight:500;text-align:center;}
`

const Carrossel=styled.div`
align-items:center;position:relative;
justify-content:space-evenly;
width:100%;margin:20px 0 40px 0;
`
const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Sala=styled.div`
justify-content:space-between;
width:100%;
img{width:calc(50% - 10px);};
`
const Servicos=styled.div`
background:var(--fundo);
flex-direction:column;

width:100%;align-items:center;
padding:0 30px 0 30px;
font-family: "Poppins", sans-serif;
color:var(--texto);

h2{font-size:18px;font-weight:400;margin:20px 0 0 0;span{font-weight:500;}}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
text-align: justify;}

strong{
font-weight:600;
}

iframe{border:0;border-radius:10px;margin:0 0 40px 0}
@media(min-width:850px){

`
