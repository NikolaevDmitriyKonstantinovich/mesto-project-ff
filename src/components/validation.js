export const optionsObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
//   inputName: ".popup__input_type_name",
  //   inputDescription: ".popup__input_type_description",
  errorActive: "form__input-error_active",
  formError: "form__input_type_error",
  errors: ".form_name__input-error",
  submitButtonSelector: ".popup__button",
  btnInactiveState: "btn__submit_inactive",
};

function showInputError(formElement, inputElement, errorMessage, options) {
  inputElement.classList.add(options.formError);

  const nearError = inputElement.nextElementSibling;
  nearError.textContent = errorMessage;
  nearError.classList.add(options.errorActive);
}

function hideInputError(inputElement, options) {
  const errorElement = inputElement?.nextElementSibling;
  inputElement?.classList?.remove(options.formError);
  errorElement.textContent = "";
  errorElement.classList.remove(options.errorActive);
}

const isValid = (formElement, inputElement, options) => {
  let customErrorMessage = inputElement.dataset?.errorMessage;
  if (!inputElement?.validity?.valid) {
    if (inputElement?.validity?.patternMismatch) {
      showInputError(formElement, inputElement, customErrorMessage, options);
    } else {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        options
      );
    }
  } else {
    hideInputError(inputElement, options);
  }
};

function setEventListeners(formElement, options) {
  const inputList = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  const btnElement = formElement.querySelector(options.submitButtonSelector);
  inputList.forEach((element) => {
    element.addEventListener("input", () => {
      isValid(formElement, element, options);
      toggleBtnState(inputList, btnElement, options);
    });
  });
}

export const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((element) => {
    setEventListeners(element, options);
  });
};

export function clearValidation(profileForm, validationConfig, popup) {
  const btn = popup.querySelector(validationConfig.submitButtonSelector);
  if (btn !== null) {
    disableButton(btn, validationConfig);
  }

  const inputs = popup.querySelectorAll(validationConfig.inputSelector);

  inputs.forEach((input) => {
    hideInputError(input, validationConfig);
  });
}

function hasInvalidInput(list) {
  return list?.some((element) => {
    return !element.validity.valid;
  });
}

function toggleBtnState(list, btn, options) {
  if (hasInvalidInput(list)) {
    disableButton(btn, options);
  } else {
    activateButton(btn, options);
  }
}

function disableButton(btn, options) {
  btn.disabled = true;
  btn.classList.add(options.btnInactiveState);
}

function activateButton(btn, options) {
  btn.disabled = false;
  btn.classList.remove(options.btnInactiveState);
}

//....................
