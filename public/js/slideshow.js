var timer = 0;
var sliderContainer = document.getElementById('sliders');
var sliders = document.querySelectorAll('.slider-item');
var sliderControls = document.querySelectorAll('.sliders .controls div');
var sliderIndex = 0;

sliderControls.forEach((element) => {
  element.addEventListener('click', (e) => {
    for (var i = 0; i < sliderControls.length; i++) {
      //get clicked index
      if (sliderControls[i] == e.target) {
        sliderIndex = i;
        AutoSlide();
      }
    }
  });
});

function AutoSlide() {
  clearTimeout(timer);

  // Reset out of range index
  if (sliderIndex > 2) sliderIndex = 0;

  paintSelection();

  for (var i = 0; i < sliders.length; i++) {
    let position = parseInt(window.getComputedStyle(sliderContainer, null).getPropertyValue("right")) + 100 + "%".toString();
    console.log(position);
    // sliderContainer.style.right = position;
  }

  sliderIndex++;

  timer = setTimeout(AutoSlide, 5000);
}

function paintSelection() {
  for (var i = 0; i < sliderControls.length; i++) {
    
    if (i === sliderIndex) sliderControls[sliderIndex].classList.add('active');
  }
}

// AutoSlide();


// If is the last item, add the first element of the array to the end of 
// the array