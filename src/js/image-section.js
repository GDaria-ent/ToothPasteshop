var mintButton = document.querySelector('.product-card__select-colors--Mint');
var charcoalButton = document.querySelector('.product-card__select-colors--Charcoal');
var berryButton = document.querySelector('.product-card__select-colors--Berry');

var mintImage = document.querySelector('.product-card__image1');
var charcoalImage = document.querySelector('.product-card__image2');
var berryImage = document.querySelector('.product-card__image3');

mintButton.addEventListener('click', function(event){
    event.stopPropagation();
    document.querySelector('.product-card__title').innerHTML = 'Fresh Mint';
    mintImage.classList.remove('product-card__image1--invisible');
    charcoalImage.classList.remove('product-card__image2--visible');
    berryImage.classList.remove('product-card__image3--visible');
});
charcoalButton.addEventListener('click', function(event){
    event.stopPropagation();
    document.querySelector('.product-card__title').innerHTML = 'Charcoal Mint';
    mintImage.classList.add('product-card__image1--invisible');
    charcoalImage.classList.add('product-card__image2--visible');
    berryImage.classList.remove('product-card__image3--visible');
});
berryButton.addEventListener('click', function(event){
    event.stopPropagation();
    document.querySelector('.product-card__title').innerHTML = 'Berry Bits';
    mintImage.classList.add('product-card__image1--invisible');
    charcoalImage.classList.remove('product-card__image2--visible');
    berryImage.classList.add('product-card__image3--visible');
});