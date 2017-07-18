---
title: var vs let
layout: post
date: 2017-03-31T00:00:00.000Z
path: "/2017-03-31/"
category: "javascript, es6"
description: Why we use let instead of var in js
---

In this post I will explore declaring variables in JavaScript with *let* and *var*. In an aside in a previous post I stated that as a new developer there are a few paths one can take in learning Javascript. One fork in the road that I encountered was whether or not I should learn ES6 syntax even though I was in an early stage of learning JavaScript. As I have adopted ES6 syntax and declaring variables with *let* has become second nature, this post walks through the [MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) on *let* to explore the differences between *let* and *var*.

So prior to ES6, we’d declare variables with *var*.

However, it is definitely possible to declare a variable without *var*! But doing so results in an oopsie, it places the variable in the global scope (when not using strict mode). This becomes problematic because code gets exposed to the entire application, increasing the opportunity for mutation and memory leaks in the browser.

```
function sayMyName(){
  myName = ‘rachel’;
  console.log(myName) // 'rachel'
}
/* here we are outside of the function */
console.log(myName); // ‘rachel’ 
function myNameWithVar(){
  var nameUsingVar = ‘rachel’;
  console.log(nameUsingVar); // ‘rachel'
}

/* here we are outside of the function */
console.log(nameUsingVar) // Uncaught ReferenceError
```


however both of these functions are in the global scope themselves (this === window in the browser), we would need to wrap them in an object in order for their scope to not be global

<h4>what else do we know about variable declarations</h4>

When we use *var* and *let* these declarations are hoisted. var is hoisted to the top of the lexical scope and its values is assigned to undefined, while let is hoisted to the top of the block scope.

```
function hoistedExampleVar(){
  console.log(iAmHoisted); // undefined
  var iAmHoisted = ‘value declared here’;
  console.log(iAmHoisted !== undefined); // true
}
function hoistedExampleLet(){
  console.log(iAmHoisted); // Uncaught ReferenceError
  let iAmHoisted = 'this is a let assignment';
}
```

Although it is hoisted to the top, the variable declared with *let* lives in a “temporal dead zone” until it is assigned a value.
<h4>what’s up with let</h4>

When we declare a variable with *let* , the value is no longer scoped to the entire functional scope (unlike *var*), but to its block.
```
function usingVar(){
  var x = ’This is my value’;
  
  if ( true ){
    var x = ’Now my value is this’;
    console.log(x) // ’Now my value is this’;
  }
  
  console.log(x); // ’Now my value is this’;
}

function usingLet(){
  let x = ’This is my value’;
  
  if ( true ){
    let x = ’Now my value is this’;
    console.log(x) // ’Now my value is this’;
  }
  
  console.log(x); // ’This is my value’;
}
```
<h4>but por que let?</h4>

but why let?

*let* lets us keep code a bit simpler, this is illustrated by taking a look at this loop.
when we use *var* to declare variables, we need to enclose function calls in an *IIFE*. This closure allows us to maintain access to the changing variable i on each iteration of the loop when the function is finally invoked.
```
for (var i=0; i < 3; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000)
}
// 3
// 3
// 3
for (var i = 0; i < 3; i++) {
  setTimeout(function(thisIsTheValue){
    return ()=> {
      console.log(thisIsTheValue);
    };
  }(i), 1000);
}
// 0
// 1
// 2
```
when we use *let* , since the variable is scoped to the block, we no longer have to enclose it in a function to make sure that we keep the correct variable reference.
```
for (let i=0; i < 3; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000)
}
// 0
// 1
// 2
```
wow so little code!
<h4>other things to note with let</h4>

redeclaring a variable with *let* results in a SyntaxError
using *let*  in switch statements will also result in a SyntaxError since different case statements belong to a single block!

check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) on let!
