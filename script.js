const yearNode=document.getElementById("year");
if(yearNode) yearNode.textContent=new Date().getFullYear();
const openingScreen=document.getElementById("openingScreen");
const openButton=document.getElementById("openMessage");
const items=document.querySelectorAll(".reveal");
function revealItems(){items.forEach(item=>item.classList.add("visible"))}
function openMessage(){
  document.body.classList.add("message-open");
  document.body.classList.remove("has-opening");
  if(openingScreen) openingScreen.setAttribute("aria-hidden","true");
  revealItems();
}
if(openingScreen && openButton){
  document.body.classList.add("has-opening");
  openButton.addEventListener("click",openMessage);
}else{revealItems()}
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target)}
    });
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
}else{revealItems()}
