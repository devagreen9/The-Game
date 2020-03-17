// Strict Mode(“use strict”) helps identify common issues (or “bad” parts) and also helps with “securing” JavaScript. In ES5, the Strict Mode is optional but in ES6, it’s needed for many ES6 features. So most people and tools like babel automatically add “use strict” at the top of the file putting the whole JS code in strict mode and forcing us to write better JavaScript.

"use strict";

// set up canvas & context
// The HTML5 Canvas element is an HTML tag similar to the <div>, <a>, or <table> tag, with the exception that its contents are rendered with JavaScript.  In order to leverage the HTML5 Canvas, we'll need to place the canvas tag somewhere inside the HTML document, access the canvas tag with JavaScript, create a context, and then utilize the HTML5 Canvas API to draw visualizations.

// When using canvas, it's important to understand the difference between the canvas element and the canvas context, as often times people get these confused.  The canvas element is the actual DOM node that's embedded in the HTML page.  The canvas context is an object with properties and methods that you can use to render graphics inside the canvas element.  The context can be 2d or webgl (3d).

// Each canvas element can only have one context.  If we use the getContext() method multiple times, it will return a reference to the same context object.

// setting up the canvas (canv) and context (ctx)

let canv = document.createElement('canvas'); // has to be added to the body
document.body.appendChild(canv); 
let ctx = canv.getContext('2d') //2d is needed here 

//dimensions of the canvas (game)
let height, width;

/* set it dynamically*/ setDimensions();

// event listener for when the window is resized
window.addEventListener('resize', setDimensions);

