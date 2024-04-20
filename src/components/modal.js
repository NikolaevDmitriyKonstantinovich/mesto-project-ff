import { optionsObject, enableValidation, clearValidation } from "./validation.js";

export function handleEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
//   const form = popup.querySelector('.popup__form');
//   if (!popup.classList.contains(".popup_type_image")) {
//     clearValidation(form, optionsObject, popup);
//   }
  document.addEventListener("click", closePopupByOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
  document.removeEventListener("click", closePopupByOverlay);
}

export function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}
