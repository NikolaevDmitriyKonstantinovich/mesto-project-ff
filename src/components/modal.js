



export function escEvent(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector('.popup_is-opened'));

    }
}




export function openPopup(win) {
    win.classList.add('popup_is-opened');
    document.addEventListener('keydown', escEvent);

    const btn = win.querySelector('.popup__button');
    if(btn !== null) {
        btn.disabled = true;
        btn.classList.add('btn__submit_inactive');
    }
    const remainsErrors = win.querySelectorAll('.form_name__input-error');

    remainsErrors.forEach((element) => {
        element.textContent = '';
    });
}

export function closePopup(win) {
    win.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escEvent);
}

export function closePopupByOverlay(evt) {
    if(evt.target.classList.contains('popup')) {  
        closePopup(evt.target);  
    }
}




