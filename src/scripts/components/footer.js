export const footerComponent = () => {
  const $footerContent = document.getElementById('footerContent')
  const $footerContentField = document.getElementById('footerContentField')

  const persistentFooterText = localStorage.getItem('ftxt')
  if (persistentFooterText) {
    $footerContent.textContent = persistentFooterText
    $footerContentField.value = persistentFooterText
  }

  $footerContentField.addEventListener('keyup', () => {
    $footerContent.textContent = $footerContentField.value
  })
  $footerContentField.addEventListener('change', () => {
    localStorage.setItem('ftxt', $footerContentField.value)
  })
}
