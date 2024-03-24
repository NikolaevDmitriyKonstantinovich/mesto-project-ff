// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//find template and place for cards

import { initialCards } from './cards.js';
import './pages/index.css';
import  *  as data from './popups.js';



const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');


//implement function add
function createCard(name, link, deleteCard, cardLike, openImage) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode('true');
    const cardDesc = cardElement.querySelector('.card__description');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = link;
    cardImage.alt = 'Пейзаж ${name}';
    cardDesc.querySelector('.card__title').textContent = name;


    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    cardImage.addEventListener('click', function() {
        openImage(data.popupImage, name, link);
    });

    cardElement.querySelector('.card__like-button').addEventListener('click', cardLike);
    return cardElement;
}

//create function for delete card
const deleteCard = (evt) => {
    evt.target.closest('.card').remove();
};



initialCards.forEach(function(card) {
    cardsContainer.append(createCard(card.name, card.link, deleteCard, cardLike, openImage));
});



//add card


function handleAddSubmit(evt) {
    evt.preventDefault();
    cardsContainer.prepend(createCard(document.querySelector('.popup__input_type_card-name').value, document.querySelector('.popup__input_type_url').value, deleteCard, cardLike, openImage));
    data.closePopup(data.popupNewCard);
}

data.popupNewCardForm.addEventListener('submit', handleAddSubmit); 

//like card

function cardLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active')
}

function openImage(win, name, link) {
    win.querySelector('.popup__image').src = link;
    win.querySelector('.popup__caption').textContent = name;
    win.classList.add('popup_is-opened');
}


// document.addEventListener('click', function(evt) {
//     if(evt.target !== data.popupImage && !data.popupImage.classList.contains('popup_is-opened')) {
//         data.closePopup(data.popupImage);
//     }
// });

document.addEventListener('click', function(evt){
    if(evt.target === data.popupEdit) { 
        data.popupEdit.classList.remove('popup_is-opened'); 
    }
});

document.addEventListener('click', function(evt){
    if(evt.target === data.popupNewCard) { 
        data.popupNewCard.classList.remove('popup_is-opened'); 
    }
});

document.addEventListener('click', function(evt){
    if(evt.target === data.popupImage) { 
        data.popupImage.classList.remove('popup_is-opened'); 
    }
});









