// Get by id
var headingNode = document.getElementById('heading');
console.log({
    element: headingNode
});


// Get by class name
var headingNode1 = document.getElementsByClassName('classTitle');
console.log(headingNode1);

// Get by tag name
var headingNode2 = document.getElementsByTagName('h1');
console.log(headingNode2);

// Get by the query selector 
var headingNode3 = document.querySelector('.heading1');
console.log(headingNode3);

//Get by the inbound query selector 
var headingNode4 = document.querySelector(".box .heading-2");
console.log(headingNode4);


// Get the element by order
var headingNode5 = document.querySelector('html .heading-2:first-child');
console.log(headingNode5);

var headingNode6 = document.querySelector('html .heading-2:nth-child(3)');
console.log(headingNode6);

// Get the element in terms of all 
var headingNode7 = document.querySelectorAll('.heading1');
console.log(headingNode7);