// ELEMENTS that we interact with
const popup = document.querySelector('#popup');
const popupOpener = document.querySelector('#popup-opener');
const popupCloser = document.querySelector('#popup-closer');

// To prevent background scrolling
const body = document.querySelector('body');

// Boolean to keep track if the popup is showing
let popupShown = false;

// FUNCTION to open popup
const showPopup = () => {
    popupShown = true;

    // Prevents background scrolling
    body.style.overflow = 'hidden';

    // STYLES
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    
    popup.firstElementChild.style.opacity = 1;
    popup.firstElementChild.style.transform = 'translate(-50%, -50%) scale(1)';
    popup.firstElementChild.setAttribute('open', true);
}

// FUNCTION to close popup
const hidePopup = () => {
    popupShown = false;

    body.style.overflow = 'visible';

    // Return popup styles to default
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';

    popup.firstElementChild.style.opacity = 0;
    popup.firstElementChild.style.transform = 'translate(-50%, -50%) scale(0.2)';
    popup.firstElementChild.setAttribute('open', false);
}

// This will be false only
// if there is no popup because there is no cover/cover designer
// This is to make sure we don't cause any errors, though they will only
// be discoverable in the console
if (popup) {
    // Popup can be dismissed with q, Escape or Enter
    body.addEventListener('keydown', e => {
        if (popupShown && (e.key === 'Escape' || e.key.toLowerCase() === 'q' || e.key === 'Enter')) {
            hidePopup();
        }
    });
    
    popup.addEventListener('click', e => {
        // If the background is clicked, then
        // the popup gets dismissed
        // The background is the 'popup'
        // and the actual text is its firstElementChild
        if (e.target.id === 'popup') {
            hidePopup();
        }
    });
    
    popupOpener.addEventListener('click', showPopup);
    popupCloser.addEventListener('click', hidePopup);
}