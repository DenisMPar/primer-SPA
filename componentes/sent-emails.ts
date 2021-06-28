export function sentEmailsHandler(mail){
    const div = document.createElement("div")
    div.className = "main__cont-section-sent"
   const template = document.querySelector("#template__emails")
   const clone = template.content.cloneNode(true)
   const titleEl = clone.querySelector(".emails__title")
   titleEl.textContent = "Enviado"
   const emailContentEl = clone.querySelector(".emails__text-content")
   const pathSeparado = mail.split("/")
   const email = pathSeparado[2]
   emailContentEl.textContent = "soy el contenido del " + email
   div.appendChild(clone)
   const buttonInboxEl = document.querySelector(".menu__button-inbox");
   const buttonSentEl = document.querySelector(".menu__button-sent");
   buttonInboxEl.style.background = "#393939"
   buttonSentEl.style.background = "grey"
return div
}