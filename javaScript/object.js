//! ------------------ check object is empty -------------

// function isEmpty(obj){
//     return Object.keys(obj).length === 0
// }
// console.log(isEmpty({}));
// console.log(isEmpty({a: 12}));

//! ------------------- Dynamic Key Update ------------------

// const obj = { name: "Arif", age: 25 };
// const key = "name";
// obj[key] = "Mohammed";
// console.log(obj);

//! ------------------- Using Function --------------------

// function updateObject(obj, key, value){
//     obj[key] = value;
//     return obj;
// }
// console.log(updateObject({ name: "Arif" }, "age", 26));

//! -------------------- Nested Object Dynamic Update ---------------------

// const user = {
//     name: "Arif",
//     address: {
//         city: "Kochi"
//     }
// };
// const key = "city";
// user.address[key] = "Trivandrum";
// console.log(user);

//! -------------------- Deep Update ---------------------

// const user = { name: "Arif", address: { city: "Kochi" }};
// const updated = {
//     ...user,
//     address: {
//         ...user.address,
//         city: "Calicut"
//     }
// };
// console.log(updated);

//! -----------------------------------------

// const obj = { a: 1, b: 2 };
// const updated = Object.fromEntries(
//     Object.entries(obj).map(([key, value]) => [key, value * 10])
// );
// console.log(updated);

//! --------------------------------------------

// let user  = { name :"arif", age :23, place :"ERn" }
// console.log(Object.entries(user));
// for (let [key, value] of Object.entries(user)) {
//   console.log({key, value});
// }

//! --------------------------------------------

// let users = [
//     {name: "mohammed arif", age:23, place: "ernakulam", gender: "male"},
//     {name: "sreekanth", age:33, place: "kollam", gender: "male"},
//     {name: "arya", age: 20, place: "trissure", gender: "female"},
//     {name: "siyad", age:26, place: "allapuzha", gender: "male"},
//     {name: "athish", age:25, place: "ernaulam", gender: "male"},
//     {name: "hiba", age:24, place: "malapuram", gender: "female"},
//     {name: "roshan", age:28, place: "ernakulam", gender: "male"},
//     {name: "viswanath", age:31, place: "trissure", gender: "male"},
// ]


// let group = {};
// for(let user of users){
//     group[user.place] ? group[user.place].push(user): group[user.place] = [user]
// }
// console.log(group);

// let groupedByGender = users.reduce((acc, user) => { 
//     acc[user.gender] ? acc[user.gender].push(user) : acc[user.gender] = [user]
//     return acc
// }, {}) 
// console.log(groupedByGender);

// let obj = {}
// users.forEach((user) => obj[user.place] ? obj[user.place].push(user) : obj[user.place] = [user] )
// console.log(obj);


//!  ----------------------- find uniq skills ------------------------------

// let  users1 = [
//     {name: "arif", email: "arif@gmail.com", age: 24, skills: ["js", "ts", "sql", "node","django"], address: {place: "ERN"} },
//     {name: "mohammed", email: "mohammed@gmail.com", age: 28, skills: ["js", "react", "sql", "node"], address: {place: "KLM"} },
//     {name: "roshan", email: "roshan@gmail.com", age: 22, skills: ["flutter", "dart", "sql", "aws"], address: {place: "ALPZ"} },
//     {name: "sreekanth", email: "sreeaknth@gmail.com", age: 33, skills: ["js", "ts", "sql", "node"], address: {place: "KNR"} },
//     {name: "siyad", email: "siyad@gmail.com", age: 25,  skills: ["js", "python", "sql", "node", "aws"], address: {place: "ERN"} }
// ]


// let allSkills = users1.flatMap((skill => skill.skills))         //* get all skills into single array;
// function getUniqSkill(skills){
//     let obj = {};
//     let uniqSkills = []
//     for(let skill of skills){
//         obj[skill] ? obj[skill]++ : obj[skill] = 1
//         // if(obj[skill] === 1) uniqSkills.push(skill)          //* remove duplicate skills
//     }
//     for(let uniq in obj){
//         if(obj[uniq] === 1) uniqSkills.push(uniq)               //* get uniq skills only
//     }
//     return uniqSkills 
// }
// console.log(getUniqSkill(allSkills));


//! -------------------- convert array into array of object ---------------------

// let fruites = ["apple", "banana", "orange", "apple", "apple", "banana"];        //* ----> [ { apple: 3 }, { banana: 2 }, { orange: 1 } ]

// function countfruits(fruit){
//     let obj = {};
//     for(let fr of fruit){
//         obj[fr] ? obj[fr]++ : obj[fr] = 1
//     }
//     // return Object.keys(obj).map((key) => ({ [key]: obj[key]}))
//     return Object.entries(obj).map(([key, value]) => ({[key]: value}))
// }
// console.log(countfruits(fruites));


// const result = Object.entries(                                               //* ----> [ { apple: 3 }, { banana: 2 }, { orange: 1 } ]
//     fruites.reduce((acc, fruit) => {
//         acc[fruit] = (acc[fruit] || 0) + 1;
//         return acc;
//     }, {})
// ).map(([key, value]) => ({ [key]: value }));
// console.log(result);


//! ----------------------------------------------------------------------

// let object = [
//     { 101: [] },
//     { 102: null },
//     { 103: ["arif", "altaf"] },
//     { 104: ["arif", "mohammed", "altaf"] },
//     { 105: ["arif","sreekant", "mohammed", "altaf"] },
//     { 106: ["arif"] },
// ]

// let output = [];
// for (let obj of object){
//     let key = Object.keys(obj)[0];
//     let value = obj[key];
//     output.push({ [key]: Array.isArray(value) ? value.length : 0 })
//     // output.push({ [key]: [value ? value.length : 0] })
// }
// console.log(output);


// let output = object.map(obj => {
//     let [key, value] = Object.entries(obj)[0];
//     return {
//         [key]: [Array.isArray(value) ? value.length : 0],
//         // [key]: Array.isArray(value) ? value.length : 0
//     };
// });
// console.log(output);


// let res = object.map((u) => {
//     let key = Object.keys(u)[0]
//     let value = u[key]
//     return {
//         [key]: value ? value.length : 0                                  
//         // [key]: Array.isArray(value) ? value.length : 0 ,             //* not wrapped inside the array.    eg: {101: 3}
//         // [key]: [ value ? value.length : 0 ]                         //* length wrap it inside an array.  eg: {101: [3]}
//     }
// })
// console.log(res);


//! --------------------------------- function to get key and value from nested object

// let obj = {
//     name : "mohammed airf",
//     email: "arif@gmail.com",
//     contact : { num1: 4234242432, num2: 2342305235 }
// }


// function getKeyValue(obj){
//     let result = []
//     // for(let [key, value] of Object.entries(obj)) result.push([key, value])
//     for(let key in obj) result.push([key, obj[key]])
//     return result
// }
// console.log(getKeyValue(obj));


// function getKeyValue(obj){
//     let result = [];
//     for(let key in obj){
//         typeof obj[key] === "object" ? result.push(...getKeyValue(obj[key])) : result.push([key, obj[key]]);
//     }
//     return result;
// }
// console.log(getKeyValue(obj));          //* [['name','mohammed airf'],['email','arif@gmail.com'],['num1',4234242432],['num2',2342305235]]


// function getKeyValue(obj, parent = "") {
//     let result = [];
//     for(let key in obj){
//         let newKey = parent ? `${parent}.${key}` : key;
//         typeof obj[key] === "object" ? result.push(...getKeyValue(obj[key], newKey)) : result.push([newKey, obj[key]]);
//     }
//     return result;
// }
// console.log(getKeyValue(obj));       //* [['name','mohammed airf'],['email','arif@gmail.com'],['contact.num1',4234242432],['contact.num2',2342305235]]


// function getValue(obj){
//     let result = []
//     for(let key in obj){
//         typeof obj[key] === 'object' ? result.push(...getValue(obj[key])) : result.push(obj[key])
//     }
//     return result
// }
// console.log(getValue(obj));                         //* [ 'mohammed airf', 'arif@gmail.com', 4234242432, 2342305235 ]


// function getKeys(obj){
//     let result = []
//     for(let key in obj){
//         result.push(key)
//         if(typeof obj[key] === "object") result.push(...getKeys(obj[key]))
//     }
//     return result
// }
// console.log(getKeys(obj));                       //* [ 'name', 'email', 'contact', 'num1', 'num2' ]


//! ----------------------------------------------

// let orders = [
//     {product: "mobile", price: 20000},
//     {product: "camera", price: 720000},
//     {product: "laptop", price: 120000},
//     {product: "tv", price: 45000},
// ]

// let totalPrice = orders.reduce((total, item) => {
//     return total + item.price
// }, 0) 
// console.log(totalPrice);


//! -----------------------------------------------------------------------

// let users = [
//     {name :"atish", age :17},
//     {name :"siyad", age :21},
//     {name :"sreek", age :19},
//     {name :"arya", age :16},
// ]

// let adultUsername = users.map((user) => user.age > 18 ? user.name : "" ).filter(Boolean)
// let adultUsername = users.filter((user) => user.age > 18).map((u) => u.name)
// let adultUsername = users.reduce((acc, user) => user.age > 18 ? [...acc, user.name] : acc, [])
// console.log(adultUsername);


//! ---------------------------------------------------------------

// let users = [ 
//     {id: 1, name: "arif"},
//     {id: 2, name: "roshan"},
//     {id: 3, name: "athish"},
// ]

// let result = users.reduce((acc, user) => {
//     acc[user.id] = user.name
//     return acc
// }, {})
// console.log(result)

// const result1 = users.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});
// console.log(result1);

// let res = {}
// for(let {id, name} of users){
//     res[id]= name ;  
// }
// console.log(res);

//! ---------------------------------------------------------------

// let user = [
//     {user: "arif", skills: ["html","css","js"]},
//     {user: "mohammed", skills: ["html","ts","js"]},
//     {user: "sreekanth", skills: ["html","ts","js","mysql"]},
//     {user: "roshan", skills: ["html","dart","js","dart"]},
//     {user: "roshan", skills: ["css","django","js","python"]},
// ]

// let res1 = [... new Set(user.flatMap((item) => item.skills))]
// console.log(res1);