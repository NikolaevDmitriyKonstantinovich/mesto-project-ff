const regex = /[^a-zа-я\sё\-]/gi;
const editFormElemInpt = document.querySelector(".popup__input_type_name");
const errorMessage = editFormElemInpt.dataset.errorMessage;

export const optionsObject = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inputName: ".popup__input_type_name",
    inputDescription: ".popup__input_type_description",
    errorActive: "form__input-error_active",
    formError: "form__input_type_error",
    errors: ".form_name__input-error",
    submitButtonSelector: ".popup__button" ,
    btnInactiveState: "btn__submit_inactive" ,

  };

function testInput(str) {
  return !regex.test(str);
}

function showInputError(formElement, inputElement, errorMessage, options) {

  inputElement.classList.add(options.formError);
  // errorElements.forEach((element) => {
  //     element.textContent = errorMessage;
  //     element.classList.add('form__input-error_active');
  // });
  const nearError = inputElement.nextElementSibling;
  nearError.textContent = errorMessage;
  nearError.classList.add(options.errorActive);
}

function hideInputError(formElement, inputElement, options) {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(options.formError);
  errorElement.textContent = "";
  errorElement.classList.remove(options.errorActive);
}

const isValid = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    if (inputElement.validity.patternMismatch) {
        showInputError(formElement, inputElement, errorMessage, options);
      } else {
        showInputError(formElement, inputElement, inputElement.validationMessage, options);
      }
    
  } else {
      hideInputError(formElement, inputElement, options);
  }
};



function setEventListeners(formElement, options) {
  const inputName = document.querySelector(options.inputName);
  const inputDescription = document.querySelector(options.inputDescription);
  const popupInputList = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  const btnElement = formElement.querySelector(options.submitButtonSelector);
  popupInputList.forEach((element) => {
    element.addEventListener("input", () => {
      isValid(formElement, element, options);
      toggleBtnState(popupInputList, btnElement);
    });
  });
}

function customizationValidation(formElement) {
  const inputName = document.querySelector(".popup__input_type_name");
  const inputDescription = document.querySelector(
    ".popup__input_type_description"
  );
  const btnElement = formElement.querySelector(".popup__button");
  inputName.addEventListener("input", () => {
    if (testInput(inputName.textContent)) {
      hideInputError(formElement, inputName);
    } else {
      showInputError(formElement, inputName, errorMessage);
    }
  });

  inputDescription.addEventListener("input", () => {});
}

export const enableValidation = (options) => {
  const popupFormList = Array.from(
    document.querySelectorAll(options.formSelector)
  );
  popupFormList.forEach((element) => {
    setEventListeners(element, options);
    // setEventListenersToInput(element);
  });
};

export function clearValidation(profileForm, validationConfig, popup) {
    // const popupInputList = profileForm.querySelectorAll(validationConfig.inputSelector);
    // const btnElement = profileForm.querySelector(validationConfig.submitButtonSelector);
    // if (btnElement !== null) {
    //     btnElement.disabled = true;
    //     btnElement.classList.add("btn__submit_inactive");
    //   }
    // if (!profileForm?.classList.contains(".popup_type_image")) {
    //     toggleBtnState(popupInputList, btnElement)
    //   }
    // const remainsErrors = profileForm?.querySelectorAll(validationConfig.errors);

    // remainsErrors.forEach((element) => {
    //   element.textContent = "";
    // });
    const btn = popup.querySelector(validationConfig.submitButtonSelector);
    if (btn !== null) {
      btn.disabled = true;
      btn.classList.add(validationConfig.btnInactiveState);
    }
    const remainsErrors = popup.querySelectorAll(validationConfig.errors);
  
    remainsErrors.forEach((element) => {
      element.textContent = "";
    });
}

function hasInvalidInput(list) {
  return list?.some((element) => {
    return !element.validity.valid;
  });
}

function toggleBtnState(list, btn) {
  if (hasInvalidInput(list)) {
    btn.disabled = true;
    btn.classList.add("btn__submit_inactive");
  } else {
    btn.disabled = false;
    btn.classList.remove("btn__submit_inactive");
  }
}

//....................
