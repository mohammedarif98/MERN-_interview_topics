

//! -------------------------------- create a array and objects

// let arr = []                                     //* Array Literal
// let arr = new Array()                            //* new Array()
// const arr = Array.of(1, 2, 3, 4, 5);             //* Using Array.of()
// const arr = Array.from("arif");                  //* Using Array.from()
// let arr = [..."arif"]                            //* Using Spread Operator
// console.log(arr);

// let object = JSON.parse('{"name": "arirf", "Age":23}')                                                  //* From JSON
// let object = {}                                 //* object literals
// let object = Object.create({})                  //* create method
// let object = new Object()                       //* new Object()
//                                                 //* Constructor Function, ES6 class
// console.log(object);


//! -------------------------------- check array is empty and object is empty

// let arr = ["arif", "roshan", 23424, false, 35164];
// //* splice() is modify the orginal array and retrun removed element. slice() return new array contatin extracted element and its not modify orginal array
// let newarr = arr.splice(0,arr.length);     
// console.log(arr.length ? "not empty array" : "empty array");
// console.log(newarr);      


// let obj = {}
// console.log(Object.keys(obj).length === 0 ? "empty object" : "not empty object");

//! ---------------------------------
/* ---------------------------------
    * var declarations are hoisted and initialized with undefined.
    * let and const are hoisted too, but remain in the Temporal Dead Zone (TDZ) until their declaration is reached.
------------------------------------ */

// var name = "arif";
// function testScope(){
//     console.log(name);               // undefined in var and refernce error (Cannot access 'name' before initialization) in let and const
//     // var name = "nmohammed arif"
//     let name = "nmohammed arif"
// }
// testScope()

/* ---------------------------------
    * let age = 23 creates a variable named age in the outer scope.
    * Inside the block, var age = 23 is not block-scoped. var is function-scoped (or global-scoped if not inside a function), 
    * so it tries to declare another variable named age in the same scope.
    * which is illegal because let and var cannot declare the same identifier in the same scope.
--------------------------------- */

// // var age = 23
// let age = 23
// {
//     console.log(age);
//     var age = 23;
//     // let age = 23;
// }


/* ---------------------------------
    * fname and lname are declared in the global scope, so they are accessible inside the test() function due to lexical scope.
    * num1 is declared using let and num2 using var inside the function.
    * Both variables are local to the function because JavaScript creates a separate function scope for variables declared inside a function.
--------------------------------- */

// let fname = "mohammed"
// let lname = "arif"
// function test(){
//     console.log(fname, lname);
//     let num1 = 234
//     var num2 = 234
// }
// test()
// console.log(num2);
// console.log(num1);


//! ---------------------------------

// function demo() {
//     let a = 10;
//     var b = 20;
// }
// demo()
// console.log(a); 
// console.log(b); 


// //* let is block-scoped.
// //* var is not block-scoped; it is function-scoped.

// { 
//     let a = 10;
//     var b = 20;
// }
// console.log(a); 
// console.log(b); 

//! ---------------------- shadowing -----------------------
// var a = 10;
// {
//     let a = 200
//     console.log(a);
// }
// console.log(a);

//!-------------------- illegal shadowing ----------------------
/* ----------------------------------
    * let a = 200 creates a block-scoped variable.
    * var a = 100 tries to declare another variable with the same name in the same (global/function) scope.
    * JavaScript does not allow a let and a var declaration with the same identifier in the same scope.
-------------------------------------- */

// let a = 200
// {
//     var a = 100
//     console.log(a);
// }
// console.log(a);

// ! ------------------- js auto semicolon insertion ---------------------

// function test(){
//     return
//         {name : "arif"}
// }
// console.log(test());

//! ----------------------  -----------------------

// async function test(){      // async functions always return a Promise
//     return 5                // js Automatically wrapped in Promise.resolve(5)
// }
// console.log(test());        // So test() returns a Promise object, not 5 directly.
// test().then(console.log)    // .then()` **unwraps** the Promise and gives you the actual value `5`


// async function test1(){
//     return { name: "arif", age: 25, email: "arif@gamil.com" }
// }
// console.log(test1());
// test1().then(console.log)


//! ----------------------  -----------------------

// let obj = {name: "arif", age: 32, place: "ern"};
// let {name: username, age, place} = obj;
// console.log(username, age, place);

// [a] = [1,2,23,,42]
// console.log(a);

// let obj = {name: "arif", age: 32, place: "ern"};
// console.log(obj.length);                            //* undefined, becuase object not have length property. use object.keys() first
// console.log(Object.keys(obj).length);

//! ----------------------  -----------------------

// let a = 1;
// console.log(++a);        //* ++a → Pre-increment, First increment Then use the value
// console.log(a++);        //* a++ → Post-increment, first use value then increment
// console.log(a);
// console.log(++a + a++);

//! ------------------------------------------------

// let obj = {a:1, b:2}
// let arr = [];
// for(let key in obj){
//     // arr.push([key, obj[key]]);
//     arr.push({[key]: obj[key]});
// }
// console.log(arr);

// let arr1 = Object.entries(obj).map(([key, value]) => ({ [key]: value }));
// console.log(arr1);

//! ------------------------------------------------

// let obj1 = { a: 1 };
// console.log(obj1);               
// console.log(`${obj1}`);          // [object Object]
// console.log(String(obj1));       // [object Object]
// console.log(obj1.toString());    // [object Object]

// console.log([].toString());
// console.log([] == false);           // its check like 0 == 0 after the coersion
// console.log([] === false);
// console.log(typeof NaN);



// //! ------------------------------------------------

// 'use strict'
// name = "arif"
// function greet(name){
//     console.log("hello", this.name);
//     // return `hello, ${this.name}`
// }
// greet("arif");

// let obj1 = greet()      //* this refers to the global object (window in browser), this.name is undefined because no name exists on the global object.
// let obj2 = new greet()  //* constructor call by using new
// console.log(obj1);      //* greet() doesn't return anything → obj1 is undefined.
// console.log(obj2);      //* Creates a blank object {}, obj2 is an empty object greet {} because nothing was assigned to this inside.


//! ------------------------------------------------
// let newArr = [1].push(11,111);
// console.log(newArr);
// console.log(newArr.push(2));

// let newarr = [124124]
// // let newarr = [124124].push(232323)
// newarr.push(324242)
// console.log(newarr);

// console.log([1,2,3,4].push(111,222,333));               //* its retun the length not array element


//! ------------------------------------------------ array length to zero

// let arr = [1,2,3,4,5];
// // arr.length = 0;
// // arr=[]
// // arr.splice(0, arr.length)
// console.log(arr);


//! ------------------------------------------------
/* ------------------------------------------------
    * await always pauses the async function and schedules the remaining code as a microtask, even if the promise is already resolved. 
    * The synchronous code continues executing first. Once the call stack is empty, the event loop processes the microtask queue and
    * resumes the async function. Therefore the output is:
---------------------------------------------------*/
//*  Even though the promise is already resolved, await always pauses the async function and moves the remaining code to the Microtask Queue.
//* is not executed immediately. The function is temporarily suspended.
//* JavaScript does not wait for the async function. It moves to the next line: console.log("end");
//* After all synchronous code finishes, JavaScript checks the Microtask Queue. The continuation of the async function is waiting there:

// async function test(){
//     console.log("start");
//     await Promise.resolve()        
//     console.log("after await");
// }
// test()
// console.log("end");

//! ----------------------------------------------------

// let right = !false
// Promise.resolve().then(() => right = true )
// setTimeout(() => { right = true }, 0)
// console.log("hello");
// console.log(right);
// while(!right){
//     console.log(" iam right");
// }
// console.log("end");

//! ----------------------------------------------------

// let [a, b=2] = [1];
// console.log(a, b);

// let {x, y=10} = {x: "arif"}
// console.log(x, y);

// let obj = {name: "mohammed", age: 23, gender: "male"}
// let  {name: username, age, gender} = obj;
// console.log(username, age, gender);

//! ----------------------------------------------------

// console.log({} == false);
// console.log({} === false);
// console.log({} == {});
// console.log({} === {});
// console.log({} === !{});
// console.log({} == !{});
// console.log({} == "[object Object]");

// console.log("arif" + 112);
// console.log("arif" - 1434);
// console.log(1234 + "arif");
// console.log(1234 - "arif");
// console.log(undefined + "arif");
// console.log(undefined - "arif");
// console.log("arif" + undefined);
// console.log("arif" - undefined);
// console.log("arif" - NaN);
// console.log("arif" + NaN);
// console.log(isNaN("arif"));
// console.log(typeof new Object({}));

/* ----------------------
    ! [object Object] is JS default string representation of a plain object. first word is the type category, second word is the constructor tag."
    * First object lowercase — the type (always "object" for objects), Second ObjectUppercase — the tag/constructor name
    * Every object in JavaScript inherits toString() from Object.prototype. When called, it returns a string in the format [type tag].
--------------------------*/
// console.log(+{});            // NaN
// console.log(+[]);            // 0
// console.log(+[1]);           // 1
// console.log(+[1,2]);         // NaN
// console.log(+"123");         // 123
// console.log(+"");            // 0
// console.log(+true);          // 1
// console.log(+false);         // 0
// console.log(+null);          // 0
// console.log(+undefined);     // NaN
// console.log([[]].toString()) // " "
// console.log({}.toString());  // "[object Object]"
// console.log({}+{});          // [object Object][object Object]
// console.log({}+[]);          // [object Object]
// console.log([]+[]);          // " "
// console.log([]+{});          // [object Object]
// console.log([[]]+{});        // [object Object]
// console.log([[]]+[[]]);      // " "
// console.log([{}] + [{}]);    // [object Object][object Object]
// console.log({}+[{}]);        // ({}).toString() + [{}].toString()  ----->  "[object Object]" + "[object Object]"
// console.log({}+[[]]);        // {}.toString() + [[]].toString()    ----->  "[object Object]"
// console.log({});             // {}


// console.log([] + []);
// console.log([] - []);        //* type convertion happen, - enforce to type converstion
// console.log([] == []);
// console.log([] === []);
// console.log([1] + [1]);
// console.log([1] + []);
// console.log([1] - []);
// console.log([[]] + [[]]);
// console.log([[]] - [[]]);
// console.log([[1]] - [[1]]);
// console.log([[1]] - [[]]);
// console.log([[]] - [[1]]);
// console.log({} + {});            //* "[object Object]" is JavaScript’s default string representation of a plain object. object → internal data type,
// console.log([] - {});                //* NaN
// console.log([] + true);                
// console.log([] - true);                
// console.log({} - true);                
// console.log([11] + [11]);
// console.log([11] + ["arif"]);
// console.log([11] - ["arif"]);        //* NaN
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(![]+true);
// console.log(![]-false);
// console.log([]+true);
// console.log([]-true);
// console.log({}+[[]] + !false);
// console.log({}+[[]] + !true);
// console.log([]+[[]] + !false);
// console.log([]+[[]] + !true);
// console.log([]+[[]] + !![]);
// console.log(0.1 + 0.1 == 0.3);
// console.log(0.1 + 0.1 === 0.3);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(1<2<3);
// console.log(3>2>1);

// console.log("" || "arif");          //* Returns the first truthy value — if left side is falsy, returns right side.
// console.log("" ?? "arif");          //* ?? only checks for null or undefined
// console.log("" && "arif");          //* Returns the first falsy value — if left side is falsy, returns left side immediately.
// console.log("hi" || "Arif");
// console.log("" && "hello");
// console.log(undefined ?? "arif");
// console.log(null ?? "default");
// console.log(0 ?? "default");
// console.log(0 || "default");

// console.log([] == []);
//* When comparing two objects (arrays are objects), JavaScript first checks whether they are the same reference, 
//* JavaScript does not convert both arrays to strings here because both operands are already objects. For ==, if both operands are objects,
//* it compares references directly.
// console.log([1] == []);             
// console.log([1] == [1]);
// console.log([] != []);
// console.log([] == true);             //* [] == true --> "" == 1 --> 0 == 1 --> false
// console.log([] !== true);
// console.log([] == false);
// console.log(!!true);
// console.log(!!false);

// console.log([] == ![]);                  //* Boolean([]) = true ---> ![] = false --> false -> 0 --> [] == 0 --> [].toString() // "" --> "" == 0 --> 0 == 0
// console.log(undefined == null);          //* true, Abstract equality (==) performs type coercion before comparison
// console.log(undefined === null);         //* false, Strict equality (===) does not perform type coercion and requires same type and value
// console.log([]);                         //* []  (object, truthy)
// console.log(![]);                        //* false (boolean), boolean false (because NOT applied). ![] evaluates to false: The logical NOT operator (!) converts the truthy empty array to false
// console.log(!![]);                       //* true  (double negation → converts object to boolean)

// console.log(Infinity > 10);              //* Infinity represents a value greater than any finite number.
// console.log(-Infinity > 10);             //* -Infinity represents a value smaller than any finite number.

// console.log(undefined++);
// console.log(2+2);
// console.log("22"-"2");                   //* -,*,/ are forces to number conversion
// console.log("2"+"2");
// console.log(2+2-2);
// console.log("2"+"2"-"2");
// console.log(4+"2"+2+4+25);
// console.log(4+"2"+2+4+"25"+2+2);
// console.log("adfs"-2342); 
// console.log(new Number("21") === 21);    //* creates a Number object, not a primitive number. Number object  vs  number primitive , ---→ false
// console.log(new String(21) === 21);      //* compare object vs number ----→ false

// console.log("10">6);
// console.log("10">"6");

//! --------------------------------------------------------------
/* -----------------------
    * Promise.reject("Error") creates a rejected promise
    * await does NOT block the thread
    * It does this instead: Pauses function execution --> Wraps remaining code into a microtask --> Removes function from call stack
-------------------------*/

// async function test(){
//     try{
//         console.log("1");
//         // await Promise.reject("Error") //* This pauses the async function, The rejection is handled asynchronously, Execution goes outside the function temporarily
//         await Promise.resolve()
//         console.log("2");
//     }catch(error){
//         console.log("3")
//     }finally{
//         console.log("4")
//     }
// }
// test()
// console.log("5")    // after this line exicute, Back to async function, handle The rejected promise triggers catch:


//! ------------------------------------------------

// async function test(){      //* Async functions ALWAYS return a Promise
//     return "hello";         //* This becomes: return Promise.reolve("hello")
// }
// console.log(await test());
// console.log(test());        //* You are logging the Promise, not the value

// async function test(){       //* test() → returns Promise { "hello" }
// return "hello";
// }
// // test().then((data) => console.log(data))
// async function main(){
//     console.log(await test());       //* await test() → unwraps the promise
// }
// main();

// async function test(){
//     console.log("hello");
// }
// await test();

//! ------------------------------------------------

// let aaa = 0;
// let fn2 = (aaa++, aaa++, aaa=>aaa+1)
// let b = fn2(a);
// console.log(b);

// let aaa = 0;
// let b = (aaa++, aaa++, aaa=>aaa+1)(a)
// console.log(b);

//! ------------------------------------------------ string mutatuing

// let name = "mohammed arif";
// // name = name.slice(0,4);
// name = "M" + name.slice(1)      //* There is no real mutation for strings
// console.log(name);

//! ------------------------------------------------ IMPORTANT
/*------------------------------
    * This is a classic closure + var hoisting problem.
    * var is function-scoped (not block-scoped). So there's only one i shared across all iterations, not a separate i per loop.
    * setTimeout is async. All 5 callbacks are scheduled and the loop finishes before any of them run. By that time, i has already reached 5.
    * use -> let is block-scoped, so each iteration gets its own fresh copy of i. Each callback closes over its own i, not a shared one.
    * The IIFE immediately captures the current value of i as j, creating a new scope per iteration.
-------------------------------- */
// for(var i=0; i<5; i++){     //* var is function-scoped, There is only ONE i variable, Not a new i for each loop iteration
//     setTimeout(() => {      //* setTimeout is asynchronous, Loop finishes first → i becomes 5, Then callbacks run → all see same i = 5
//         console.log(i);
//     })
// }

// for(var i=0; i<5; i++){
//     ((j) => setTimeout(() => {
//         console.log(j);
//     }))(i)
// }

//! ------------------------------------------------

// a++
// console.log(a);
// var a = 10;

// let x = 10
// console.log(++x);       //* ++x means increment first, then use the value.
// console.log(x);

// let y = 10
// console.log(y++);       //* ++y means increment first, then use the value.
// console.log(y+1);

//! ------------------------------------------------

// let key = "age"
// let obj = { name: "arif" };
// obj['fullname'] = "mohammed arif"
// obj[key] = 34
// console.log(obj);

// let obj = { 1: "one" }
// console.log(obj[1]);

// let obj = { name: "arif" };
// obj['name'[0]] = "mahammed"         //* { name: 'arif', n: 'mahammed' }
// obj['name'[1]] = "mahammed"         //* { name: 'arif', n: 'mahammed', a: 'mahammed' }
// console.log(obj);

// let obj = {fullname: "arif"};
// let arr = ["fname","lname"];  
// obj[arr[0]] = "mohammed"
// obj[arr[1]] = obj['fullname']
// obj['fullname'] = `${obj.fname} ${obj.fullname}`
// console.log(obj);

// let user = {
//     fullname: "mohammed arif",
//     fname: "mohammed",
//     lname: "arif"
// }
// for(let u in user){
//     console.log({[u]: user[u]});
// }

//! ---------------------------------------------------------------
//* A function object is truthy, so the block runs, but the name xyz is not available in the surrounding scope. Therefore: typeof xyz // "undefined"

// let abc = 123
// if(function xyz(){}){
//     console.log(typeof xyz);     //* xyz is not available outside the function body. In modern JavaScript this gives: "undefined" 
//     console.log(typeof abc);
//     abc = abc - typeof(xyz)
//     abc = abc + typeof(xyz)
// }
// console.log(abc);


//! ----------------- user Authentication ------------------- IMPORTANT
// function Authentication(email, password){
//     return new Promise((res, rej) => {
//         console.log("user loggin please wait...");
//         setTimeout(() => {
//             if(email === 'arifcs@gmail.com' && password === "qwerty1234"){
//                 res({message: "userLogged successfully", data :{name: "mohammed arif", email: "arifcs@gmail.com"}})
//             }else{
//                 res(new Error("Invalid credential"));
//             }
//         }, 1000)
//     })
// }
// Authentication("arifcs@gmail.com", "qwerty1234")
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))


//! -------------------------------------------------- IMPORTANT

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

//! -------------------------------------------------- IMPORTANT

// console.log("start");

// function test(name){
//     console.log("normal function ", name);
// }

// let asynFunc = new Promise((res, rej) => {
//     let name = "sreeekanth"
//     res(name);
// })

// asynFunc.then((res) => {
//     console.log(res);
// })  

// setTimeout(() => {
//     console.log("timmer func"); 
// },1000)

// test("mohammed arif");

// console.log("end");


//! ----------------------------------------------------- IMPORTANT

// let a = {};         
// let b = {k: "b"};
// let c = {k: "c"};

// //* Object keys in JavaScript objects can only be strings or symbols. So b is converted to a string: String(b)--> which becomes: "[object Object]"
// //* a["[object Object]"] = 1; ------------->  a = {"[object Object]": 1 };
// a[b] = 1;       

// //* Again, c is converted to: "[object Object]"  -----> a["[object Object]"] = 2; and This overwrites the previous value.
// a[c] = 2;

// //* now a become a = {"[object Object]": 2};
// console.log(a);

// //* b is again converted to: "[object Object]" ----> a["[object Object]"] and resturn 2;
// console.log(a[b]);      
// //* c is again converted to: "[object Object]" ----> a["[object Object]"] and resturn 2;
// console.log(a[c]);      



// let obj = {}
// let name = {key: "name"}
// let rollnumber = { key: "rollnumber"}

// obj[name] = "arif"
// obj[rollnumber] = 23;
// console.log(obj[name]);
// console.log(obj[rollnumber]);


//! -----------------------------------------------------

// let res1 = NaN ? console.log("Dfadsf") : console.log("wwwww")
// console.log(res1);
// let res2 = [] == true ? console.log("ok") : console.log("not ok");       //* 0 == 1 // false
// console.log(res2);
// let res3 = [] ? console.log("ok") : console.log("not ok");
// console.log(res3);


//! -----------------------------------------------------

// for(let i=1; i<=10; i++){
//     setTimeout(() => { console.log(i)}, i*1000);
// }

// for(let i=10; i>=0; i--){
//     setTimeout(() => { console.log(i) }, (10-i)*1000)
// }

// let intervel = setInterval(() => { console.log('hi') },500)
// setTimeout(() => { clearInterval(intervel) }, 5000)


//! -----------------------  EVENT LOOP  ---------------------------- IMPORTANT

// console.log("start");

// Promise.resolve(3).then((res) => {
//     console.log(res);
//     setTimeout(() => { console.log(7) },100)
// })

// new Promise((res, rej) => { console.log(4) })

// setTimeout(() => { console.log(8) },0)

// Promise.resolve("hi").then((res) => { console.log(res) })

// setTimeout(() => { console.log(5) },-100)

// console.log("end");

//! -----------------------------------------------------

// console.log("start");
// Promise.resolve("hi").then(console.log);
// new Promise(() => console.log(4));
// console.log("end");


//! --------------------------------------------------------

// function test(a=2, b=3){
//     console.log(a+b);
// }
// test(null, undefined)       //* null, undefined

//! -------------------------------------------------------- IMPORTANT

// function getOtp(len){
//     let otp = "";
//     let char = "qwertyuiopasdfghjklzxcvbnm1234567890";
//     for(let i=0; i<len; i++){
//         otp +=  char[Math.floor(Math.random()*char.length)]     //* [] → used to access a specific character by index, Needed to pick random single character, not whole string
//         // otp +=  Math.floor(Math.random()*10)                 //* //* random() Generates a floating-point number range from 0-1, random*10 is scale 0-10, floor() Removes the decimal part
//     }
//     return otp
// }
// console.log(getOtp(5));


//! ------------------------------------------------------- IMPORTANT

// let obj = {
//     a: 2,
//     b: 23,
//     test: function(){
//         console.log(this.a, this.b);
//         setTimeout(function(){                  //* in regular function call, this is not object
//             console.log(this.a, this.b);        //* this refere window object in no-strict mode, strict mode get undfined
//         })
//         setTimeout(() => {                      //* in arrow function, do not have thier is own this, ther inherit from parent scope
//             console.log(this.a, this.b);        //* parent scope = test() --> this === obj
//         })
//     }
// }

// obj.test()                   //* Function is called as a method, this refer to obj

//! A method is a function that is a property of an object and is called using that object.
// let res = obj.test           //* When a method is assigned to a variable, it loses its object context. Object context lost → this becomes global / undefined.
// res()                        //* Function is called as regular function, this will lost

// res.call(obj)                //* Use bind, call, or apply to control this.
// res.apply(obj)
// let result = res.bind(obj)
// result();

//! -------------------------------------------------------
/* ---------------------------
    * calculator() creates a closure, and all returned functions share the same lexical environment, so they access and modify the same count.
------------------------------ */ 

// function calculator(){
//     count = 0;
//     return {
//         increment : (n) => count += n,
//         decrement : (n) => count -= n,
//         multiply : (n) => count *= n,
//         reset : () => count = 0,
//         getValue : () => count
//     }
// }

// let result  = calculator();
// result.increment(3)
// result.multiply(5)
// result.decrement(5)
// console.log(result.getValue());
// result.reset()
// console.log(result.getValue());

//! ---------------------- REMOVE FALSE VALUE ----------------------  IMPORTANT

// let arr = [1,2,0,"",false,[], {}];
// let clean = [];
// for(let n of arr){
//     if(n){
//         clean.push(n)
//     }
// }
// console.log(clean);

// let arr = [0,false,"",null,undefined,NaN,1," ",true,"arif",[],{}];

// let res = arr.filter(Boolean)
// console.log(res);

// let truthyValaue = arr.filter(item => item) 
// console.log(truthyValaue);

// let falsyValue = arr.filter(item => !item) 
// console.log(falsyValue);


//! -------------------- ARGUMENSTS ---------------------------------
/* ---------------------
    * arguments is an array-like object available inside non-arrow functions that contains all the arguments passed to that function.
--------------------------- */
// function testing(){
//     // arguments[1] = 100
//     console.log(arguments);
// }
// testing(10, 30)


//! ---------------------------- PROMISE RETRY -------------------------------------   IMPORTANT

// let apiResponse = { statusCode: 200, userData: {username: "mohammed arif", email: "arif@gmail.com", contact: 545532152523} };
// function fetchUser(statusCode){
//     return new Promise((res, rej) => {
//         if(statusCode === apiResponse.statusCode){
//             res(apiResponse.userData);
//         } else {
//             rej(new Error("something went wrong"));
//         }
//     });
// }
// fetchUser(200)
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))


//! --------------------------------- Api Retrying -------------------------------------------  IMPORTANT

// const fetchApiData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     if(!response.ok){
//         throw new Error(`Request failed with status ${response.status}`);
//     }
//     return response.json();
// };

// const retryApiCall = async (fn, retries, delay) => {
//     try{
//         const response = await fn();
//         console.log("API Response:", response);
//         return response;
//     }catch(error){
//         if(retries === 0){
//             console.error("Final Error:", error.message);
//             throw error;
//         }
//         console.log(`Retrying... Attempts left: ${retries}`);
//         await new Promise(resolve => setTimeout(resolve, delay));
//         return retryApiCall(fn, retries - 1, delay);
//     }
// };
// retryApiCall(fetchApiData, 3, 1000 );


//! ----------------------------------------------------
/* -------------------------------
    * Functions are objects in js. So just like you can add properties to an object, you can add properties to a function too.
------------------------------------- */
// function demo(){
//     console.log('hello');
// }

//* demo() is called and print hello its not resturn anything, so it return undefined --> undefined.c = "hi iam mohammed arif" --> This causes an error:;
// demo().c = "hi iam mohammef arif";    

// demo.c = "hi iam mohammef arif";        //* // adding a property to the function object
// console.log(typeof demo);
// console.log(demo);                      //* [Function: demo] { c: 'hi iam mohammef arif' }
// console.log(demo.c);


//! --------------------------------------------- IMPOTANT

// const postsArray = [];
// function fetchPostFromUser(userId) {
//     console.log(`fetching post of user : ${userId}`);
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then((response) => {
//             if (!response.ok) return Promise.reject("Failed to fetch posts");
//         return response.json();
//         })
//         .then((posts) => {
//             postsArray.push(...posts);      //* add posts into array
//             return postsArray;
//         });
// }

// // fetchPostFromUser(2)
// //     .then((result) => { console.log("Final array:", result) })
// //     .catch((error) => { console.log(error) });

// Promise.all([ fetchPostFromUser(1), fetchPostFromUser(2), fetchPostFromUser(3)])
//     .then(() => { console.log("all post: ", postsArray)})
//     .catch((error) => { console.log(error) })


//! ---------------------------- IMPORTANT --------------------------------------
/* ---------------------------------------------
    await pauses the async function and schedules the remaining code as a microtask. After synchronous code finishes,
    microtasks run before macrotasks like setTimeout.
 ---------------------------------------------- */

// async function testASync(){
//     console.log("a");               //* Executes immediately when the function runs
//     setTimeout(() => {              //* This goes to the macrotask queue, not executed now.
//         console.log('B');
//     },0)
//     await Promise.resolve();        //* await pauses the async function and moves the remaining code to the microtask queue.
//     console.log("c");               //* This runs later when microtasks are executed, reason = await pauses the async function and schedules the remaining code as a microtask.
// }
// testASync()
// console.log("D");                   //* Runs immediately after calling the async function

//! ------------------------------------------------------ IMPORTANT

// let a = "this is key"
// let obj = {
//     ['a'] : "this is value",
//     [a]: 'also value'
// }

// console.log(obj);
// console.log(obj.a);
// console.log(obj["this is key"]);
// console.log(['a'].toString());


//! -------------------------------------- IMPORTANT

// const a = {name: "dsfsa"}
// a.name = "mohammed arif"     //* modifying like this is allowed
// a = {}                       //* const allows mutation, but not reassignment
// console.log(a);

// const name = [1,2,3,4,5]
// name[2] = 300;                  //* //* modifying like this is allowed
// // name = []
// console.log(name);


//! -------------------------------------- binary search ----------------------------

// function binarySearch(arr, target){
//     let left = 0
//     let rigth= arr.length-1
//     while(left <= rigth){
//         let mid = Math.floor(left+(rigth-left)/2)
//         if(target === arr[mid]){
//             return mid
//         }else if(target < arr[mid]){
//             rigth = mid-1
//         }else{
//             left = mid+1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([2,4,6,57,68,98,129,909], 98));


//! ---------------------------------
/* --------------------------
    The output is undefined because var name inside the function is hoisted to the top of the function scope and initialized with undefined.
    This local variable shadows the global name, so console.log(name) accesses the local variable before the assignment occurs. Therefore,
    it prints undefined.
--------------------------------- */

// var name = "qwe"
// function test(){
//     console.log(name);
//     var name = "2134314"
// } 
// test()


//! ---------------------------------


// let obj = {
//     name: "arif",
//     display : function(){
//         return this.name
//     }
// }

// let res1 = obj.display
// console.log(res1());
// let res2 = obj.display()
// console.log(res2);


// if([] == true) {
//     console.log("234");
// }else{
//     console.log("af");
// }


//! --------------------------------- 
//! ---------------------------------

// let obj = {fname: "arif"}
// let name = "Mohamemd"
// // let name = "toString"

// if(obj[name]){                      //* obj["mohammed"] // undefined -----> there is no property named "mohammed".
//     console.log("hi");
// }else{
//     console.log("bye");
// }

//! --------------------------------- get all keys, values from nested obj ---- IMPORTANT

// let obj = {
//     name : "mohammed arif",
//     obj2 : {
//         lang : "js",
//         obj3 : {
//             frameWork : "Express"
//         }
//     }
// }

// function geyKeyValue(obj, path=""){                     //* clear path key value
//     for(let key in obj){
//         let currentPath = path ?   `${path}.${key}` : key
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             geyKeyValue(obj[key], currentPath)
//         }else{
//             console.log(`${currentPath} : ${obj[key]}`);
//         }
//     }
// }
// geyKeyValue(obj)

// function getKeys(obj, keys=[]){                              //* get the keys only
//     for(let key in obj){
//         // console.log(key);
//         keys.push(key)
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             getKeys(obj[key], keys)
//         }
//     }
//     return keys
// }
// console.log(getKeys(obj));


// function getValues(obj, values=[]){                              //* get the Values only
//     for(let key in obj){
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             getValues(obj[key], values)
//         }else{
//             values.push(obj[key])
//         }
//     }
//     return values
// }
// console.log(getValues(obj));


// function getKeys(obj){                                          //* get like key value pair
//     for(let key in obj){
//         if(typeof obj[key] === "object" && obj[key] !== null){
//             getKeys(obj[key]);
//         }else{
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }
// getKeys(obj);


//! ---------------------------------

// let users = [
//     {uid: 1, name: "arif"},
//     {uid: 2, name: "mohammed"},
//     {uid: 1, name: "sreekanth"},
//     {uid: 3, name: "siyad"},
//     {uid: 4, name: "rosahan"},
//     {uid: 5, name: "arya"},
//     {uid: 3, name: "noel"},
// ]

//* Map() keep track uniq keys and store last occurenrce of each key. so we conver its value back to array. 
//* values() is used to extract only the values from a Map

// // let uniquser = [... new Map(users.map((user) => [user.uid, user])).values()]    
// // console.log(uniquser);
// let uniquser = new Map(users.map((user) => [user.uid, user]))   
// console.log([...uniquser]);


//! ---------------------------------


//! ---------------------------------


//! ---------------------------------

