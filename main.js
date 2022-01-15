let saveBtn = document.querySelector('.js-save');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let contactUl = document.querySelector('.contact-list');
let contactArr = [];

if (localStorage.getItem('contactList')) {
    contactArr = JSON.parse(localStorage.getItem('contactList'));

    addContactFromLS();
}

function addContactFromLS() {
    contactArr.forEach(function (item, index, arr) {
        addContactToUl(item);
    });
}

function addContactToUl(obj) {
    console.log(obj);
    let li = document.createElement('li');
    li.innerText = `${obj.name}: ${obj.phone}`;
    contactUl.append(li);
}

saveBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (nameInput.value === '' || phoneInput.value === '') {
        alert('Форма пуста');
        return;
    }

    let newContact = {
        name: nameInput.value,
        phone: phoneInput.value
    }

    addContactToUl(newContact);

    contactArr.push(newContact);

    localStorage.setItem('contactList', JSON.stringify(contactArr));
});