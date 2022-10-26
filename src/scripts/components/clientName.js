export const clientNameComponent = () => {
  const $clientName = document.getElementById('clientName')
  const $contentClientName = document.getElementById('contentClientName')
  $clientName.addEventListener('keyup', () => {
    $contentClientName.textContent = $clientName.value
  })
}
