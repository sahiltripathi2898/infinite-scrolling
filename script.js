const container = document.getElementById('container')

function loadCards(num = 50) {
  let i=0
  while(i<num) {
    // create a card
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerText = `I'm a card !`
    i++
    container.append(card)
  }
}

loadCards()

window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    loadCards()
  }
})