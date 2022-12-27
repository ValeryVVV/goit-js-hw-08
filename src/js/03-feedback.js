import throttle from "lodash.throttle";

const KEY_STORAGE = "feedback-form-state";

const inputEl = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

inputEl.addEventListener('input', throttle(onLocalFields, 500));
inputEl.addEventListener('submit', onSubmit);

onSubmit(); 

function onSubmit(event) {
    if(email.value === '' || message.value === '') {
       return alert('Заполните все поля!');
    }

    for (var i = 0;  i < inputEl.length; i++) {
        inputEl[i].value = '';
      };

    localStorage.removeItem(KEY_STORAGE);
    event.preventDefault();

}



function onLocalFields() {
    const localFields = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(KEY_STORAGE, JSON.stringify(localFields))

}

saveLocalValue();

function saveLocalValue() {
    let saveValue = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if (saveValue) {
      email.value = saveValue.email;
      message.value = saveValue.message;
    }
}

console.log(onLocalFields())