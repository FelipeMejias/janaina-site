import styled from "styled-components"
import Titulo from "./Titulo"
import sala1 from './imgs/consultorio1.jpg'
import sala2 from './imgs/consultorio2.jpg'
export function Consultorios(){
    return(
        <Servicos id="p4">
            <Conteudo>
            <Titulo nome='Consultório'  style={{background:'var(--fundo'}} />
            <h2>Atendo presencialmente em um consultório localizado em <span>Botafogo</span>, no Rio de Janeiro.
            Um espaço moderno e acolhedor, com vista privilegiada e fácil acesso, pensado para proporcionar bem-estar e conforto em cada atendimento.</h2>
            <section>
                <Sala>
                    <img src={sala1} />
                    <img src={sala2} />
                </Sala>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2274185040246!2d-43.18327508970663!3d-22.941850239037308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f8c92c676c3%3A0xc365c4c40a8892d6!2sPraia%20de%20Botafogo%2C%20210%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022250-145!5e0!3m2!1spt-BR!2sbr!4v1746196291762!5m2!1spt-BR!2sbr" 
                    width="100%" height="200px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            </Conteudo>
        </Servicos>
    )
}

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

