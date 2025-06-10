export function mandarWpp(){
        const telefone = 5521999242603;
        let texto=""
        const encodedText = encodeURIComponent(texto);
        const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;
        window.open(urlWhatsapp);
    }