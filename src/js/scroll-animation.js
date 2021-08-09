let animatedContainer = document.querySelector('.animation-section_description-container');
let animationWrapper = document.querySelector('.animation-section_wrapper');
let animatedImageList = document.querySelectorAll('.animated-image');

let lastScroll = 0;
let degreeToRotate = 5;
let counter = 17;

window.addEventListener('scroll', function(){
    animateDescriptionWhenScroll(animatedContainer, animationWrapper, animatedImageList);
});

function styleOfAnimation(animatedElement, opacity, transform, duration){
    animatedElement.style.opacity = opacity; 
    animatedElement.style.transform = transform; 
    animatedElement.style.transitionDuration = duration;
}

function animateDescriptionWhenScroll(animatedDescription, animationWrapper, imageList){
    let sizeOfVisiblePart = document.documentElement.clientHeight;
    let coordinatesOfAnimation = animatedDescription.offsetTop;
    let toMakeFullyVisible = animationWrapper.clientHeight /2;
    let pixelsScrolledDown = document.documentElement.scrollTop + sizeOfVisiblePart;
    if(pixelsScrolledDown >= coordinatesOfAnimation){
        styleOfAnimation(animatedDescription, '0.2', 'translateY(17px)', '0.2s');
        moveImagesUp(imageList);
    }
    if(pixelsScrolledDown >= coordinatesOfAnimation + toMakeFullyVisible ){
        styleOfAnimation(animatedDescription, '1', 'translateY(0px)', '0.2s');
    }

};


function moveImagesUp(imageList){
    
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > 0 && lastScroll <= currentScroll) {
        counter -= 2;
        degreeToRotate += 1;

    }else{
        counter += 2;
        degreeToRotate -= 1;

    };
    lastScroll = currentScroll;
    for(let image = 0; image < imageList.length; image++){
        if(image % 2 === 0){
            imageList[image].style.transform = 'translateY(' + counter + 'px) rotate('+ (-degreeToRotate) +'deg)';
        }else{
            imageList[image].style.transform = 'translateY(' + counter + 'px) rotate('+ degreeToRotate +'deg)';
        }
        
    }
    
}    
