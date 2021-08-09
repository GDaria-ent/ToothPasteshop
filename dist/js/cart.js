var cartModal = document.querySelector('.cart');
var closeCartButton = document.querySelector('.cart__close-button');
var openCartButton = document.querySelector('.basket');
var cartForm = document.querySelector('.cart__wrapper');
var jumbotronButton = document.querySelector('.jumbotron-button');
var sliderButton = document.querySelector('.slider-button');
var sliderButtonFooter = document.querySelector('.page-description_footer-button');
var __slider = document.querySelectorAll('.swiper-slide--action');
var gifSectionButton = document.querySelector('.gif-section__description-button');
var productCard = document.querySelectorAll('.product-card__wrapper');
var productCardFooter = document.querySelectorAll('.product-card__wrapper-footer');
var subscriptionButton = document.querySelector('.subscription-section__button');

openCartButton.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

cartModal.addEventListener('click', function(event){
    event.stopPropagation();
    cartModal.classList.remove('cart--visible');
});

jumbotronButton.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

sliderButton.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

sliderButtonFooter.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

__slider.forEach(i => i.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
}));

for(var i of productCard){
    i.addEventListener('click', function(){
        cartModal.classList.add('cart--visible');
    });
}

for(var i of productCardFooter){
    i.addEventListener('click', function(){
        cartModal.classList.add('cart--visible');
    });
}

gifSectionButton.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

subscriptionButton.addEventListener('click', function(){
    cartModal.classList.add('cart--visible');
});

closeCartButton.addEventListener('click', function(){
    cartModal.classList.remove('cart--visible');
});

cartForm.addEventListener('click', function(event){
    event.stopPropagation();
});


listOfCards = [
    {
        title: 'Fresh Mint',
        description: 'Toothpaste Bits',
        price: 30,
        image: '/ToothPasteshop/assets/Product1.png',
        counter: 1
    },
    {
        title: 'Charcoal Mint',
        description: 'Toothpaste Bits',
        price: 30,
        image: '/ToothPasteshop/assets/Charcoal-Subscription.jpg',
        counter: 1
    },
    {
        title: 'Berry Twist',
        description: 'Toothpaste Bits',
        price: 30,
        image: '/ToothPasteshop/assets/Berry-Subscription.jpg',
        counter: 1
    },
    {
        title: 'Mouthwash Bits',
        description: '4-Mounth supply',
        price: 20,
        image: '/ToothPasteshop/assets/Product2.png',
        counter: 1
    },
    {
        title: 'Whitening Gel',
        description: '28 applications',
        price: 24,
        image: '/ToothPasteshop/assets/Product3.png',
        counter: 1
    },
    {
        title: 'Dental Floss',
        description: 'Two-pack',
        price: 12,
        image: '/ToothPasteshop/assets/Product4.png',
        counter: 1
    },
    {
        title: 'Pamboo Toothbush',
        description: 'Two-pack',
        price: 12,
        image: '/ToothPasteshop/assets/Product5.png',
        counter: 1
    },
    {
        title: 'Daily Habits Kit',
        description: '5-Piece Oral Care Set',
        price: 60,
        image: '/ToothPasteshop/assets/Product6.png',
        counter: 1
    },
    {
        title: 'The Duo',
        description: 'Toothpaste',
        price: 20,
        image: '/ToothPasteshop/assets/Slider2.png',
        counter: 1
    }
];




var app = Vue.createApp({
    delimiters: ['${','}$'],
    data: function() {
        return {
            products: listOfCards,
            localStorageKey: '__products_list__',
            productsInCart: []
        }
    },
    methods: {
        addItemToLocalStorage(product) {
            if(!this.productsInCart.find(item => item.title === product.title)){
                this.productsInCart.push(product);
            }
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsInCart));
        },
        getDataFromLocalStorage() {
            let DataFromLS = localStorage.getItem(this.localStorageKey) || '[]';
            this.productsInCart = JSON.parse(DataFromLS);
        }, 
        removeItemFormList(item){
            this.productsInCart = this.productsInCart.filter(product => product != item);
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsInCart));
        },
        deleteItem(item) {
            var itemIndex = this.productsInCart.indexOf(item);
            if(item.counter > 1){
                item.counter -= 1;
                this.productsInCart.splice(itemIndex, 1, item);
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsInCart));
            }
        },
        addItem(item) {
           var itemIndex = this.productsInCart.indexOf(item);
            if(item.counter < 20){
                item.counter += 1;
                this.productsInCart.splice(itemIndex, 1, item);
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsInCart));
            }
        },
        openSignInWindow(){
            cartModal.classList.remove('cart--visible');
            signInModalWindow.classList.add('sign-in-modal--visible');
        }
    },
    computed: {
        ifCartIsEmpty: function() {
            return this.productsInCart.length === 0; 
        }
    
        
    },
   
    mounted() {
        this.getDataFromLocalStorage();
    }
});

app.component('card-item', {
    template: '#page-card',
    delimiters: ['${','}$'],
    data: function() {
        return {

        }
    },
    props: {
        src: {
            type: String,
            default: '/assets/Product1.png'
        },
        title: {
            type: String,
            default: 'CoCoCo'
        },
        description: {
            type: String,
            default: 'FOfofofofoof'
        },
        price: {
            type: Number,
            default: 12
        }
        
    },
    methods: {
        addCard() {
            this.$emit('addCardToLocalStorage');
        }
    }
});

app.component('basket-item', {
    template: '#item-in-cart',
    delimiters: ['${','}$'],
    data: function() {
        return {
            
        }
    },
    props: {
        src: {
            type: String,
            default: '/ToothPasteshop/assets/Product1.png'
        },
        title: {
            type: String,
            default: 'CoCoCo'
        },
        description: {
            type: String,
            default: 'FOfofofofoof'
        },
        price: {
            type: Number,
            default: 12
        },
        counter: {
            type: Number,
            default: 1
            
        }
          
    },
    methods: {
        deleteItem() {
            this.$emit('clickToDelete');
        },
        minusOneItem() {
            this.$emit('decrementCounter');
        },
        plusOneItem() {
            this.$emit('incrementCounter');
        }
    },
    computed: {
        totalPrice: function() {
            return this.price * this.counter;
        }
    }

});

app.mount('#app-wrapper');