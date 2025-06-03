// ... (imports iguais aos seus)

export default function Nomear(){
    const [atual,setAtual]=useState(0)
    const cards=[ /* ...seu array de cards... */ ]

    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const touchEndX = useRef(null);
    const isHorizontalSwipe = useRef(false);

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
        touchStartY.current = e.targetTouches[0].clientY;
        isHorizontalSwipe.current = false;
    };

    const handleTouchMove = (e) => {
        const moveX = e.targetTouches[0].clientX - touchStartX.current;
        const moveY = e.targetTouches[0].clientY - touchStartY.current;

        if (!isHorizontalSwipe.current && Math.abs(moveX) > Math.abs(moveY)) {
            isHorizontalSwipe.current = true;
        }

        if (isHorizontalSwipe.current) {
            e.preventDefault(); // BLOQUEIA scroll vertical
        }

        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        const delta = touchStartX.current - touchEndX.current;
        const limite = 50;

        if (delta > limite && atual !== 4) {
            setAtual(atual + 1);
        } else if (delta < -limite && atual !== 0) {
            setAtual(atual - 1);
        }
    };

    return(
        <Servicos>
            <Conteudo>
                <Titulo nome='Nomear para Transformar' fonte={21} style={{background:'var(--fundo2)', justifyContent:'center'}} />
                <Carrossel
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {atual !== 0 ? (
                        <Seta onClick={() => setAtual(atual - 1)} style={{left:'-70px', fontSize:'36px', cursor:'pointer'}}>
                            <SlArrowLeft />
                        </Seta>
                    ) : <Seta />}
                    
                    <Card>
                        <img src={cards[atual].icone}/>
                        <h1>{cards[atual].titulo}</h1>
                        <p>{cards[atual].texto}</p>
                        {atual === 4 && <h6>Nomear para Transformar</h6>}
                    </Card>
                    
                    {atual !== 4 ? (
                        <Seta onClick={() => setAtual(atual + 1)} style={{right:'-70px', fontSize:'36px', cursor:'pointer'}}>
                            <SlArrowRight />
                        </Seta>
                    ) : <Seta />}
                </Carrossel>

                <Bolinhas>
                    {cards.map((c, i) => (
                        <Bolinha key={i} onClick={() => setAtual(i)} selec={i === atual} />
                    ))}
                </Bolinhas>
            </Conteudo>
        </Servicos>
    )
}
const Bolinha=styled.div`
width:10px;height:10px;border-radius:50%;margin:3px;
background:${p=>p.selec?'white':'#6b381b'};
`
const Bolinhas=styled.div`
align-items:center;justify-content:center;
margin-bottom:-10px;
`
const Card=styled.div`
img{height:80px;width:auto;margin:0;}
color:var(--fundo2);
 background: url('/marmore.png');
 background-size: cover;
  background-position: center;
height:300px;
padding:15px 5px 15px 5px;
flex-direction:column;
align-items:center;
width:calc(100% - 60px);
max-width:500px;
font-size:30px;
border-radius:15px;
p{margin:5px;font-size:16px;text-align:center;}
h1{margin:5px;font-size:19px;font-weight:600;text-align:center;
font-family: "Bricolage Grotesque", sans-serif;
}
h6{
font-family: "Qwitcher Grypen", cursive;
margin:20px 0 0 0;font-size:36px;
}
box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
@media(max-width:850px){
width:calc(100% - 0px);
}
`
const Seta=styled.section`
display:flex;
align-items:center;position:absolute;
width:150px;justify-content:center;height:100%;
@media(max-width:850px){
display:none
}
`
const Carrossel = styled.div`
  background:;
  align-items:center;
  position:relative;
  justify-content:space-evenly;
  width:100%;
  height:320px;
  margin:10px 0;
  touch-action: none;
`;

const Conteudo=styled.div`
flex-direction:column;
align-items:center;
width:100%;max-width:700px;
`
const Servicos=styled.div`
background:var(--fundo2);
flex-direction:column;
width:100%;align-items:center;
padding:0 30px 0 30px;
font-family: "Poppins", sans-serif;
color:var(--fundo);min-height:480px;
h2{font-size:24px;font-weight:600;margin:15px 0 30px 0;}
h3{width:80%;font-size:18px;line-height:24px;font-weight:400;margin:0;}
}
 @media(max-width:850px){h1{top:0}}
`