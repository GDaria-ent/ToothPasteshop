

// js for sign-in modal
var signInModalWindow = document.querySelector('.sign-in-modal');
var userAccountButton = document.querySelector('.user-account');
var closeButton = document.querySelector('.sign-in-modal__close-button');
var signInModalForm = document.querySelector('.sign-in-modal__wrapper');
var signInButton = document.querySelector('.sign-in-modal__button');

signInModalForm.addEventListener('click', function(event){
    event.stopPropagation();
});

userAccountButton.addEventListener('click', function (){
    signInModalWindow.classList.add('sign-in-modal--visible');
    
});

signInModalWindow.addEventListener('click', function(event){
    signInModalWindow.classList.remove('sign-in-modal--visible');
    event.stopPropagation();
});

closeButton.addEventListener('click', function(){
    signInModalWindow.classList.remove('sign-in-modal--visible');
});


var signInFieldsList = [
    {
        type: 'email',
        inputLink: '.sign-in-modal__input-email',
        anError: false
    },
    {
        type: 'pass',
        inputLink: '.sign-in-modal__input-password',
        anError: false
    }
]

signInButton.addEventListener('click', function(){
    toSignIn(signInFieldsList);
});

function validateSignIn(el, signInValue){
    return localStorage.getItem(el.type) === signInValue;
}

function errorInField(anError, signInField){
    if(anError){
        signInField.classList.add('error-in-field');
    }else{
        signInField.classList.remove('error-in-field');
    }
}

function toSignIn(signInFieldsList){
    signInFieldsList.forEach(function(el){
        var signInField = document.querySelector(el.inputLink);
        var signInValue = signInField.value;
        var errorStatus = validateSignIn(el, signInValue);
        el.anError = !errorStatus;
        errorInField(el.anError, signInField);
    });
    if(signInFieldsList.every(elem => elem.anError === false)){
        window.location.href='private-account.html';
    };
}

// js for menu modal
var menuButton = document.querySelector('.button-section__menu-button');
var closeMenuButton = document.querySelector('.menu-modal__close-button');
var menuContainer = document.querySelector('.menu-modal__wrapper');
var menuModal = document.querySelector('.menu-modal');
var menuLink = document.querySelectorAll('.menu-modal__item-link');

menuLink.forEach(link => link.addEventListener('click', function(){
    menuModal.classList.remove('menu-modal--visible');})
);


menuButton.addEventListener('click', function(){
    menuModal.classList.add('menu-modal--visible');
});

closeMenuButton.addEventListener('click', function(){
    menuModal.classList.remove('menu-modal--visible');
});

menuModal.addEventListener('click', function(){
    menuModal.classList.remove('menu-modal--visible');
});

menuContainer.addEventListener('click', function(event){
    event.stopPropagation();
});


// js for video modal
var videoSwitcherButton = document.querySelector('.video-button');
var closeVideo = document.querySelector('.video-modal__close-button');
var videoModal = document.querySelector('.video-modal');

videoSwitcherButton.addEventListener('click', function(){
    videoModal.classList.add('video-modal--visible');
});

closeVideo.addEventListener('click', function(){
    videoModal.classList.remove('video-modal--visible');
});

//js for create new account modal
var createAccountModal = document.querySelector('.create-account');
var createAccountform = document.querySelector('.create-account__wrapper');
var closeCreateAccountForm = document.querySelector('.create-account__close-button');
var submitDataForNewAccount = document.querySelector('.create-account__submit-button');
var buttonToCreateNewAccount = document.querySelector('.sign-in-modal__button--empty');

buttonToCreateNewAccount.addEventListener('click', ()=>{
    signInModalWindow.classList.remove('sign-in-modal--visible');
    createAccountModal.classList.add('create-account--visible');
});

createAccountform.addEventListener('click', (event)=>{
    event.stopPropagation();
});

createAccountModal.addEventListener('click', ()=>{
    createAccountModal.classList.remove('create-account--visible');
});

closeCreateAccountForm.addEventListener('click', ()=>{
    createAccountModal.classList.remove('create-account--visible');
});

var fieldsToValidate = [
    {   type: 'name',
        name: '.create-account__input-name',
        validator: 'isNotEmptyString',
        isError: false
    },
    {
        type: 'surname',
        name: '.create-account__input-last-name',
        validator: 'isNotEmptyString',
        isError: false
    },
    {
        type: 'email',
        name: '.create-account__input-email',
        validator: 'validateEmail',
        isError: false
    },
    {
        type: 'pass',
        name: '.create-account__input-password',
        validator: 'validatePass',
        isError: false
    }  
];

var validators = {
    validateEmail: function(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    
    validatePass: function(pass){
        return pass.length > 8;
    },

    isNotEmptyString: function(string){
        return string.length !== 0;      
    }


}


submitDataForNewAccount.addEventListener('click', ()=>{

    validateField(fieldsToValidate);
    
});

function setStatus(fieldLink, isError){
    if(isError){
        fieldLink.classList.add('is-error');
    }else{
        fieldLink.classList.remove('is-error');
    }
}

function validateField(fieldsList){
    fieldsList.forEach(function(field){
        var element = document.querySelector(field.name);
        var value = element.value;
        var isValid = validators[field.validator](value);
        field.isError = !isValid;
        setStatus(element, field.isError);
        if( field.type === 'email' || field.type === 'pass'){
            localStorage.setItem(field.type, value);
        }

    });
    
    if(fieldsList.every(elem => elem.isError === false)){
        window.location.href='private-account.html';
    };

}