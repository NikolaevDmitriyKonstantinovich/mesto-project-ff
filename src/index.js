// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//find template and place for cards

import { initialCards } from "./components/cards.js";
import "./pages/index.css";
import * as data from "./components/modal.js";
import { createCard, deleteCard, cardLike } from "./components/card.js";
import "./components/validation.js";
import * as api from "./components/api.js";

const cardsContainer = document.querySelector(".places__list");

// searchs

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");

export const popupNewCard = document.querySelector(".popup_type_new-card");
const newCardCloseBtn = popupNewCard.querySelector(".popup__close");

export const popupEdit = document.querySelector(".popup_type_edit");
const editCloseBtn = popupEdit.querySelector(".popup__close");
export const popupImage = document.querySelector(".popup_type_image");
const imageCloseBtn = popupImage.querySelector(".popup__close");

const profileInf = document.querySelector(".profile__info");
const profileTitle = profileInf.querySelector(".profile__title");
const profileDesc = profileInf.querySelector(".profile__description");

//form elements
const popupFormEdt = document.querySelector(".popup_type_edit .popup__form");
const editFormElemInpt = popupFormEdt.querySelector(".popup__input_type_name");
const formInptDesc = popupFormEdt.querySelector(
  ".popup__input_type_description"
);

//add form
const popupCardContent = popupNewCard.querySelector(".popup__content");
export const popupNewCardForm = popupCardContent.querySelector(".popup__form");

const addCardName = document.querySelector(".popup__input_type_card-name");
const addCardUrl = document.querySelector(".popup__input_type_url");

// api


const profileImg = document.querySelector(".profile__image");


// new popup avatar


const popupAvatar = document.querySelector('.popup_type_new-avatar');
const avatarImg = document.querySelector('.profile__image');

const closePopupAvatar = popupAvatar.querySelector('.popup__close');

const popupFormAvatar = document.querySelector(".popup_type_new-avatar .popup__form");
const popupFormUrlAvatar = popupFormAvatar.querySelector('.popup__input_type_url');

//implement function add

//create function for delete card


//add card

function handleAddSubmit(evt) {
  evt.preventDefault();
  cardsContainer.prepend(
    createCard(
      document.querySelector(".popup__input_type_card-name").value,
      document.querySelector(".popup__input_type_url").value,
      '0',
      api.deleteCard,
      api.cardLike,
      openImage
    )
  );
  api.addNewCardToServer(document.querySelector(".popup__input_type_card-name").value, document.querySelector(".popup__input_type_url").value); // new
  data.closePopup(popupNewCard);
}

popupNewCardForm.addEventListener("submit", handleAddSubmit);

//like card

function openImage(name, link) {
  popupImage.querySelector(".popup__image").src = link;
  popupImage.querySelector(".popup__image").alt = "Попап карточки";
  popupImage.querySelector(".popup__caption").textContent = name;
  data.openPopup(popupImage);
}

document.addEventListener("click", data.closePopupByOverlay);

//........

addButton.addEventListener("click", function () {
  data.openPopup(popupNewCard);
});

newCardCloseBtn.addEventListener("click", function () {
  data.closePopup(popupNewCard);
});

editButton.addEventListener("click", function () {
  fillEditForm();
  data.openPopup(popupEdit);
});

editCloseBtn.addEventListener("click", function () {
  data.closePopup(popupEdit);
});

imageCloseBtn.addEventListener("click", function () {
  data.closePopup(popupImage);
});

//new listener avatar

avatarImg.addEventListener('click', function() {
    data.openPopup(popupAvatar);
});

closePopupAvatar.addEventListener("click", function () {
    data.closePopup(popupAvatar);
  });



//forms

function fillEditForm() {
  editFormElemInpt.value = profileTitle.textContent;
  formInptDesc.value = profileDesc.textContent;
}

//fun for change

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = editFormElemInpt.value;
  profileDesc.textContent = formInptDesc.value;
  api.getProfileIntel(editFormElemInpt.value, formInptDesc.value);  // отправка patch на север
  data.closePopup(popupEdit);
}

popupFormEdt.addEventListener("submit", handleProfileFormSubmit);

//add listener to avatar form

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    avatarImg.style.backgroundImage = `url(${popupFormUrlAvatar.value})`;
    api.newAvatar(popupFormUrlAvatar.value);
    data.closePopup(popupAvatar);
}

popupFormAvatar.addEventListener('submit', handleAvatarFormSubmit);

function animatedPopup() {
  popupEdit.classList.add("popup_is-animated");
  popupNewCard.classList.add("popup_is-animated");
  popupImage.classList.add("popup_is-animated");
}

animatedPopup();

//api methods


// load user info




Promise.all([api.getCardInfo(), api.getUserInfo()])
.then(([resp1, resp2]) => {
    resp1.forEach((card) => {
        cardsContainer.append(
            createCard(card.name, card.link, card.likes.length, api.deleteCard, api.cardLike, openImage, card.owner['_id'], resp2['_id'], card['_id'], Array.from(card.likes))
          );
          console.log(card.likes.length)
    })
    console.log(resp1);

    profileTitle.textContent = resp2.name;
    profileDesc.textContent = resp2.about;
    avatarImg.style.backgroundImage = `url(${resp2.avatar})`;
    console.log(resp2);

});
