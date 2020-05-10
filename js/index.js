
var x = document.getElementById("menu");
var burger = document.getElementById("burger");

burger.addEventListener("click",function(){

  if (x.style.left ==="0px") {
    x.style.left ="-100%";
  } 
  else  {
    x.style.left = "0px";
  }

});

x.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
 
      if (event.target instanceof HTMLAnchorElement) {
        x.style.left ="-100%";
      }
    }


const scroll = new SmoothScroll('.menu a[href*="#"]', {

    speed: 800
   });


// Get the modal
var modal1 = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var modal3 = document.getElementById("Modal3");

// Get the button that opens the modal
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
project1.onclick = function() {
  modal1.style.height = "100%";
}

project2.onclick = function() {
    modal2.style.height = "100%";
  }

project3.onclick = function() {
   modal3.style.height = "100%";
  }

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.height = "0px";
}

span2.onclick = function() {
    modal2.style.height = "0px";
  }
span3.onclick = function() {
    modal3.style.height = "0px";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.height = "0px";
  }
  else if(event.target == modal2){
    modal2.style.height = "0px";
  }

  else if(event.target == modal3){
    modal3.style.height = "0px";

  }
  
}
