function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avaatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e camisa cinza, sem barba e fundo azul com roxo"
    )
  } else {
    //se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avaatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
