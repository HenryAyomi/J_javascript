/*//we can give a body of function without havre to supply a name.e.g code that should run in funture is  a good example
//let use the js inbuilt fuction  setTimeout
setTimeout(function(){console.log("I WAITED TWELVE SEC")},12000);//this function has two input parameter 1.ia the handler which is just a ?function.2. the the timeout i.e millisec  it will wait before returning output
/*setTimeout(function(){
  console.log("I WAITED TWELVE SEC")
},12000);*/


// FUCTION CAN TAKE FUNCTIONS AS INPUT PARAMETERS
//using both function declaration and expression
//so let write afunction to count how many times we execute our function expression*/
/*let counter= 0;
function timeout(){
  setTimeout(function(){
    console.log('hi ' + counter++);//increase it by one );
    timeout();// scheduking the nexttime the code should run
  },2000)
}
timeout();
/*/
/*let counter =0;
function timeout(){
  setTimeout(function(){
    console.log(`hi ${counter++}`);
    timeout()

  },3000)
}
timeout()*/

//we can have immdiately invoke function expression
(function(){
  console.log('immediately invole function expression(iife)')
})();
