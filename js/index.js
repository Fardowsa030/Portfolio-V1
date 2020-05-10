
let menu = document.getElementById("menu");
let hamburger = document.getElementById("burger");

// open/close hamburgermenu
hamburger.addEventListener("click",function(){

  if (menu.style.left ==="0px") {
    menu.style.left ="-100%";
  } 
  else  {
    menu.style.left = "0px";
  }

});

// when menu link clicked close menu
menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
 
      if (event.target instanceof HTMLAnchorElement) {
        menu.style.left ="-100%";
      }
    }


 // smoothscroll
const scroll = new SmoothScroll('.menu a[href*="#"]', {

    speed: 800
   });


let modals = document.getElementsByClassName("modal");
let projects = document.getElementsByClassName("project");
let close = document.getElementsByClassName("close");



// open modal of projects
for (let project of projects) {

    project.addEventListener("click",function(){

    if(project.id == "project1"){
       modals[0].style.height = "100%";
    }
    else if(project.id == "project2"){
      modals[1].style.height = "100%";
    }
    else if(project.id == "project3"){
      modals[2].style.height = "100%";
    }
  })
  
}

// close modal of projects

for (let x of close) {

  x.addEventListener("click",function(){

  if(x.id == "close1"){
     modals[0].style.height = "0px";
  }
  else if(x.id == "close2"){
    modals[1].style.height = "0px";
  }
  else if(x.id == "close3"){
    modals[2].style.height = "0px";
  }
})

}

// close modal of projects when clicked anywhere
window.onclick = function(event) {
  if (event.target == modals[0]) {
    modals[0].style.height = "0px";
  }
  else if(event.target == modals[1]){
    modals[1].style.height = "0px";
  }

  else if(event.target == modals[2]){
    modals[2].style.height = "0px";

  }
  
}
