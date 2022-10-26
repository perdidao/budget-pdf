import { today, daysToExpire } from "./helpers/content-helpers";

// *** Settings fields
// Logo
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

// Logo link
const $logoLink = document.getElementById('logoLink')

const persistentLogoLink = localStorage.getItem('llnk')
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
  localStorage.setItem('llnk', $logoLink.value)
})

// Footer text
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

// Client name
const $clientName = document.getElementById('clientName')
const $contentClientName = document.getElementById('contentClientName')
$clientName.addEventListener('keyup', () => {
  $contentClientName.textContent = $clientName.value
})

// Days for expiration
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


// *** Add service
const $addServiceAction = document.getElementById('addServiceAction')

$addServiceAction.addEventListener('click', () => {
  const newServiceDescription = document.getElementById('addServiceDescription').value
  const newServiceValue = document.getElementById('addServiceValue').value
  const $servicesContent = document.getElementById('servicesContent')
  const newServiceEl = document.createElement('div')
  const newServiceDescEl = document.createElement('pre')
  const newServicePriceEl = document.createElement('p')

  newServiceDescEl.textContent = newServiceDescription
  newServiceDescEl.classList.add('service__description')
  newServiceEl.appendChild(newServiceDescEl)
  
  newServicePriceEl.textContent = newServiceValue
  newServicePriceEl.classList.add('service__price')
  newServiceEl.appendChild(newServicePriceEl)
  
  newServiceEl.classList.add('service')
  $servicesContent.appendChild(newServiceEl)

  document.getElementById('addServiceDescription').value = ''
  document.getElementById('addServiceValue').value = ''
})

// *** Actions
const $button = document.getElementById('create')
$button.addEventListener('click', () => window.print())
