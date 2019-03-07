const showMenu = (toggleId, navId) => {
  const button = document.getElementById(toggleId),
        mainNav = document.getElementById(navId)

  if (button && mainNav) {
    button.addEventListener('click', () => {
      mainNav.classList.toggle('is-show')
    })
  }
}

showMenu('hamburguer-button', 'main-nav')