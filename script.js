// set up canvas & context
// The HTML5 Canvas element is an HTML tag similar to the <div>, <a>, or <table> tag, with the exception that its contents are rendered with JavaScript.  In order to leverage the HTML5 Canvas, we'll need to place the canvas tag somewhere inside the HTML document, access the canvas tag with JavaScript, create a context, and then utilize the HTML5 Canvas API to draw visualizations.

// When using canvas, it's important to understand the difference between the canvas element and the canvas context, as often times people get these confused.  The canvas element is the actual DOM node that's embedded in the HTML page.  The canvas context is an object with properties and methods that you can use to render graphics inside the canvas element.  The context can be 2d or webgl (3d).

// Each canvas element can only have one context.  If we use the getContext() method multiple times, it will return a reference to the same context object.

