const header = document.querySelector('header')

// Função para verificar se o cabeçalho deve ser oculto
function toggleHeader() {
  if (window.scrollY > 0) {
    header.classList.add('hide')
  } else {
    header.classList.remove('hide')
  }
}

window.addEventListener('scroll', toggleHeader)

const footer = document.querySelector('footer')

// Verifica a posição do scroll da página quando a página é rolada
window.addEventListener('scroll', () => {
  // Altura total da página
  const pageHeight = document.documentElement.scrollHeight
  // Altura da janela do navegador
  const windowHeight = window.innerHeight
  // Posição atual do scroll da página
  const scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0)

  if (pageHeight - windowHeight - scrollPosition <= 0) {
    footer.classList.add('visible')
  } else {
    footer.classList.remove('visible')
  }
})

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('footer').classList.remove('hide')
  } else {
    document.querySelector('footer').classList.add('hide')
  }
  prevScrollpos = currentScrollPos
}
