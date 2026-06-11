// 📊 ANIMAÇÃO DOS NÚMEROS
function animarNumero(id, final, tempo) {
    const el = document.getElementById(id);
    let atual = 0;

    const intervalo = setInterval(() => {
        atual++;
        el.textContent = atual;

        if (atual >= final) {
            clearInterval(intervalo);
        }
    }, tempo);
}

window.addEventListener("load", () => {
    animarNumero("num1", 1200, 2);
    animarNumero("num2", 350, 5);
    animarNumero("num3", 95, 15);
});

// 🎮 QUIZ
function responder(botao, correta) {

    if (botao.disabled) return;

    if (correta) {
        botao.style.background = "#4caf50";
        botao.style.color = "white";
        alert("✅ Correto!");
    } else {
        botao.style.background = "#f44336";
        botao.style.color = "white";
        alert("❌ Errado!");
    }

    botao.disabled = true;
}