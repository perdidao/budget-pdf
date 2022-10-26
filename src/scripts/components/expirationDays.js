import { today, daysToExpire } from "../helpers/content-helpers"

export const expirationDaysComponent = () => {
  const $today = document.getElementById('today')
  const $daysToExpire = document.getElementById('daysToExpire')
  const $expiration = document.getElementById('expiration')
  $today.textContent = today()

  const persistentDaysForExpiration = localStorage.getItem('edt')
  if (persistentDaysForExpiration) {
    $expiration.textContent = `Orçamento válido até ${daysToExpire(parseInt(persistentDaysForExpiration))}`
    $daysToExpire.value = persistentDaysForExpiration
  }
  $daysToExpire.addEventListener('keyup', () => {
    const totalDaysToExpire = $daysToExpire.value
    localStorage.setItem('edt', totalDaysToExpire)
    if (totalDaysToExpire !== '') {
      $expiration.textContent = `Orçamento válido até ${daysToExpire(parseInt(totalDaysToExpire))}`
    }
  })
}
