//get all the links of the images
var allImages = document.querySelectorAll( "#gallery img" );

	//console.log( allImages );    - for debugging

var imageSources = [];

for ( i = 0; i < allImages.length; i++) 
	{
	imageSources.push( allImages[i].src );	

	}
 	// console.log( imageSources);  FOR DEBUGGING

//delete all the images on the page
var galleryContainer = document.querySelector( "#gallery" );

galleryContainer.innerHTML = "";

//create the slider container
var slider = document.createElement( "div" );

//attach an id to the slider
slider.id = "slider";

//add the slider to the browser
galleryContainer.appendChild( slider );

//create next and prev buttons
var prev = document.createElement ( "button" );
var next = document.createElement ( "button" );

//add ids to the buttons
prev.id = "prev";
next.id = "next";


//add text to the buttons
prev.innerHTML = "Previous";
next.innerHTML = "Next";

//add the buttons to the slider ; prev should be before next
slider.appendChild( prev );
slider.appendChild( next );

//show the first image to the visitor
slider.style.backgroundImage = "url("+ imageSources[0] +" )";



