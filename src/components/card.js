import { popupImage } from "../index.js";
import * as api from "./api.js";



function likeByUser(card, userId) {
    return card?.likes?.some(like => like?._id === userId);
}

// name = card.name , link = card.link , likes = card.likes.length , deleteCard*, cardLike*, openImage*,   id = card.owner['_id'] , userId = resp2['_id'] (pered) , cardId = card['_id'], cardLikes = Array.from(card.likes), card* .
export function createCard(
  deleteCard,
  cardLike,
  openImage,
  userId,
  card
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode("true");
  const cardDesc = cardElement.querySelector(".card__description");
  const cardImage = cardElement.querySelector(".card__image");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const countOfLikes = cardElement.querySelector(".card__like-button-likes");

  cardImage.src = card?.link;
  cardImage.alt = `Пейзаж ${card?.name}`;
  cardDesc.querySelector(".card__title").textContent = card?.name ;
  if (countOfLikes) {
    countOfLikes.textContent = `${card?.likes?.length}`;
  }

  if (card?.owner?._id === userId) {
    cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        deleteCard(card['_id']);
        cardElement.remove();
      });
  } else {
    cardElement.querySelector(".card__delete-button").remove();
  }

  cardImage.addEventListener("click", function () {
    openImage(card?.name , card?.link);
  });

  console.log(card?.likes);
  console.log(userId);


  if(likeByUser(card, userId)) {
    likeBtn.classList.add("card__like-button_is-active");
  }

  likeBtn.addEventListener("click", (evt) => {
    const hasLike = evt.target.classList.contains("card__like-button_is-active");
    
    if(hasLike) {
        api.deleteCardLike(card['_id'])
        .then((res) => {
            evt.target.classList.toggle("card__like-button_is-active");
            countOfLikes.textContent = res.likes.length
        })
        .catch();
    } else {
        api.cardLike(card['_id'])
        .then((res) => {
            evt.target.classList.toggle("card__like-button_is-active");
            countOfLikes.textContent = res.likes.length
        })
        .catch();
    }
  });


  return cardElement;
}
