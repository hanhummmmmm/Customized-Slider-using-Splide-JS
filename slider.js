document.addEventListener( 'DOMContentLoaded', function () {

var splide = new Splide( '#image-slider', {
    perPage: 4,
    fixedHeight: '300px',
    cover: true,
    gap: '5px',
    type : 'loop',
    pauseOnHover: false,
    autoplay: true,
    interval: 8000,
    breakpoints: {
		1300: {
			perPage: 3,
		},
        1020: {
			perPage: 2,
		},
        750: {
			destroy: true,
		},
	}
} );

splide.mount();

// ALL THINGS FILTERING

// adding "active" class to buttons
var btnContainer = document.getElementById("projects-btn-container");
var btns = btnContainer.getElementsByClassName("p-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
    var category = this.innerHTML.toLowerCase();
    filterSelection(category);
  });
}
var allElements = [];
//filtering
storeElements();
// console.log(allElements);
filterSelection("all"); // Execute the function and show all columns

function filterSelection(c) {
  bringBackElements();
  var x, i;
  x = document.getElementsByClassName("project-block");
  if (c == "all"){
    console.log('test');
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
    
    splide.refresh();
    
  }else{
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
    
    removeElements();
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}




function storeElements(){
  allElements = [];
  $('.project-block').each(function(i,obj){
      allElements.push(obj);
  }); 
}


function removeElements(){
  $('.project-block').each(function(i,obj){
    if (!$(this).hasClass('show')) {
      $(this).remove();
  }
  });
 splide.refresh(); 
}

function removeClones(){
  $('.project-block').each(function(i,obj){
    if ($(this).hasClass('splide__slide--clone')) {
      $(this).remove();
  }
  });
}

function bringBackElements(){
  for(i=0;i<splide.length;i++){
    splide.remove(i);
  }
  if(allElements != null){
    for(i=0;i<allElements.length; i++){
      // $('.splide__list').append(allElements[i]);
      splide.add(allElements[i]);
    }
  }
}




});




