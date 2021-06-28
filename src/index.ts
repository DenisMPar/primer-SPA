import { handleRoute, goTo } from "./handler-route";

function main() {
  const buttonInboxEl = document.querySelector(".menu__button-inbox");
  const buttonSentEl = document.querySelector(".menu__button-sent");

  buttonInboxEl.addEventListener("click", () => {
    goTo("/inbox");
  });

  buttonSentEl.addEventListener("click", () => {
    goTo("/sent");
  });
  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
}
main();
