/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const dialogButton = document.querySelector('.dialog__button');
const dialogForm = document.querySelector('.dialog__form');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

function openDialog() {
  if (dialog.open) {
    return;
  }

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function closeDialog() {
  if (!dialog.open) {
    return;
  }

  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }
}

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  openDialog();
});

dialogButton.addEventListener('click', (event) => {
  event.preventDefault();
  closeDialog();
});

dialogForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closeDialog();
});
