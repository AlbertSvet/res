// 

// =============================================================================================================//
// Бургер-меню
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const headerMenu = document.querySelector('.header__menu ');
const body = document.querySelector('body');

   iconMenu.addEventListener('click', () =>{
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
   })
   headerMenu.addEventListener('click', (e) =>{
    if(e.target === headerMenu){
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        headerMenu.classList.remove('active');
        body.classList.remove('lock');
    }
   })


// =============================================================================================================//



// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


