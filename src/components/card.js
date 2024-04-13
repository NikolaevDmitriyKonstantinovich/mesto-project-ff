import { popupImage } from "../index.js";
import * as api from "./api.js";

export function createCard(
  name,
  link,
  likes,
  deleteCard,
  cardLike,
  openImage,
  id,
  userId,
  cardId,
  cardLikes
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode("true");
  const cardDesc = cardElement.querySelector(".card__description");
  const cardImage = cardElement.querySelector(".card__image");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const countOfLikes = cardElement.querySelector(".card__like-button-likes");

  cardImage.src = link;
  cardImage.alt = `Пейзаж ${name}`;
  cardDesc.querySelector(".card__title").textContent = name;
  if (countOfLikes) {
    countOfLikes.textContent = `${likes}`;
  }

  if (id === userId) {
    cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        deleteCard(cardId);
        cardElement.remove();
      });
  } else {
    cardElement.querySelector(".card__delete-button").remove();
  }

  cardImage.addEventListener("click", function () {
    openImage(name, link);
  });

  function checkLike() {
    cardLikes.forEach((element) => {
      if (element["_id"] == id) {
        
        return true;
      } else {
        return false;
      }
    });
  }

  likeBtn.addEventListener("click", () => {
    if(!checkLike) {
        api.cardLike(cardId);
        likeBtn.classList.add("card__like-button_is-active");
        countOfLikes.textContent = `${likes + 1}`;
    } else {
        likeBtn.classList.remove("card__like-button_is-active");
        api.deleteCardLike(cardId);
    }
  });




  // cardLikes.forEach((element) => {
  //     if(element['_id'] === id) {
  //         likeBtn.classList.add('card__like-button_is-active');
  //         return;
  //     }
  // });

  return cardElement;
}

// export const deleteCard = (evt) => {
//     evt.target.closest('.card').remove();

// };

// export function cardLike(evt) {
//     evt.target.classList.toggle('card__like-button_is-active')
// }
