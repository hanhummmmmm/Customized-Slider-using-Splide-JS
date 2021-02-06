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

var btnContainer = document.getElementById("projects-btn-container");
var btns = btnContainer.getElementsByClassName("p-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

//filtering

filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project-block");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
  console.log('hi');
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






});
