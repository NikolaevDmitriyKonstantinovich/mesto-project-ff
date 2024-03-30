import { popupImage } from '../index.js'

export function createCard(name, link, deleteCard, cardLike, openImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode('true');
    const cardDesc = cardElement.querySelector('.card__description');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = link;
    cardImage.alt = `Пейзаж ${name}`;
    cardDesc.querySelector('.card__title').textContent = name;


    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    cardImage.addEventListener('click', function() {
        openImage(name, link);
    });

    cardElement.querySelector('.card__like-button').addEventListener('click', cardLike);
    return cardElement;
}

export const deleteCard = (evt) => {
    evt.target.closest('.card').remove();
};

export function cardLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active')
}

