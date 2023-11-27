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

export default generateParagraphs