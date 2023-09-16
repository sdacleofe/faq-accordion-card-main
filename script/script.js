const accordionItems = document.querySelectorAll('li')
const icon = document.querySelector('img')

accordionItems.forEach((item) => {
  const heading = item.querySelector('.accordion-header')

  heading.addEventListener('click', () => {
    item.classList.toggle('active')

    accordionItems.forEach((inactiveItem) => {
      if (inactiveItem !== item) {
        inactiveItem.classList.remove('active')
      }
    })
  })
})
