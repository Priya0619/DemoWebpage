const myForm = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
            ${nameInput.value } : ${phoneInput.value }: ${emailInput.value}`));

            userList.appendChild(li);

            //Clear fields
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
    }
}