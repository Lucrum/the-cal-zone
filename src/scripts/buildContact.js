import generateParagraphs from "./sharedUtils"

function buildContact(contentDiv) {
  let title = document.createElement('h1')
  title.textContent = "CONTACT US"

  let contactDiv = document.createElement('div')
  contactDiv.classList.add('card')
  let contactInfo = [
    "Address: 57 Castle Point, Hoboken, New Jersey",
    "Email: notarealemail@gmail.com",
    "Phone Number: 333-333-4444"
  ]
  contactDiv.append(...generateParagraphs(contactInfo))

  contentDiv.replaceChildren(title, contactDiv)
}

export default buildContact