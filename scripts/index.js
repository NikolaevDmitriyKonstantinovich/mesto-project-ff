// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//find template and place for cards
const cardTemplate = document.querySelector('#card-template').content;
const placeCards = document.querySelector('.places__list');


//implement function add
function addCards(name, link, deleteCardFunction) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode('true');
    const cardDesc = cardElement.querySelector('.card__description');


    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = 'Пейзаж ${name}';
    cardDesc.querySelector('.card__title').textContent = name;


    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCardFunction);
    return cardElement;
}

//create function for delete card
const deleteCard = (evt) => {
    evt.target.parentElement.remove();
};

//add all cards from cards.js
for(let i = 0; i < initialCards.length; i++) {
    placeCards.append(addCards(initialCards[i].name, initialCards[i].link, deleteCard))
};