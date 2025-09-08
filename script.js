function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/desktop.fds.png")
    img.setAttribute(
      "alt",
      "Foto de Bia Rodrigues sorrindo, usando óculos escuro e blusa branca, cabelo solto e fundo marrom com verde"
    )
  } else {
    //se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/desktop.trab.png")
    img.setAttribute(
      "alt",
      "Foto de Bia Rodrigues sorrindo, usando maquiagem e blusa vermelha com preto, cabelo solto e fundo branco"
    )
  }
}
