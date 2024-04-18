// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//find template and place for cards

import { initialCards } from "./components/cards.js";
import "./pages/index.css";
import {
  openPopup,
  closePopup,
  closePopupByOverlay,
} from "./components/modal.js";
import { createCard, deleteCard, cardLike } from "./components/card.js";
import { optionsObject, enableValidation } from "./components/validation.js";
import * as api from "./components/api.js";

const cardsContainer = document.querySelector(".places__list");

// searchs

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");

const popupNewCard = document.querySelector(".popup_type_new-card");
const newCardCloseBtn = popupNewCard.querySelector(".popup__close");

const popupEdit = document.querySelector(".popup_type_edit");
const editCloseBtn = popupEdit.querySelector(".popup__close");
const popupImage = document.querySelector(".popup_type_image");
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
const popupNewCardForm = popupCardContent.querySelector(".popup__form");

const addCardName = document.querySelector(".popup__input_type_card-name");
const addCardUrl = document.querySelector(".popup__input_type_url");

// api

// new popup avatar

const popupAvatar = document.querySelector(".popup_type_new-avatar");
const avatarImg = document.querySelector(".profile__image");

const closePopupAvatar = popupAvatar.querySelector(".popup__close");

const popupFormAvatar = document.querySelector(
  ".popup_type_new-avatar .popup__form"
);
const popupFormUrlAvatar = popupFormAvatar.querySelector(
  ".popup__input_type_url"
);
const newPlaceSbmtBtn = document.querySelector(
  ".popup_type_new-card .popup__form .popup__button"
);
const profileSbmtBtn = document.querySelector(
  ".popup_type_edit .popup__form .popup__button"
);

const logoSbmtBtn = document.querySelector(
  ".popup_type_new-avatar .popup__form .popup__button"
);

//new select

const imageOfPopup = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

//implement function add

//create function for delete card

//add card
let userInfoId;

function handleAddSubmit(evt) {
  newPlaceSbmtBtn.textContent = "Сохранение...";
  evt.preventDefault();

  api
    .addNewCardToServer(addCardName.value, addCardUrl.value)
    .then((res) => {
      const card = createCard(
        api.deleteCard,
        api.cardLike,
        openImage,
        res?.owner?._id,
        res
      );
      cardsContainer.prepend(card);
      //   console.log(userInfoId);
      closePopup(popupNewCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(
      () => {
        newPlaceSbmtBtn.textContent = "Сохранить";
      }
      //   setTimeout(() => (newPlaceSbmtBtn.textContent = "Сохранить"), 2000)
    );
}

popupNewCardForm.addEventListener("submit", handleAddSubmit);

//like card

function openImage(name, link) {
  imageOfPopup.src = link;
  imageOfPopup.alt = "Попап карточки";
  popupCaption.textContent = name;
  openPopup(popupImage);
}

// document.addEventListener("click", closePopupByOverlay);

//........

addButton.addEventListener("click", function () {
  addCardName.value = "";
  addCardUrl.value = "";
  openPopup(popupNewCard);
  document.addEventListener("click", closePopupByOverlay);
});

newCardCloseBtn.addEventListener("click", function () {
  closePopup(popupNewCard);
  document.removeEventListener("click", closePopupByOverlay);
});

editButton.addEventListener("click", function () {
  fillEditForm();
  openPopup(popupEdit);
  document.addEventListener("click", closePopupByOverlay);
});

editCloseBtn.addEventListener("click", function () {
  closePopup(popupEdit);
  document.removeEventListener("click", closePopupByOverlay);
});

imageCloseBtn.addEventListener("click", function () {
  closePopup(popupImage);
  document.removeEventListener("click", closePopupByOverlay);
});

//new listener avatar

avatarImg.addEventListener("click", function () {
  popupFormUrlAvatar.value = "";
  openPopup(popupAvatar);
  document.addEventListener("click", closePopupByOverlay);
});

closePopupAvatar.addEventListener("click", function () {
  closePopup(popupAvatar);
  document.removeEventListener("click", closePopupByOverlay);
});

//forms

function fillEditForm() {
  editFormElemInpt.value = profileTitle.textContent;
  formInptDesc.value = profileDesc.textContent;
}

//fun for change

function handleProfileFormSubmit(evt) {
  profileSbmtBtn.textContent = "Сохранение...";
  evt.preventDefault();
  api
    .getProfileIntel(editFormElemInpt.value, formInptDesc.value) // отправка patch на север
    .then((res) => {
      profileTitle.textContent = editFormElemInpt.value;
      profileDesc.textContent = formInptDesc.value;
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileSbmtBtn.textContent = "Сохранить";
    });
}

popupFormEdt.addEventListener("submit", handleProfileFormSubmit);

//add listener to avatar form

function handleAvatarFormSubmit(evt) {
  logoSbmtBtn.textContent = "Сохранение...";
  evt.preventDefault();
  api
    .newAvatar(popupFormUrlAvatar.value)
    .then((res) => {
      avatarImg.style.backgroundImage = `url(${popupFormUrlAvatar.value})`;
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      logoSbmtBtn.textContent = "Сохранить";
    });
}

popupFormAvatar.addEventListener("submit", handleAvatarFormSubmit);

function animatePopup() {
  popupEdit.classList.add("popup_is-animated");
  popupNewCard.classList.add("popup_is-animated");
  popupImage.classList.add("popup_is-animated");
}

animatePopup();

//api methods

// load user info

Promise.all([api.getCardInfo(), api.getUserInfo()])
  .then(([cards, userData]) => {
    cards.forEach((card) => {
      cardsContainer.append(
        createCard(
          api.deleteCard,
          api.cardLike,
          openImage,
          userData["_id"],
          card
        )
      );
      console.log(card.likes.length);
    });
    console.log(cards);

    profileTitle.textContent = userData.name;
    profileDesc.textContent = userData.about;
    avatarImg.style.backgroundImage = `url(${userData.avatar})`;
    console.log(userData);
    userInfoId = userData["_id"];
  })
  .catch((err) => {
    console.log(err);
  });

//-----------------
enableValidation(optionsObject);
//-----------------

// у меня работают лайки и удаление карточек, ошибок нет
//и кнопки удаления всегда появляются
