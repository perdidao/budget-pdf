export const servicesComponent = () => {
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
}
