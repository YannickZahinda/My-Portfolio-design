const form = document.querySelector('#my-form');
const InputName = document.querySelector('#name-input');
const email = document.querySelector('#mail-input');
const message = document.querySelector('#text-erea-input');

function DataStorage() {
  const userInfo = {
    Name: InputName.value,
    Email: email.value,
    Message: message.value,
  };

  localStorage.setItem('userData', JSON.stringify(userInfo));
}

form.addEventListener('focusout', DataStorage);

const userInfoObj = JSON.parse(localStorage.getItem('userData'));

InputName.value = userInfoObj.Name;
email.value = userInfoObj.Email;
message.value = userInfoObj.Message;
