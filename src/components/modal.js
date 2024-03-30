



export function escEvent(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector('.popup_is-opened'));

    }
}

// перенести в опенпопап и клоспопап


export function openPopup(win) {
    win.classList.add('popup_is-opened');
    document.addEventListener('keydown', escEvent);
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




