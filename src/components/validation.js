
const editFormElement = document.querySelector('.popup__form');
const editFormInputName = editFormElement.querySelector('.popup__input_type_name');
const editFormInputError = editFormElement.querySelector('.form_name__input-error');


const regex = /[^a-zа-я\sё\-]/gi;
const errorMessage = 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы';


function testInput(str) {
    return !regex.test(str);
}





function showInputError(formElement, inputElement, errorMessage) {
    // const errorElement = formElement.querySelector('.form_name__input-error');

    const errorElements = Array.from(formElement.querySelectorAll('.form_name__input-error'));
    inputElement.classList.add('form__input_type_error');
    // errorElements.forEach((element) => {
    //     element.textContent = errorMessage;
    //     element.classList.add('form__input-error_active');
    // });
    const nearError = inputElement.nextElementSibling;
    nearError.textContent = errorMessage;
    nearError.classList.add('form__input-error_active');
    
}

function hideInputError(formElement, inputElement) {
    const errorElement = inputElement.nextElementSibling;;
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');
}

const validationObjects = {
    editFormElement: '.popup__form',
    editFormInputName: '.popup__input_type_name',
    editFormInputError: '.form_name__input-error',
}
function enableValidation(array) {

}

function clearValidation() {
    
}

const isValid = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        if(inputElement.validity.patternMismatch) {
            showInputError(formElement, inputElement, errorMessage);
        } else {
            hideInputError(formElement ,inputElement);
        }
        
    }
}




function setEventListeners(formElement) {
    const inputName = document.querySelector('.popup__input_type_name');
    const inputDescription = document.querySelector('.popup__input_type_description');
    const popupInputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const btnElement = formElement.querySelector('.popup__button');
    popupInputList.forEach((element) => {
        element.addEventListener('input', () => {
            isValid(formElement, element);
            toggleBtnState(popupInputList, btnElement);

        });
    });
}

function customValidation(formElement) {
    const inputName = document.querySelector('.popup__input_type_name');
    const inputDescription = document.querySelector('.popup__input_type_description');
    const btnElement = formElement.querySelector('.popup__button');
    inputName.addEventListener('input', () => {
        if(testInput(inputName.textContent)) {
            hideInputError(formElement ,inputName);
        } else {
            showInputError(formElement, inputName, errorMessage);
        }
    })

    inputDescription.addEventListener('input', () => {
        
    })


}

const enableFormValidation = () => {
    const popupFormList = Array.from(document.querySelectorAll('.popup__form'));
    popupFormList.forEach((element) => {
        setEventListeners(element);
        // setEventListenersToInput(element);
    });

}

function hasInvalidInput(list) {
    return list.some((element) => {
        return !element.validity.valid;
    });
}

function toggleBtnState(list, btn) {
    if(hasInvalidInput(list)) {
        btn.disabled = true
        btn.classList.add('btn__submit_inactive');
    } else {
        btn.disabled = false;
        btn.classList.remove('btn__submit_inactive');
    }
}

enableFormValidation();


//....................


// function setEventListenersToInput(formElement) {
//     const inputName = document.querySelector('.popup__input_type_name');
//     const inputDescription = document.querySelector('.popup__input_type_description');
//     const inputCardName = document.querySelector('.popup__input_type_card-name');

//     const btnElement = formElement.querySelector('.popup__button');

//     inputName.addEventListener('input', () => {
//         if(!inputName.validity.valid) {
//             showInputError(formElement, inputName, inputName.validationMessage);
//         } else {
//             // if(!testInput(inputName.textContent)) {
//             //     hideInputError(formElement ,inputName);
//             // } else {
//             //     showInputError(formElement, inputName, errorMessage);
//             // }

//             if(inputName.validity.patternMismatch) {
//                 showInputError(formElement, inputName, errorMessage);
//             } else {
//                 hideInputError(formElement ,inputName);
//             }
//         }
//     })
// }