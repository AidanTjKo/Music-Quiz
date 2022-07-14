const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (function changingValue(){
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2.75) + "%";
  slideValue.classList.add("show");
  console.log(value);
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});