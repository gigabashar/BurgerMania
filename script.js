let image_tracker = 1;
const body = document.getElementsByTagName("BODY")[0];
const header = document.getElementById('header');
const burger_button = document.querySelector(".menuToggle");
const nav = document.querySelector('.backgroundLayer');



setInterval( function(){
    if (image_tracker === 1){
        document.querySelector(".discover-our-burger-image").style.backgroundImage = `url(./Images/BurgerMagic2.jpg)`;
        image_tracker = 2;
    }else{
        document.querySelector(".discover-our-burger-image").style.backgroundImage = `url(./Images/BurgerMagic.jpg)`;
        image_tracker = 1;
    }

},3000);

burger_button.addEventListener('click', function(){
    nav.classList.toggle('navactive');
    body.classList.toggle('scroll');
    body.classList.toggle ('overflow');
    header.classList.toggle("active");
});








