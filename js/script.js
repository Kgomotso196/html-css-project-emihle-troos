const button = document.querySelector('.menuIcon');
const buttonCancel = document.querySelector('.cancelIcon');
const navMenu = document.querySelector('.navInfoMobile, .cancelIcon');
const nav = document.querySelector('.menuIcon, .logo');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobileLinks');
const menu = document.querySelector('.hamItems');
const mobileNav = document.querySelector('.mobNav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const hide = document.querySelector('.footerSocialIconsContainer');

menu.classList.add('invisible');

ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobileNav.classList.add('invisible');
  hide.classList.add('invisible');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});

menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});
button.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  nav.classList.toggle('dNone');
  button.classList.toggle('dNone');
  buttonCancel.classList.toggle('active');
  body.classList.toggle('active');
});

buttonCancel.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  nav.classList.remove('dNone');
  button.classList.remove('dNone');
  buttonCancel.classList.toggle('active');
});

// links functionality
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    nav.classList.toggle('dNone');
    button.classList.toggle('dNone');
    buttonCancel.classList.toggle('active');
    body.classList.toggle('active');
  });
});

// validation form and local storage
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const fullName = document.getElementById('full-name');
const areaMsg = document.getElementById('text-area-msg');
const errorMsg = document.querySelector('.error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

// local storage function
function savedData() {
  const formData = {
    fullname: fullName.value,
    email: email.value,
    areaMsg: areaMsg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('submit', savedData);

function isValid(e) {
  e.preventDefault();
  // cheking email value if it is the same as the regex pattern
  errorMsg.innerText = '';
  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    errorMsg.innerText = 'The email should be in lower case';
  }
}

form.addEventListener('submit', (e) => {
  isValid(e);
});

// get the saved data from local storage
window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('formData'));
  if (data) {
    fullName.value = data.fullname;
    email.value = data.email;
    areaMsg.value = data.areaMsg;
  }
});

