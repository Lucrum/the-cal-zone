import generateParagraphs from "./sharedUtils"

function buildIndex(contentDiv) {
  // header
  let headTitle = document.createElement('h1')
  headTitle.textContent = "WELCOME TO THE CALZONE"

  // claims
  let claimsDiv = document.createElement('div')
  let claims = [
    "WE HAVE THE BEST CALZONES BAR NONE",
    "DON'T BELIEVE US? YOU'LL HAVE TO TRY IT FOR YOURSELF",
    "WARNING: OUR CALZONES ARE NOT FOR THE FAINT OF HEART!!!",
    "YES WE SERVE OTHER FOODS BUT I'M GOING ALL IN ON THIS BAD PUN!!",
  ]
  claimsDiv.append(...generateParagraphs(claims))

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

  // location
  let locationDiv = document.createElement('div')
  let locationTitle = document.createElement('h2')
  let location = document.createElement('p')

  locationTitle.textContent = "Location"
  location.textContent = "57 Castle Point, Hoboken, New Jersey"
  locationDiv.append(locationTitle, location)

  contentDiv.replaceChildren(headTitle, claimsDiv, hoursDiv, locationDiv)
}

export default buildIndex