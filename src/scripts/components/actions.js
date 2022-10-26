export const actionsComponent = () => {
  const $printBudget = document.getElementById('printBudget')
  $printBudget.addEventListener('click', () => window.print())

  const $eraseLocalData = document.getElementById('eraseLocalData')
  $eraseLocalData.addEventListener('click', () => {
    const localDataKeys = ['ftxt', 'lsrc', 'edt']
    localDataKeys.forEach(key => localStorage.removeItem(key))
    window.location.href = '/'
  })
}
