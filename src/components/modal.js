import { optionsObject, enableValidation, clearValidation } from "./validation.js";

export function handleEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
  const form = popup.querySelector('.popup__form');
  if (!popup.classList.contains(".popup_type_image")) {
    // removeErrors(popup);
    clearValidation(form, optionsObject, popup);
  }
}

function removeErrors(popup) {
  const btn = popup.querySelector(".popup__button");
  if (btn !== null) {
    btn.disabled = true;
    btn.classList.add("btn__submit_inactive");
  }
  const remainsErrors = popup.querySelectorAll(".form_name__input-error");

  remainsErrors.forEach((element) => {
    element.textContent = "";
  });
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

export function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}
