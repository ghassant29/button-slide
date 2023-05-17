document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  let activeButton = 0;

  buttons[activeButton].classList.add("active");

  function showNextButton() {
    // if (activeButton === 0) {
    //   return;
    // }

    buttons[activeButton].classList.remove("active");

    activeButton = (activeButton - 1 + buttons.length) % buttons.length;

    buttons[activeButton].classList.add("active");
    buttons[activeButton].classList.add("swipe-right");
  }

  function showPreviousButton() {
    buttons[activeButton].classList.remove("active");

    activeButton = (activeButton + 1) % buttons.length;

    buttons[activeButton].classList.add("active");

    buttons[activeButton].classList.add("swipe-left");
  }

  const buttonContainer = document.querySelector(".button-container");
  const hammertime = new Hammer(buttonContainer);
  hammertime.on("swipeleft", showNextButton);
  hammertime.on("swiperight", showPreviousButton);
});
