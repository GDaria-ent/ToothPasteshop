var application = Vue.createApp({
    delimiters: ['${','}$'],
    data: function(){
        return{
            orderList: JSON.parse(localStorage.getItem('__products_list__'))
        }
    },
    methods: {
        removeItemFormProductList(order){
            this.orderList = this.orderList.filter(orderItem => orderItem != order);
            localStorage.setItem('__products_list__', JSON.stringify(this.orderList));
        }
        
    },
    computed: {
        ifCartIsEmpty: function() {
            return this.orderList.length === 0; 
        },
        totalAmount: function() {
            var result = 0
            for(var i of this.orderList){
                result += i.price * i.counter;
            }
            return result;
        }
         
    }
    
});
application.component('basket-card', {
    template: '#item-in-basket',
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
        },
        counter: {
            type: Number,
            default: 1
            
        }
          
    },
    methods: {
        deleteProduct() {
            this.$emit('clickDelete');
        }
    },
    computed: {
        total: function() {
            return this.price * this.counter;
        }
        
    }
});
application.mount('#application-wrapper');