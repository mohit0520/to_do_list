
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function newElement(){
if( inputbox.value === ''){
    alert("you must write something!");
}
else{
    let li= document.createElement("li");
    li.innerHTML= inputbox.value;
    listcontainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML="\u00D7";
    li.appendChild(span);
}
inputbox.value="";

}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
