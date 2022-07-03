const hamburger = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav');


hamburger.addEventListener('click',function(){

    // this.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
    mobile_nav.classList.toggle('is-active')

});


mobile_nav.addEventListener('click',function(){

    // this.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
    mobile_nav.classList.toggle('is-active')

});








// window.onload=function (){
//     window.addEventListener('scroll',function (e) {
//         if (window.pageYOffset>100) {
//             document.querySelector("header").classList.add('is-scrolling');
//         }else{
//             document.querySelector("header").classList.remove('is-scrolling');
//         }
//     });

//     const menu_bt = document.querySelector('.hamburger');

//     menu_btn.addEventListener('click', function(){
//     menu_btn.classList.toggle('is-active');
    
// });
// }

