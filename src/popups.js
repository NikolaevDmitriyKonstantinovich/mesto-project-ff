
//popup elements
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

export const popup = document.querySelector('.popup');
export const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardCloseB = popupNewCard.querySelector('.popup__close');

export const popupEdit = document.querySelector('.popup_type_edit');
const EditCloseB = popupEdit.querySelector('.popup__close');
export const popupImage = document.querySelector('.popup_type_image');
const imageCloseB = popupImage.querySelector('.popup__close');

const profileInf = document.querySelector('.profile__info');
const profileTitle = profileInf.querySelector('.profile__title');
const profileDesc = profileInf.querySelector('.profile__description');

//form elements
const popupForm = document.querySelector('.popup__form');
const editFormElem = popupForm.querySelector('.popup__input_type_name');
const formDesc = popupForm.querySelector('.popup__input_type_description');

//add form
const popupCardContent = popupNewCard.querySelector('.popup__content');
export const popupNewCardForm = popupCardContent.querySelector('.popup__form');

const addCardName = document.querySelector('.popup__input_type_card-name');
const addCardUrl = document.querySelector('.popup__input_type_url');


// const editFormElem = document.forms.edit-profile.elements;
// const placeFormElem = document.forms.new-place.elements;

// const editFormName = editFormElem.name;
// const editFormDesc = editFormElem.description;

// const placeFormName = placeFormElem.place-name;
// const placeFormLink = placeFormElem.link;





document.addEventListener('keydown', function(evt) {
    if (evt.key === "Escape") {
        popupNewCard.classList.remove('popup_is-opened');
        popupEdit.classList.remove('popup_is-opened');
        popupImage.classList.remove('popup_is-opened');
    }
});

export function openPopup(win) {
    win.classList.add('popup_is-opened');
    fillEditForm();
}

export function closePopup(win) {
    win.classList.remove('popup_is-opened');
}

addButton.addEventListener('click', function() {
    openPopup(popupNewCard);
});



newCardCloseB.addEventListener('click', function() {
    closePopup(popupNewCard);
});

editButton.addEventListener('click', function() {
    openPopup(popupEdit);
});

EditCloseB.addEventListener('click', function() {
    closePopup(popupEdit);
});

imageCloseB.addEventListener('click', function() {
    closePopup(popupImage);
});


//forms

function fillEditForm() {
    editFormElem.value = profileTitle.textContent;
    formDesc.value = profileDesc.textContent;
};


//fun for change 

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = editFormElem.value;
    profileDesc.textContent = formDesc.value;
    closePopup(popupEdit);
}

popupForm.addEventListener('submit', handleFormSubmit); 


function animatedPopup() {
    popupEdit.classList.add('popup_is-animated');
    popupNewCard.classList.add('popup_is-animated');
    popupImage.classList.add('popup_is-animated');
}

animatedPopup()


