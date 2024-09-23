const slides = document.querySelectorAll(".slide")
let current = 0

initializer()

function initializer() {
  
  if(slides.length > 0) {
      slides[current].classList.add("active-slide")
      intervalId = setInterval(next, 3000)
    }
}


function show(index) {
  let previous = current

  if (index >= slides.length) {
    current = 0
  }

  else if (index < 0) {
    current = slides.length - 1
  }

  else {
    current = index
  }
  
  
  slides.forEach(slide => {
    slide.classList.remove("active-slide" , "prev-slide");    
  })

  slides[previous].classList.add('prev-slide');
  slides[current].classList.add("active-slide")
}

function next(){
  show((current + 1) % slides.length);
}


