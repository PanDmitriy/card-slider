const slydes = document.querySelectorAll('.slide');
console.log(slydes);
const clearClassesActive = () => {
  slydes.forEach(slyde => slyde.classList.remove('active'))
}
slydes.forEach(slyde => {
  slyde.addEventListener('click', ()=> {
    clearClassesActive()
    slyde.classList.add('active')
  })
})