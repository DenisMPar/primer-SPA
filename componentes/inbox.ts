export function handlerInbox(){
const div = document.createElement("div")
const template = document.querySelector("#template__main")
const clone = template.content.cloneNode(true)
const title = clone.querySelector(".main__title")
title.textContent = "Inbox"
const emailLinkEl = clone.querySelectorAll(".emails__link")
var contador = 1
for (const item of emailLinkEl) {
    item.href = "/inbox/email" + contador
    contador ++;
}
div.appendChild(clone)
div.className = "main__cont-section-inbox"
const buttonInboxEl = document.querySelector(".menu__button-inbox");
   const buttonSentEl = document.querySelector(".menu__button-sent");
   buttonInboxEl.style.background = "grey"
   buttonSentEl.style.background = "#393939"
return div
}