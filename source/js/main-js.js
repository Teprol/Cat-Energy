//*функция для кнопки меню
let buttonBurgerNav = function () {
  let button = document.querySelector(".page-header__button-nav");
  let nav = document.querySelector(".page-header__main-nav");
  nav.classList.add("main-nav_close");

  //!проверка на внешний вид кнопки т.к без нее кнопка меняет вид при нажатии и переходе на другую стр
  if (button.classList.contains("page-header__button-nav_close")) {
    button.classList.remove("page-header__button-nav_close");
    button.classList.add("page-header__button-nav_open");
  }

  button.addEventListener("click", function (evt) {
    evt.preventDefault();

    nav.classList.toggle("main-nav_close");
    button.classList.toggle("page-header__button-nav_open");
    button.classList.toggle("page-header__button-nav_close");
  });
};

//*функция для кнопок слайдера на мобилке
let nutritionDemoSlider = function () {
  let buttonWas = document.querySelector(".nutrition-demo-slider__controls-text-was");
  let buttonIs = document.querySelector(".nutrition-demo-slider__controls-text-is");
  let rangeSlide = document.querySelector(".nutrition-demo-slider__controls-rangs");
  let slideFat = document.querySelector(".nutrition-demo-slider__slide-item-fat");
  let slideSkine = document.querySelector(".nutrition-demo-slider__slide-item-skine");

  buttonIs.addEventListener("click", function () {
    rangeSlide.classList.add("nutrition-demo-slider__controls-rangs_became");
    slideFat.classList.remove("nutrition-demo-slider__slide-item_active");
    slideSkine.classList.add("nutrition-demo-slider__slide-item_active");
  });

  buttonWas.addEventListener("click", function () {
    rangeSlide.classList.remove("nutrition-demo-slider__controls-rangs_became");
    slideFat.classList.add("nutrition-demo-slider__slide-item_active");
    slideSkine.classList.remove("nutrition-demo-slider__slide-item_active");
  });
};

buttonBurgerNav();
nutritionDemoSlider();
