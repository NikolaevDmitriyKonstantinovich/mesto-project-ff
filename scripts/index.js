// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//find template and place for cards
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');


//implement function add
function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode('true');
    const cardDesc = cardElement.querySelector('.card__description');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = link;
    cardImage.alt = 'Пейзаж ${name}';
    cardDesc.querySelector('.card__title').textContent = name;


    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    return cardElement;
}

//create function for delete card
const deleteCard = (evt) => {
    evt.target.closest('.card').remove();
};

//add all cards from cards.js
initialCards.forEach((card) => {
    cardsContainer.append(createCard(card.name, card.link, deleteCard));
});