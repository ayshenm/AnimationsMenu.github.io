const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const nav = document.querySelector("nav");

open.addEventListener("click",()=>{
  // console.log("tikladimmm");
  container.classList.add("show-nav");
  nav.style.transform = "translate(0)";

});

close.addEventListener("click",()=>{
  container.classList.remove("show-nav");
  nav.style.transform = "translate(-100%)";
})