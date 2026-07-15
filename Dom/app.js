const sel = document.querySelector("select");
const h2 = document.querySelector("h2");

sel.addEventListener("change", function() {
    h2.innerText = `You have selected ${this.value} device`;
});

const fileinp = document.querySelector("#file");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  fileinp.click();
});

fileinp.addEventListener("change", function(e) {
  const file = e.target.files[0];
  if(file){
    btn.innerText = file.name;
  }
});


const ul = document.querySelector("ul");

ul.addEventListener("click", function(e) {
  e.target.classList.toggle("lt");
  
});