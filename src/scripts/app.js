import { today, daysToExpire } from "./helpers/content-helpers";

// *** Settings fields
const $clientName = document.getElementById('clientName')
const $contentClientName = document.getElementById('contentClientName')
const clientName = $clientName.value

$clientName.addEventListener('keyup', () => {
  $contentClientName.textContent = $clientName.value
})

const $daysToExpire = document.getElementById('daysToExpire')


// *** Content
const $today = document.getElementById('today')
$today.textContent = today()

$daysToExpire.addEventListener('keyup', () => {
  const totalDaysToExpire = $daysToExpire.value
  const $expiration = document.getElementById('expiration')
  if (totalDaysToExpire !== '') {
    $expiration.textContent = `Orçamento válido até ${daysToExpire(parseInt(totalDaysToExpire))}`
  }
})

// *** Actions
const $button = document.getElementById('create')
$button.addEventListener('click', () => window.print())

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
