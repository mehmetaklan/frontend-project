const nav__icon = document.querySelector(".navigation__icon");
const navigation__checkbox = document.querySelector("#navigation__checkbox");
const nav__bottom = document.querySelector(".nav-bottom");
// function menuIcon() {
//     nav__icon.setAttribute("src","img/close-button.svg");
//     function menuIcon() {
//         nav__icon.setAttribute("src","img/Hamburger_icon.svg.svg");
        
//     }   
// }
// menu icon animation
navigation__checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        nav__icon.setAttribute("src","img/close-button.svg");
    } else {
        nav__icon.setAttribute("src","img/Hamburger_icon.svg.svg");
    }
  })
   navigation__checkbox.addEventListener('change', (event) => {
     if (event.currentTarget.checked) {
         nav__bottom.setAttribute("style","display:flex");
     } else {
         nav__bottom.setAttribute("style","display:none");
     }
   })