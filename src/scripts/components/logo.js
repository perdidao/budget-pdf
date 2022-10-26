export const logoComponent = () => {
  const $logo = document.getElementById('logo')
  const $logoComponent = document.getElementById('logoComponent')

  $logo.addEventListener('change', () => {
    const file = $logo.files[0]
    
    if (file) {
      const filePath = URL.createObjectURL(file)
      const fileEl = document.createElement('img')
      fileEl.classList.add('header__logo')
      fileEl.setAttribute('src', filePath)

      $logoComponent.replaceChildren(fileEl)
    }
  })

  const $logoLink = document.getElementById('logoLink')

  const persistentLogoLink = localStorage.getItem('lsrc')
  if (persistentLogoLink) {
    const fileEl = document.createElement('img')
    fileEl.classList.add('header__logo')
    fileEl.setAttribute('src', persistentLogoLink)

    $logoComponent.replaceChildren(fileEl)
    $logoLink.value = persistentLogoLink
  }

  $logoLink.addEventListener('change', () => {
    const fileEl = document.createElement('img')
    fileEl.classList.add('header__logo')
    fileEl.setAttribute('src', $logoLink.value)

    $logoComponent.replaceChildren(fileEl)
    localStorage.setItem('lsrc', $logoLink.value)
  })
}
