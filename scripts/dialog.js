const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
const dialogButton = document.querySelector('.dialog__button');

function openDialog() {
  if (dialog.open || dialog.hasAttribute('open')) {
    return;
  }

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function closeDialog() {
  if (!dialog.open && !dialog.hasAttribute('open')) {
    return;
  }

  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }
}

saveButton.onclick = openDialog;
dialogButton.onclick = closeDialog;
