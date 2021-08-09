

var createNewAccountBtn = document.querySelector('.sign-in-modal__button--large');
var signInBtn = document.querySelector('.sign-in-modal__button--empty');


createNewAccountBtn.addEventListener('click', function(){
    var emailData = document.querySelector('.sign-in-modal__input-email').value;
    var passwordData = document.querySelector('.sign-in-modal__input-password').value;
    if(emailData && passwordData){
        localStorage.setItem('email', emailData);
        localStorage.setItem('pass', passwordData);
        console.log('Created');
    }else{
        console.log('NO!');
    }
});

signInBtn.addEventListener('click', function(){
    var emailData = document.querySelector('.sign-in-modal__input-email').value;
    var passwordData = document.querySelector('.sign-in-modal__input-password').value;
    if(emailData == localStorage.getItem('email') && passwordData == localStorage.getItem('pass')){
        console.log('YES');
    }
    else if(emailData != localStorage.getItem('email')){
        console.log('WRONG email');
    }else if(passwordData != localStorage.getItem('pass')){
        console.log('WRONG PASS');
    }
});