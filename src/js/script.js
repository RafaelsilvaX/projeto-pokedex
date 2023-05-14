const botaoAlterarTema = document.getElementById("butao_alterar_tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem_botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscroEstaAtivo = body.classList.contains("modo_escuro");

    body.classList.toggle("modo_escuro");

    if (modoEscroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "src/imagens/imagens/sun.png")

    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "src/imagens/imagens/moon.png")
        
    }
});