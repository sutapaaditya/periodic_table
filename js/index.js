document
  .getElementById("h")
  .addEventListener('click', () => {
  document.querySelector('.element-details').style.display = "flex";
})


document
  .querySelector('.element-details')
  .addEventListener('click', (ev) => {
  document.querySelector('.element-details').style.display = "none";
})

document
  .getElementById("he")
  .addEventListener('click', () => {
  document.querySelector('#helium-details').style.display = "flex";
})


document
  .querySelector('#helium-details')
  .addEventListener('click', () => {
  document.querySelector('#helium-details').style.display = "none";
})
