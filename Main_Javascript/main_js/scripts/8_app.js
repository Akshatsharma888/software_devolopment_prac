/this is Chapter-7 DOM(Document Object Model) in javascript./

// DOM this is also an object which is accessed using dot notation.
// DOM it combines js and html together.
// html element in a dom is an object.
// it has full control over the web page.
//document.body.innerHTML = 'hello world.'; this will cover the whole page with hello world.
// 'hello world.'

console.log(document.body.innerHTML = 'html')

// use to change title of web page.
document.title = 'DOM'

// use to represent body element in web page.
document.body 

// this is how we can write html elements in a DOM.
document.body.innerHTML = <p>this is good</p>, <button type="ab">good job</button>

// elements of dom
// 1.doument.queryselector :- it help us to get any element from the page and put it inside js.
document.querySelector('button')
document.querySelector('body')

// this is how we change the innerhtml of an elemnt
document.querySelector('button').innerHTML = 'alexa'

// we can also access html elements by using their class elements.
const buttonElement = document.querySelector('.js-class_h1');

// use of dom to access html element.
const inputelemnt = document.querySelector('.js-input')
// this is used to get the value out of an input element.
inputelemnt.value;

// types of event listeners are :-
/*
  1.onclick = click
  2.onkeydown = key press
  3.onscroll = scrolling
  many_more.
*/