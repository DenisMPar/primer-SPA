import {handlerInbox}  from "../componentes/inbox"
import {handlerSent} from "../componentes/sent"
import {inboxEmailsHandler}from "../componentes/inbox-emails"
import {sentEmailsHandler} from "../componentes/sent-emails"

export function handleRoute(route) {
  const routes = [
    {
      path:/\/inbox/,
      handler: ()=> handlerInbox()
    },
    {
      path:/\/sent/,
      handler: ()=> handlerSent()
    },
    {
      path:/\/sent\/email./,
      handler: ()=> sentEmailsHandler(route)
    },
    {
      path:/\/inbox\/email./,
      handler: ()=> inboxEmailsHandler(route)
    }
  ];
 for (const r of routes) {
   
   if(r.path.test(route)){
     const el = r.handler();
     const cont = document.querySelector(".content__container")
    if(cont.firstChild){
      cont.firstChild.remove()
    }
    cont.appendChild(el)  
  }
}
  function links(){
    const emails = document.querySelectorAll(".emails__link")
    for (const item of emails) {
      item.addEventListener("click", (e)=>{
       e.preventDefault()
       const route = item.getAttribute("href")
       goTo(route)
      })
    }
  }
 links();
 
}
export function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }