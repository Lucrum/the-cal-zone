function buildIndex(contentDiv) {
  // claims
  let headDiv = document.createElement('div')
  let headTitle = document.createElement('h1')
  headTitle.textContent = "WELCOME TO THE CAL-ZONE"
  headDiv.appendChild(headTitle)
  
  let claims = [
    "WE HAVE THE BEST CALZONES BAR NONE",
    "DON'T BELIEVE US? YOU'LL HAVE TO TRY IT FOR YOURSELF",
    "WARNING: OUR CALZONES ARE NOT FOR THE FAINT OF HEART!!!",
    "YES WE SERVE OTHER FOODS BUT I'M GOING ALL IN ON THIS BAD PUN!!",
  ]
  headDiv.append(...generateParagraphs(claims))
  contentDiv.appendChild(headDiv)

  // hours
  let hoursDiv = document.createElement('div')
  let hoursTitle = document.createElement('h2')
  hoursTitle.textContent = "Hours"
  hoursDiv.appendChild(hoursTitle)

  let hours = [
    "Weekdays: 9AM — 10PM",
    "Saturday: 9AM — 11PM",
    "Sunday: 9AM — 11PM",
  ]

  hoursDiv.append(...generateParagraphs(hours))

  contentDiv.appendChild(hoursDiv)

  // location
  let locationDiv = document.createElement('div')
  let locationTitle = document.createElement('h2')
  let location = document.createElement('p')

  locationTitle.textContent = "Location"
  location.textContent = "57 Castle Point, Hoboken, New Jersey"
  locationDiv.append(locationTitle, location)

  contentDiv.appendChild(locationDiv)
}

function generateParagraphs(texts) {
  let ps = []

  for (const text of texts) {
    let p = document.createElement('p')
    p.textContent = text
    ps.push(p)
  }

  console.log(ps)
  return ps
}

export default buildIndex