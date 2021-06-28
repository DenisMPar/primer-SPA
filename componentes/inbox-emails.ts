export function inboxEmailsHandler(mail){
    const div = document.createElement("div")
    div.className = "main__cont-section-inbox"
   const template = document.querySelector("#template__emails")
   const clone = template.content.cloneNode(true)
   const titleEl = clone.querySelector(".emails__title")
   titleEl.textContent = "Recibido"
   const emailContentEl = clone.querySelector(".emails__text-content")
   const pathSeparado = mail.split("/")
   const email = pathSeparado[2]
   emailContentEl.textContent = "soy el contenido del " + email
   div.appendChild(clone)
   const buttonInboxEl = document.querySelector(".menu__button-inbox");
   const buttonSentEl = document.querySelector(".menu__button-sent");
   buttonInboxEl.style.background = "grey"
   buttonSentEl.style.background = "#393939"
return div
}