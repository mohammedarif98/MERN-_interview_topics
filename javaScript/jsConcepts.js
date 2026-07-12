
//! ======================= scops =========================
//* ------------------------------- global scope
// const name = "mohammed arif";
// function getName(){
//     console.log(name);
// }
// getName();

//* ------------------------------- block scope
// {
//     const name = "mohammed arif"
//     console.log("log from inner: ", name);
// }
// console.log("log from outer: ", name);

//* ------------------------------ function scope
// function getName(){
//     var name = "mohammed arif";
//     console.log("inner: ", name);
// }
// getName()
// console.log("outer: ", name);


//! ======================= clouser =========================

// function interview(initialStatus){
//     let status = initialStatus;
//     return function(newStatus){
//         status = newStatus;
//         console.log(status);
//     }
// }
// let result = interview("pending");
// result("shortlisted")
// result("intereviewing")

//* ------------------------------------------------
// function bankAccount(initialAmount){
//     let balance = initialAmount
//     return {
//         deposite : (amount) =>{
//             balance+= amount
//             console.log("Balance: ", balance);
//         },
//         withdraw: (amount) => {
//             balance -= amount
//             console.log("withdrawal amount: ", amount, "| Balance: ", balance);
//         },
//         getBalance : () => `current balance: ${balance}`
//     }
// }

// let result = bankAccount(2000)
// result.deposite(500);
// console.log(result.getBalance());
// result.withdraw(100);
// console.log(result.getBalance());

//* ------------------------------------------------
// function Counter(){
//     let count = 0;
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// let startCount = Counter();
// startCount()
// startCount()


//! ======================= hoisting =========================

// console.log(fname);
// console.log(lname);
// var fname = "mohmmed arif"
// let lname = "mohmmed arif"

// getName()
// function getName(){
//     let name = "mohammed arif"
//     console.log(name);
// }

// getName()
// let getName = function(){
//     let name = "mohammed arif"
//     console.log(name);
// }


//! ======================= inbuilt async function =========================

// setTimeout(() => {
//     console.log("Hi"); 
// },1000)

// setInterval(() => {
//     console.log("hi");
// },1000)

// let timer = setInterval(() => console.log("hi") ,100)
// setTimeout(() => {
//     clearInterval(timer);
//     console.log("interval stoped");
// }, 1000);

// let count = 0
// let timer = setInterval(() => {
//     count++
//     console.log(count);
//     if(count === 10){
//         clearInterval(timer)
//         console.log("stoped");
//     }
// },500)


//! ======================= callback function =========================

// function getUser(callback){
//     console.log("user loading...");
//     setTimeout(() => {
//         let user = { name: "mohamemd arif", place: "ernakulam" }
//         callback(user)
//     }, 1000)
// }

// function handleUser(user){
//     console.log({message: "user loaded successfully", user});
// }

// getUser(handleUser)

//! ======================= callback hell =========================
/* --------------------
    * Callback hell happens when multiple asynchronous callbacks are nested inside each other, making code hard to read and maintain.
----------------------- */

// function getUser(callback){
//     setTimeout(() => {
//         console.log("User fetched");
//         callback({ id: 1, name: "Arif" });
//     }, 1000);
// }

// function getPosts(userId, callback){
//     setTimeout(() => {
//         console.log("Posts fetched");
//         callback(["Post 1", "Post 2"]);
//     }, 1000);
// }

// function getComments(post, callback){
//     setTimeout(() => {
//         console.log("Comments fetched");
//         callback(["Good", "Awesome"]);
//     }, 1000);
// }

//* Callback Hell
// getUser((user) => {
//     getPosts(user.id, (posts) => {
//         getComments(posts[0], (comments) => {
//             console.log(comments);
//         });
//     });
// });

//* -----------------------------------------------------------------------

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ id: 1, name: "Arif" });
//         }, 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Posts fetched");
//             resolve(["Post 1", "Post 2"]);
//         }, 1000);
//     });
// }

// function getComments(post) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Comments fetched");
//             resolve(["Nice", "Great"]);
//         }, 1000);
//     });
// }

// //* solution
// getUser()
//     .then((user) => getPosts(user.id))
//     .then((posts) => getComments(posts[0]))
//     .then((comments) => console.log(comments))
//     .catch((err) => console.log(err));


//! ======================= shallow and deeep copy =========================

// let user = { name: "mohammed arif", age: 23, email: "arif@gamil.com", isActive: true, address: { city: "Kochi" } }

// let shallowUser = {...user}
// shallowUser.name  = "MOHAMMED ARIF"
// shallowUser.address.city = "KNR"
// console.log("orginal user: ",user);
// console.log("copied user: ",shallowUser);


// let deepUser = JSON.parse(JSON.stringify(user));
// deepUser.name = "MOHAMMED ARIF";
// deepUser.address.city = "PKD";
// console.log("orginal user: ",user);
// console.log("copied user: ",deepUser);


//! ======================= higher order function =========================
/* -----------------------------
    * greet("Hello") returns a function and assigns it to sayHello. That returned function forms a closure, remembering the value "Hello".
    *  When sayHello("Arif") is called, it combines the preserved message with the new argument.
-------------------------------- */

// function greet(msg){
//     return function(name){
//         return `${msg}, ${name}`
//     }
// }

// let sayHello = greet("Hi");
// console.log(sayHello("mohammed arif"));

//* ------------------------ map() | filter() | reduce()

// let arr = ["ben","arif",1,2,3,4,5,6,7,"sreekanth","siyad","mohammed","arya"];

// let doubleArr = arr.filter((item) => typeof item !== "string").map((item) => item*2);
// console.log(doubleArr);

// let getNum = arr.filter((itm) => itm > 3)
// console.log(getNum);

// let total = arr.filter(itm => typeof itm !== "string").reduce((acc, curr) => curr+acc);
// console.log(total);



/* -----------------------------
    * Use forEach() when you want to iterate over an array to perform side effects, not to create a new array.
    * A side effect is when a function modifies external state, like changing variables, updating data, logging, or calling APIs,-
    * instead of just returning a value.
-------------------------------------- */

// let arr = [1,2,3,4,5,6]
// let count = 0;
// arr.forEach((num, index) => count = num*index);
// console.log(count);

// let users = [
//     { name: "arif",     age: 25, active: true  },
//     { name: "mohammed", age: 16, active: false },
//     { name: "roshan",   age: 28, active: true  },
//     { name: "sreekanth",age: 15, active: false }
// ]

// let getAge = users.map((user) => user.age);
// console.log(getAge);

// let activeUser = users.filter((user) => { return user.active === true && user.age > 18 })
// console.log(activeUser);


//! ======================= ES6 features =========================

//* ------------------- arrow function
// let arrowFn = (name) => console.log("hi", name);
// arrowFn("mohammed arif")

//* ------------------- array | object destructuring

// let arr = [1,2,3,[11,22,33,[111,222,333]]]
// let [a,b,c,[e,f,g,[h,i,j]]] = arr;
// console.log(a,e,h);

// let obj = {name: "mohammed", age: 234, address: {place: "ERN", locaton: {pin:65432}}};
// let {name, age, address:{place, locaton: {pin}}} = obj;
// console.log(place, pin);

//* ------------------- spread oprator
// let fname = "mohammed";
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// let mergedArr = [...arr1, ...arr2]
// console.log(mergedArr);

// const user = { name: "Arif", age: 25 };
// const updatedUser = {...user, email: "arif@gamil.com"} 
// console.log(updatedUser);


//* ------------------- rest parameter
// function restFn(...nums){
//     let total = 0
//     return nums.reduce((acc, curr) => curr+acc)
// }
// console.log(restFn(1,23,34,4,5,46))

//* ------------------- default parameter
// function defaultFn(fname= "mohammed", lname){
//     console.log(fname, lname);
// }
// defaultFn(undefined, "arif");

//* ------------------- temlate literals
// let obj = {name: "mohammed", age: 234, address: {place: "ERN", locaton: {pin:65432}}};
// console.log(`${obj}`);

// let name = "mohammed arif"
// console.log(`my name is ${name}`);

//* ------------------- optional chaining
// let obj = {name: "mohammed", age: 234, address: {place: "ERN", locaton: {pin:65432}}};
// console.log(obj && obj.address && obj.address.location && obj.address.locaton.pin);
// console.log(obj?.address?.locaton?.pin);


//! ======================= functions =========================
/* ----------------------------
    * Function Declaration : A function defined using the function keyword with a name.
------------------------------- */
// function testFn(){
//     return "hi hello";
// }
// console.log(testFn());

/* ----------------------------
    * Function Expression : A function stored inside a variable.
------------------------------- */
// const testFn = function(){
//     return "mohammed arif";
// }
// let res = testFn()          //* executes the function first, then stores its returned value into res.
// console.log(res);
// console.log(testFn);     //* prints function definition/reference.
// console.log(testFn());


//! ======================= genarator function =========================
// function* genaratorFun(){
//     // yield "arif"
//     // yield "sreekanth"
//     // yield "siyad"
//     let  i = 0;
//     while(i<10){
//         yield i++
//     }
// }
// let genFn = genaratorFun();
// console.log(genFn.next().value);
// console.log(genFn.next().value);
// console.log(genFn.next().value);


//! ======================= contructor function =========================
// function User(name, email, age){
//     this.name = name;
//     this.email = email;
//     this.age = age;

//     this.getName = function(){
//         return `my name is ${this.name}`
//     }
// }

// User.prototype.getUserDetails = function(){
//     console.log(`${this.name} | ${this.email} | ${this.age}`);
// }

// let user1 = new User("mohammed arif", "arif@gmail.com", 23);
// console.log(user1.getName());
// user1.getUserDetails()


//! ======================= pass by value | pass by referenec =========================
//* “Primitive values are passed by value, so functions receive a copy and cannot modify the original variable.

// let name = "mohammed arif"
// function updateName(fullname){
//     name = "sreekanth ts"
//     console.log(fullname);
// }
// updateName(name)
// console.log(name);

//* Because objects are passed by reference (technically: reference value)
// let user = {name: "mohammed arif"};
// function getUser(newUser){
//     user.name = "sreekangth"
//     return user
// }
// console.log(getUser(user));
// console.log(user);


//! ======================= call | apply | method =========================

// let user1 = {fullname: "mohammed arif", place: "ERN"}
// let user2 = {fullname: "roshan jojy", place: "KLM"}

// function getDetails(age){
//     console.log(`${this.fullname} | ${this.place} | ${age}`)
// }

// getDetails.call(user1, 23)
// getDetails.apply(user1, [54])
// let binding = getDetails.bind(user1, 100)
// binding();


//! ======================= class and inheritance =========================
// class Employee{
//     constructor(id, fullname, email, position){
//         this.id = id;
//         this.fullname = fullname;
//         this.email = email;
//         this.position = position
//     }
//     getEmployeeDetails(){
//         console.log(`Employ_id: ${this.id} | fullname: ${this.fullname} | email address: ${this.email}`);
//     }
// }


// class Company extends Employee{
//     constructor(id, fullname, position, company_name, location, department){
//         super(id, fullname, null, position)
//         this.company_name = company_name;
//         this.location = location;
//         this.department = department;
//     }
//     getFullDetails(){
//         console.log(`Employ_id: ${this.id} | fullname: ${this.fullname} | job role : ${this.position} | company name: ${this.company_name} | department: ${this.department}`);
//     }
// }

// // let emp1 =  new Employee(101, "mohammed arif", "arif@gmial.com");
// // emp1.getEmployeeDetails();

// let comp = new Company(102,"siyad savad", "software engineer", "TCS", "BLR", "development")
// comp.getFullDetails()


//! ======================= funcitonal currying =========================
/* -------------------------
    * sum(10) executes the outer function and returns the inner function. The returned inner function is stored inside res.
    * Because of closure, the inner function remembers a = 10 even after the outer function execution completes.
    * Then calling res(10) passes 10 as b and returns a + b.
---------------------------- */

// function currying(a){
//     return function(b){
//         return a+b;
//     }
// }
// // console.log(currying(10)(20));
// let sum = currying(10);
// console.log(sum(100));


// function sum(a){
//     return function(b){
//         if(b === undefined){
//             return a
//         }
//         return sum(a+b);
//     }
// }
// console.log(sum(10)(20)())


//! ======================= error handling =========================
// function getUser(user){
//     if(!user) throw new Error("user not definied")
//     return user
// }

// try{
//     let response = getUser({name: "mohammed arif", age: 25})
//     // let response = getUser()
//     console.log(response);
// }catch(error){
//     console.log(error.message);
// }


//! ======================= this keyword =========================
/* -----------------------
    * this refers to the object that is currently executing the function.The value of this depends on how a function is called.
    * Normal functions have their own this binding, which depends on how they are called.
    * Arrow functions do not have their own this; they inherit this from their lexical (surrounding) scope.
----------------------------- */

// let obj = {
//     name : "mohammeed arif",
//     age : 34,
//     getFull : function(){
//         console.log(this.name , this.age);
//     },
//     getName : () => {
//         console.log(this.name);
//     },
//     getAge : function(){                    // getAge() is normal function:
//         setTimeout(() => {                  // This works because arrow function inherits this from getAge().
//             console.log(this.age);          // Arrow function captures that this. this === obj
//         })
//     }
// }
// obj.getFull()
// obj.getName()
// obj.getAge()


//! ======================= prototyping =========================
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// User.prototype.getUser = function(){
//     console.log(`name: ${this.name} | age: ${this.age}`);
// }

// let user1 = new User("mohammed arif", 27);
// user1.getUser();


//! ======================= promise =========================
// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((response) => {
//     if(!response.ok) throw Error("failed to get users")
//     return response.json()
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))


// function getUsers(url){
//     return fetch(url)
//     .then((response) => {
//         if(!response.ok) throw Error("failed to fetch user")
//         return response.json()
//     })
//     .catch((error) => console.log(error.message))
// }

// getUsers(`https://jsonplaceholder.typicode.com/users`)
// .then(data => console.log(data))
// .catch((error) => console.log(error.message));


//! ======================= promise methods [all, allSettled, any, race] =========================

// function testOne(status){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             status ? res("test 1") : rej(new Error("testOne failed")) 
//         })
//     })
// }

// function testTwo(status){
//     return new Promise((res, rej) => {
//         status ? res("test 2") : rej(new Error("testTwo failed")) 
//     })
// }

// function testThree(status){
//     return new Promise((res, rej) => {
//         status ? res("test 3") : rej(new Error("testThree failed")) 
//     })
// }

// let PromiseAll = Promise.all([testOne(true), testTwo(true), testThree(true)])
// let PromiseAllSettled = Promise.allSettled([testOne(true), testTwo(false), testThree(true)])
// let PromiseAny = Promise.any([testOne(false), testTwo(false), testThree(false)])
// let PromiseRace = Promise.race([testOne(true), testTwo(true), testThree(true)])
// .then((result) => console.log("success: ", result))
// .catch((error) => console.log("Error: ", error.message))


//! ======================= async await =========================
// async function getUser(id){
//     try{
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         if(!response.ok) throw new Error("failed get users")
//         let responseData = await response.json();
//         return responseData
//     }catch(error){
//         console.log(error.message);
//     }
// }

// getUser(5)
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))


//! ======================= debouncing =========================
// function debouncing(fn, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, delay)
//     }
// }

// function searching(query){
//     console.log("searching for:", query);
// }

// let debouncedSearch = debouncing(searching, 1000);
// debouncedSearch("moh")
// debouncedSearch("mohamm")
// debouncedSearch("mohammed")
// debouncedSearch("mohammed arif")


//! ======================= trotteling =========================
// function logMessage(value){
//     console.log("Called with:", value, "at", new Date().toLocaleTimeString());
// }

// function throttle(callback, delay){
//     let lastExecutionTime = 0;
//     return function (...args){
//         const currentTime = Date.now();
//         if(currentTime - lastExecutionTime >= delay){
//             lastExecutionTime = currentTime;
//             callback(...args)
//         }
//     };
// }

// const throttledLog = throttle(logMessage, 2000);
// throttledLog("A");
// throttledLog("B");
// throttledLog("C");
// setTimeout(() => throttledLog("D"), 2500)

