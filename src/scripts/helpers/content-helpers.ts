Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export const slugify = (name) => {
  name = name.replace(' ', '_').replace(/[^\w\s]/gi, '').toLowerCase()

  return name
}

export const today = () => {
  const date = new Date()
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) {
    month = `0${month}`
  }

  if (day < 10) {
    day = `0${day}`
  }
  
  return `${day}/${month}/${year}`
}

export const daysToExpire = (days) => {
  console.log(days)
  const date = new Date().addDays(days)

  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) {
    month = `0${month}`
  }

  if (day < 10) {
    day = `0${day}`
  }
  
  return `${day}/${month}/${year}`
}
