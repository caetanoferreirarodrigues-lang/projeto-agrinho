function verificarUmidade() {

    let umidade = Math.floor(Math.random() * 100);

    let mensagem;

    if (umidade < 40) {
        mensagem = `Umidade: ${umidade}% 🌵 Solo seco. Irrigação necessária.`;
    } else if (umidade < 70) {
        mensagem = `Umidade: ${umidade}% 🌱 Solo em boas condições.`;
    } else {
        mensagem = `Umidade: ${umidade}% 💧 Solo muito úmido. Não irrigar.`;
    }

    document.getElementById("umidade").innerHTML = mensagem;
}