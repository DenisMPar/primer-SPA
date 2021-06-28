export function handlerSent(){
  const div = document.createElement("div")
  const template = document.querySelector("#template__main")
  const clone = template.content.cloneNode(true)
  const title = clone.querySelector(".main__title")
  title.textContent = "Sent"
  const emailLinkEl = clone.querySelectorAll(".emails__link")
  var contador = 1
  for (const item of emailLinkEl) {
      item.href = "/sent/email" + contador
      contador ++;
  }
  div.appendChild(clone)
  div.className = "main__cont-section-sent"
  const buttonInboxEl = document.querySelector(".menu__button-inbox");
  const buttonSentEl = document.querySelector(".menu__button-sent");
  buttonInboxEl.style.background = "#393939"
  buttonSentEl.style.background = "grey"
  return div
  }