const slaidersPlugin = (activeSliderIndex = 0) => {const slydes = document.querySelectorAll('.slide');
  if(activeSliderIndex < slydes.length) {
    slydes[activeSliderIndex].classList.add('active')
  } else slydes[0].classList.add('active');


  const clearClassesActive = () => {
    slydes.forEach(slyde => slyde.classList.remove('active'))
  }

  slydes.forEach(slyde => {
    slyde.addEventListener('click', ()=> {
      clearClassesActive()
      slyde.classList.add('active')
    })
  })
};

slaidersPlugin(2);