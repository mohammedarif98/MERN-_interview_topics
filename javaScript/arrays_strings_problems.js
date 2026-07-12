
//! ---------------------- string ---------------------------

// function countCharector(str){
//     if(str.length === 0) return 0
//     let count = 0
//     for(let i=0; i<str.length; i++){
//         if(str[i] === " ")continue
//         count++
//     }
//     return count;
// }
// console.log(countCharector("mohammed arif"));


// function reverseString(str){
//     let revStr = ""
//     if(str.length === 0) return ""
//     for(let i=0; i<str.length; i++){
//         revStr += str[str.length-1-i];
//     }
//     return revStr;
// }
// console.log(reverseString("mohammed arif"));


// function reverseString(str){
//     let arr = str.split("");
//     let result = ""
//     for(let i=0; i<arr.length/2; i++){
//         [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
//     }
//     return arr.join("")
// }
// console.log(reverseString("mohammed arif"));


// function reverseWord(str){
//     let result = ""
//     let words = str.split(" ");
//     for(let i=0; i<words.length; i++){
//         result += words[words.length-1-i]
//         if(i < words.length-1) result += " "
//     }
//     return result
// }   
// console.log(reverseWord("iam mohammed arif"));           // arif mohammed iam


// function revereseByWord(str){
//     let arr = str.split(" ");
//     let result = ""
//     for(let i=0; i<arr.length; i++){
//         for(let j=arr[i].length-1; j>=0; j--){
//             result += arr[i][j]
//         }
//         if(i<arr.length-1)result += " "
//     }
//     return result
// }
// console.log(revereseByWord("iam mohammed arif"));           // mai demmahom fira


// function isPallindrome(str){
//     for(let i=0; i<str.length/2; i++){
//         if(str[i] !== str[str.length-1-i]){
//             return "not palindrome"
//         }
//     }
//     return "palindrome"
// }
// console.log(isPallindrome("mohammed"));
// console.log(isPallindrome("malayalam"));


// function isAnagram(str1, str2){
//     let s1 = str1.split("").sort().join("");
//     let s2 = str2.split("").sort().join("");
//     return s1 === s2 ? "is anagam" : "is not anagram"
// }
// console.log(isAnagram("listen", "silenta"));
// console.log(isAnagram("malayalam", "malayalam"));


// function twoStringEqual(str1, str2){
//     if(str1.length > str2.length) return "strings length are not equal"
//     for(let i=0; i<str1.length; i++){
//         if(str1[i] !== str2[i]){
//             return "strings are not equal"
//         }
//     }
//     return "two strings are equal"
// }
// console.log(twoStringEqual("mohammed", "muhammed"));
// console.log(twoStringEqual("mohammed", "mohammed"));


// function longestWord(str){
//     let strArr = str.split(" ")
//     let longest = strArr[0];
//     for(let i=0; i<strArr.length; i++){
//         if(longest.length < strArr[i].length){
//             longest = strArr[i]
//         }
//     }
//     return longest
// }
// console.log(longestWord("iam mohammed arif from ernakulam"));


// function shortesttWord(str){
//     let strArr = str.split(" ")
//     let longest = strArr[0];
//     for(let i=0; i<strArr.length; i++){
//         if(longest.length > strArr[i].length){
//             longest = strArr[i]
//         }
//     }
//     return longest
// }
// console.log(shortesttWord("im a mohammed can arif"));


// //* IMPORTANT
// function shortestWords(str){
//     let strArr = str.split(" ")
//     let shortest = strArr[0].length;
//     let result = []
//     for(let word of strArr){
//         if(word.length < shortest){
//             shortest = word.length
//             result = [word]
//         }else if(word.length === shortest){
//             result.push(word)
//         }
//     }
//     return result
// }
// console.log(shortestWords("im aa mohammed an arif"));        //* ["im", "aa", "an"]


// //* IMPORTANT
// function longestWords(str){
//     let strArr = str.split(" ")
//     let longestLen = strArr[0].length
//     let result = []
//     for(let i=0; i<strArr.length; i++){
//         if(strArr[i].length > longestLen){
//             longestLen = strArr[i].length
//             result = [strArr[i]]
//         }else if(strArr[i].length === longestLen){
//             result.push(strArr[i])
//         }
//     }
//     return result
// }
// console.log(longestWords("im aa mohammed an arif from ernakulm"));         // //* ["ernakulam", "ernakulma"]


// function frequencyChar(str){
//     let freq= {};
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ :freq[char]=1
//     }
//     return freq
// }
// console.log(frequencyChar("iam mohammed arif"));


// function removeDuplicateChar(str){
//     let freq = {}
//     let duplicate = ""
//     for(let char of str){
//         if(char === " "){
//             duplicate += " "
//             continue
//         } 
//         freq[char] ? duplicate += "*" : (freq[char] = 1, duplicate += char);
//         // if(freq[char]){
//         //     duplicate += "*"
//         // }else{
//         //     freq[char] = 1
//         //     duplicate += char
//         // }
//     }
//     return { duplicate }
// }
// console.log(removeDuplicateChar("my aname is moahmmed arif from ernakulam"));        // my na*e is *oh****d *r*f **** *****kul**'


// function removeDuplicateChar(str){
//     let freq = {};
//     let duplicate = []
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ : freq[char]=1
//         if(freq[char] === 1) duplicate.push(char)
//     }
//     return duplicate
// }
// console.log(removeDuplicateChar("iam moahmmed arif"));              // iamohedrf


// function findUniqChar(str){
//     let freq = {};
//     let unique = []
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ : freq[char]=1
//     }
//     for(let uniq in freq){
//         if(freq[uniq] === 1) unique.push(uniq)
//     }
//     return unique
// }
// console.log(findUniqChar("iam mohammed arif"));           // ohedrf


// function findDuplicateChar(str){
//     let freq = {};
//     let duplicate = []
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ : freq[char]=1
//     }
//     for(let dup in freq){
//         if(freq[dup] > 1) duplicate.push(dup)
//     }
//     return duplicate
// }
// console.log(findDuplicateChar("iam mohammed arif"));


// //* IMPORTANT
// function firstUniqChar(str){
//     let freq = {};
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ : freq[char]=1
//     }
//     for(let i=0; i<str.length; i++){
//         if(freq[str[i]] === 1) return str[i]
//     }
// }
// console.log(firstUniqChar("mohammed arif"));
// console.log(firstUniqChar("moahmomed aedrifhrif"));


// function firstReapeatedChar(str){
//     let freq = {};
//     for(let char of str){
//         if(char === " ") continue
//         freq[char] ? freq[char]++ : freq[char]=1
//     }
//     for(let i=0; i<str.length; i++){
//         if(freq[str[i]] > 1) return str[i]
//     }
// }
// console.log(firstReapeatedChar("moahmmed arif"));
// console.log(firstReapeatedChar("oahmed rif"));


// function firstRepeatedChar(str){
//     let seen = {};
//     for(let char of str){
//         if(char === " ") continue;
//         if(seen[char]) return char;
//         seen[char] = true;
//     }
//     return null;
// }
// console.log(firstRepeatedChar("moahmmed arif")); 


//------------------------------------------------------------------------------------
// //* IMPORTANT
// function mostRepeatedChar(str){
//     let freq = {}
//     let repeatedChar = ""
//     let count = 0 
//     for(let char of str){
//         freq[char] ? freq[char]++ : freq[char]=1
//         if(freq[char] > count){
//             count = freq[char]
//             repeatedChar = char
//         }
//     }
//     return repeatedChar
// }
// console.log(mostRepeatedChar('iam mohammed arif'));


// function mostRepeatedChar(str){
//     let mostedCount = 0
//     let repeatedChar = ""
//     for(let i=0; i<str.length; i++){
//         let count = 0
//         for(let j=0; j<str.length; j++){
//             if(str[i] === str[j]) count++
//         }
//         if(count > mostedCount){
//             mostedCount = count;
//             repeatedChar = str[i] 
//         }
//     }
//     return repeatedChar
// }
// console.log(mostRepeatedChar('iam mohammed arif'));

//------------------------------------------------------------------------------------


// //* IMPORTANT
// function mostRepeatedChars(str){
//     let freq = {};
//     let maxCount = 0;
//     let result = []
//     for(let char of str){
//         freq[char] ? freq[char]++ : freq[char]=1
//         if(freq[char] > maxCount) maxCount = freq[char]
//     }
//     for(let key in freq){
//         if(freq[key] === maxCount) result.push(key)
//     }
//     return result
// }
// console.log(mostRepeatedChars('iam mohaimmedi arif a'));         //* [ 'i', 'a', 'm' ]


// //* IMPORTANT
// function mostRepeatedWord(str){
//     let arrstr = str.split(" ");
//     let freq = {};
//     let maxCount = 0;
//     let result = "";
//     for(let word of arrstr){
//         freq[word] ? freq[word]++ : freq[word]=1;
//         if(freq[word] > maxCount){
//             maxCount = freq[word];
//             result = word
//         }
//     }
//     return result
// }
// console.log(mostRepeatedWord('iam mohammed arif iam mohammed arif iam'));


////* IMPORTANT
// function mostRepeatedWords(str){
//     let arrstr = str.split(" ");
//     let freq = {};
//     let maxCount = 0;
//     let result = [];
//     for(let word of arrstr){
//         freq[word] ? freq[word]++ : freq[word]=1;
//         if(freq[word] > maxCount) maxCount = freq[word];
//     }
//     for(let key in freq){
//         if(freq[key] === maxCount) result.push(key)
//     }
//     return result
// }
// console.log(mostRepeatedWords('iam mohammed arif mohammed arif'));           //* [ 'mohammed', 'arif' ]


// function mergAlternativeString(str1, str2){
//     let result = ""
//     let maxlen = Math.max(str1.length, str2.length);
//     for(let i=0; i<maxlen; i++){
//         if(i<str1.length) result += str1[i]
//         if(i<str2.length) result += str2[i]
//     }
//     return result
// }
// console.log(mergAlternativeString("mohammed", "arif"));


// function mergString(str1, str2){
//     let result = ""
//     for(let i=0; i<str1.length; i++){
//         result += str1[i]
//     }
//     for(let i=0; i<str2.length; i++){
//         result += str2[i]
//     }
//     return result
// }
// console.log(mergString("mohammed", "arif"));


// function compressString(str){
//     let count = 1;
//     let result = ""
//     for(let i=0; i<str.length; i++){
//         if(str[i] === str[i+1]){
//             count++
//         }else{
//             result += str[i]+count
//             count = 1
//         }
//     }
//     return result
// }
// console.log(compressString("aaavvbbbbccf"));


// function capitalizeFirstLetter(str){
//     return str.split(" ").map((word) => word ? word[0].toUpperCase() + word.slice(1) : word).join(" ")
// }
// console.log(capitalizeFirstLetter("iam mohammed arif"))


// function findVowels(str){
//     let vowels = "aeiou";
//     let result = "";
//     let consonants = ""
//     for(let char of str){
//         if(char === " ") continue
//         if(vowels.includes(char)){
//             result += char
//         }else{
//             consonants += char
//         }
//     }
//     return {vowels :result, consonant : consonants }
// }
// console.log(findVowels("mohammed arif"));


// function findVowels(str){
//     let vowels = "aeiou";
//     let result = ""
//     let consonant = ''
//     for(let i=0; i<str.length; i++){
//         if(str[i] === " " ) continue
//         let isVowel = false
//         for(let j=0; j<vowels.length; j++){
//             if(str[i] === vowels[j]){
//                 isVowel = true
//                 break
//             }
//         }
//         isVowel ? result += str[i] : consonant += str[i]
//     }
//     return { vowels: result, consonants: consonant }
// }
// console.log(findVowels("mohammed arif"));


// //* IMPORTANT
// function vowelsFreq(str){
//     let freq = {}
//     let vowels = "aeiou"
//     for(let char of str){
//         if(vowels.includes(char)){
//             freq[char] ? freq[char]++ : freq[char]=1
//         }
//     }
//     return freq
// }
// console.log(vowelsFreq("mohammed arif"))


// function extractNum(str){
//     let result = []
//     for(let num of str){
//         if(!isNaN(num)) result.push(+num)
//     }
//     return result
// }
// console.log(extractNum("ar43if223af52te"));


// function removeSpecialChar(str){
//     let result = ""
//     for(let char of str){
//         if(char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char === " "){
//             result += char
//         }
//     }
//     return result
// }
// console.log(removeSpecialChar("hello@234 from!! arif00"));


// function sortString(str){
//     let arr = str.split("")
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] > arr[j]){
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr.join("")
// }
// console.log(sortString("moahmmed arif"));


// //* IMPORTANT
// function insertChar(str, index, ch){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         if(i === index) result += ch;               //* insert here
//         result += str[i];                           //* add original char
//     }
//     return result;
// }
// console.log(insertChar("mohammed", 2, "X"));                //*  moXhammed


//! ---------------------------------------------------------------------------------------
// //* IMPORTANT
// function deleteChar(str, index){
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         if(i !== index){
//             result += str[i];           //* skip the index
//         }
//     }
//     return result;
// }
// console.log(deleteChar("hello", 1));                    //* hllo


// //* IMPORTANT
// function removeChars(str, char){
//     let result = ""
//     for(let i=0; i<str.length; i++){
//         if(str[i] !== char){
//             result += str[i]
//         }
//     }
//     return result
// }
// console.log(removeChars("mohammed arif", "m"));          //* ohaed arif


// //* IMPORTANT
// function removeChar(str, char){
//     let result = ""
//     let isRemove = false;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === char && !isRemove){
//             isRemove = true;
//             continue
//         }
//         result += str[i]
//     }
//     return result
// }
// console.log(removeChar("mohammed arif", "m"));          //* ohammed arif
//! ---------------------------------------------------------------------------------------


//! ---------------------------------------------------------------------------------------
// //* IMPORTANT
// function replaceChar(str, index, newChar){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         i === index ? result += newChar : result += str[i]
//     }
//     return result
// }
// console.log(replaceChar("hello", 1, "a"));              //* hallo


// function replaceChar(str, char, newChar){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         str[i] === char ? result += newChar : result += str[i]
//     }
//     return result
// }
// console.log(replaceChar("hello", "l", "a"));                //* heaao


// function replaceChar(str, char, newChar){
//     let result = "";
//     let isReplace = false
//     for(let i=0; i<str.length; i++){
//         if(str[i] === char && !isReplace){
//             result += newChar
//             isReplace = true
//             continue
//         }
//         result += str[i]
//     }
//     return result
// }
// console.log(replaceChar("hello", "l", "a"));                 //* healo
//! --------------------------------------------------------------------------------------


// //* IMPORTANT
// function secLargestRepeatedChar(str){
//     let freq = {}, result = [], largest = 0, secLargest = 0
//     for(let i=0; i<str.length; i++){
//         if(str[i] === " ") continue
//         freq[str[i]] ? freq[str[i]]++ : freq[str[i]]=1
//     }
//     for(let key in freq){
//         if(freq[key] > largest){
//             secLargest = largest;
//             largest = freq[key]
//         }else if(freq[key] > secLargest && freq[key] !== largest){
//             secLargest = freq[key]
//         } 
//     }
//     for(let key in freq){
//         if(freq[key] === secLargest){
//             result.push(key)
//             // return {second_largest__repeated: key, frequency: freq}
//         }
//     }
//     return result.length ? result : false
// }
// console.log(secLargestRepeatedChar("mohammed a arif a"));


// //* IMPORTANT
// function secshortestRepeatedChar(str){
//     let freq = {}, result = [], secShortest = Infinity, shortest = Infinity
//     for(let char of str){
//         freq[char] ? freq[char]++ : freq[char]=1
//     }
//     for(let key in freq){
//         if(freq[key] < shortest){
//             secShortest = shortest
//             shortest = freq[key]          
//         }else if(freq[key] < secShortest && freq[key] !== shortest){
//             secShortest = freq[key]
//         }
//     }
//     for(let key in freq){
//         if(freq[key] === secShortest){
//             // result.push(key)
//             return {second_shortest_repeated: key, frequency: freq}
//         } 
//     }
//     return result.length ?  result : false
// }
// console.log(secshortestRepeatedChar("mohammed arif"));



// //* IMPORTANT
// function secLongestWord(str){
//     let longest = ""
//     let secLongest = ""
//     let arr = str.split(" ");
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length > longest.length){
//             secLongest = longest
//             longest = arr[i]
//         }else if(arr[i].length > secLongest.length && arr[i].length < longest.length){
//             secLongest = arr[i]
//         }
//     }
//     return secLongest
// }
// console.log(secLongestWord("iam mohammed aarif and iam software develper arif is my nick name"));


// //* IMPORTANT
// function secShortestWord(str){
//     let shortest = ""
//     let secondShortest = ""
//     let arr = str.split(" ");
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length < shortest.length){
//             secondShortest = shortest
//             shortest = arr[i]
//         }else if((secondShortest === "" || arr[i].length < secondShortest.length) && arr[i].length > shortest.length){
//             secondShortest = arr[i]
//         }
//     }
//     return secondShortest
// }
// console.log(secShortestWord("iam mohammed arif and iam software develper arif is my nick name"));


// //* IMOPORTANT
// function getAllSubstrings(str){
//     let result = []
//     for(let i=0; i<str.length; i++){
//         let sub = ""
//         for(j=i+1; j<str.length; j++){
//             // sub += str[j];
//             // result.push(sub)
//             result.push(str.slice(i, j));
//         }
//     }
//     return result
// }
// console.log(getAllSubstrings("mohammed"));
// console.log(getAllSubstrings("aaa"));


// //* IMOPORTANT
// function getUniqueSubstrings(str){
//     let result = new Set();
//     for(let i=0; i<str.length; i++){
//         let temp = "";                      //* A temp variable is used to store a value temporarily while some operation is in progress.
//         for(let j=i; j<str.length; j++){
//             temp+=str[j];                   //* expand substring
//             result.add(temp)                //* store uniq substring
//         }
//     }
//     return [...result];
// }
// console.log(getUniqueSubstrings("mohammed"));


// //* IMOPORTANT
// function getUniqueSubstrings(str){
//     const result = new Set();
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<=str.length; j++){
//             result.add(str.slice(i, j));
//         }
//     }
//     return [...result];
// }
// console.log(getUniqueSubstrings("aaa"));


// //* IMOPORTANT
// function isBalanced(pattern){
//     let stack = []
//     let pair = {'}':'{', ']':'[', ')':'('}
//     for(let ch of pattern){
//         if(ch === "{" || ch === "[" || ch === '('){
//             stack.push(ch)
//         }else{
//             if(stack.pop() !== pair[ch]) return false
//         }
//     }
//     return stack.length === 0
// }
// console.log(isBalanced("({[]})")); 
// console.log(isBalanced("(]"));    


// //* IMPORATANT
// function findPermutation(str){
//     if(str.length === 0) return [""];
//     let result = [];
//     for(let i=0; i<str.length; i++){
//         let currentChar = str[i];
//         let remaining = str.slice(0, i) + str.slice(i + 1);      //* Removes currentChar from the string. If currentChar='a' → remaining="bc"
//         let perms = findPermutation(remaining);              //* Gets all permutations of the remaining characters, findPermutation("bc") → ["bc", "cb"]
//         for(let p of perms){
//             result.push(currentChar + p);   //* Add the fixed character in front of each smaller permutation, 'a' + 'bc' → "abc" and 'a' + 'cb' → "acb"
//         }
//     }
//     return result;
// }
// console.log(findPermutation("abc"));


// //* IMPORATANT
// function adjecentString(str){
//     let adjecent = [];
//     for(let i=0; i<str.length; i++){
//         if(str[i] === str[i+1]){
//             adjecent.push(str[i])
//         }
//     }
//     return adjecent
// }
// console.log(adjecentString("abccdeefghh"));


// //* IMPORATANT
// function removeAdjecentString(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== str[i + 1]){
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(removeAdjecentString("abccdeefghh"));


// //* IMPORATANT
// function removeAdjacentAll(str){
//     let stack = [];
//     for(let ch of str){
//         if(stack.length && stack[stack.length - 1] === ch){
//             stack.pop();
//         } else {
//             stack.push(ch);
//         }
//     }
//     return stack.join("");
// }
// console.log(removeAdjacentAll("abbaca"));




//! ---------------------- array ----------------------------
            

// //* IMPORTANT
// function moveZeroToEnd(arr){
//     let j = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//                 j++
//         }
//     }
//     return arr
// }
// console.log(moveZeroToEnd([0,23,10,0,98,25,0,34,0]));         //* [23,10,98,25,34,0,0,0,0]


// function duplicateElement(arr){
//     let freq = {}
//     let duplicate = []
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1;
//         if(freq[ele] > 1) duplicate.push(ele)
//     }
//     // for(let i=0; i<arr.length; i++){
//     //     if(freq[arr[i]] > 1){
//     //         duplicate.push(arr[i])
//     //         freq[arr[i]] = 0
//     //     } 
//     // }
//     return duplicate 
// }
// console.log(duplicateElement([1,1,2,2,3,4,5,5,6,7,8]));              //* [ 1, 2, 5 ]


// function duplicateElement(arr){
//     let duplicate = []
//     for(let i=0; i<arr.length; i++){
//         let count = 0
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] === arr[j]) count++
//         }
//         if(count > 1 && !duplicate.includes(arr[i])) duplicate.push(arr[i])
//     }
//     return duplicate
// }
// console.log(duplicateElement([1,1,2,2,3,4,5,5,6,7,8]));             //* [ 1, 2, 5 ]


// function uniqElement(arr){
//     let freq = {};
//     let unique = []
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1
//     }
//     for(let uniq in freq){
//         if(freq[uniq] === 1) unique.push(+uniq);
//     }
//     return unique;
// }
// console.log(uniqElement([1,1,2,2,3,4,5,5,6,7,8]));                  //* [ 3, 4, 6, 7, 8 ]


// function uniqElement(arr){
//     let uniq = []
//     for(let i=0; i<arr.length; i++){
//         let count = 0
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] === arr[j]) count++
//         }
//         if(count === 1) uniq.push(arr[i])
//     }
//     return uniq
// }
// console.log(uniqElement([1,1,2,2,3,4,5,5,6,7,8]));          //* [ 3, 4, 6, 7, 8 ]


// function removeDuplicateElement(arr){
//     let freq = {}
//     let result = []
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1
//         if(freq[ele] === 1) result.push(ele)
//     }
//     // for(let i=0; i<arr.length; i++){
//     //     if(freq[arr[i]] > 0){
//     //         result.push(arr[i])
//     //         freq[arr[i]] = 0
//     //     } 
//     // }
//     return result
// }
// console.log(removeDuplicateElement([1,1,2,2,3,4,5,5,6,7,8]));     //* [1,2,3,4,5,6,7,8]


// function removeDuplicateElement(arr){
//     let result = []
//     for(let i=0; i<arr.length; i++){
//         let isDup = false
//         for(let j=0; j<result.length; j++){
//             if(arr[i] === result[j]){
//                 isDup = true;
//                 break
//             }
//         }
//         if(!isDup) result.push(arr[i])
//     }
//     return result 
// }
// console.log(removeDuplicateElement([1,1,2,2,3,4,5,5,6,7,8]));


// function frequencyElement(arr){
//     let freq = {}
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1
//     }
//     return freq
// }
// console.log(frequencyElement([1,2,3,4,4,1,1,3,6,8,10,3,2]));


// function largestElemet(arr){
//     let largest = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }    
//     return largest
// }
// console.log(largestElemet([1,2,3,89,23,53,25,2,35]));


// function smallestElemet(arr){
//     let smallest = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }    
//     return smallest
// }
// console.log(smallestElemet([1,2,3,89,23,53,25,2,35]));


// function oddEven(arr){
//     let odd=[], even=[];
//     arr.filter((ele) => (ele%2===0) ? even.push(ele) :  odd.push(ele))
//     return {odd, even}
// }
// console.log(oddEven([1,2,3,4,5,6,7,8,9,10]));


// //* IMPORTANT
// function peakElement(arr){
//     if(arr.length === 1) return arr[0]
//     for(let i=0; i<arr.length; i++){
//         if((i==0 || arr[i]>arr[i-1]) && (i==arr.length-1 || arr[i]>arr[i+1])){
//             return arr[i]
//         }
//     }
//     return "mot peak element in array"
// }
// console.log(peakElement([111,12,26,45,47,57,54,41]));
// console.log(peakElement([1,2,80,5,9,7,101]));


// //* IMPORTANT
// function peakElement(arr){
//     // let peak = -Infinity;
//     let allPeak = []
//     for(let i=0; i<arr.length; i++){
//         if((i===0 || arr[i]>arr[i-1]) && (i==arr.length-1 || arr[i]>arr[i+1])){
//             // peak = Math.max(peak, arr[i]);       //* current highest peak found, current peak element being checked
//             allPeak.push(arr[i])
//         }
//     }
//     // return {all_peak_element: allPeak, Highest_peak: peak === -Infinity ? "no peak element" : peak }
// }
// console.log(peakElement([121,12,26,111,45,47,57,54,41]));
// // console.log(peaklement([1,2,80,5,9,7,101]));


// function twoSum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]+arr[j] === target){
//                 return `${arr[i]} ${arr[j]}`
//             }
//         }
//     }
//     return false
// }
// console.log(twoSum([23,44,4,34,2,42,34,234], 100));
// console.log(twoSum([23,44,4,34,2,42,34,66,234], 100));


// //* IMPORTANT
// function flattedArray(arr){
//     let flatArr = []
//     for(let i=0; i<arr.length; i++){
//         Array.isArray(arr[i]) ? flatArr.push(...flattedArray(arr[i])) : flatArr.push(arr[i])
//     }
//     return flatArr;
// }
// console.log(flattedArray([1,2,3,4,[11,22,33,[111,222,333]]]));


// function sortArr(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(sortArr());


// //* IMPORTANT
// function getNestedElement(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             let found = getNestedElement(arr[i], target)
//             if(Array.isArray(found)) return [i, ...found]
//         }else if(arr[i] === target){
//             return [i]
//         }
//     }
//     return "no target element"
// }
// const path = getNestedElement([1,2,3,4,[11,22,33,[111,222,333]]], 111);
// if(path){
//     const result = "arr" + path.map(index => `[${index}]`).join("");
//     console.log(`${result} === 111`);
// }
// console.log(getNestedElement([1,2,3,4,[11,22,33,44,[75,34,5,435]]], 75).join(" --> "));


// function reverseArr(arr){
//     for(let i=0; i<arr.length/2; i++){
//         [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
//     }
//     return arr
// }
// console.log(reverseArr([1,2,3,4,5,6,7,8]));


// function majorityElement(arr){
//     for(let i=0; i<arr.length; i++){
//         let count = 0;
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] === arr[j]) count++
//         }
//         if(count > arr.length/2) return arr[i]
//     }
//     return 'no majority element'
// }
// console.log(majorityElement([1,2,1,9,1,6,2,1,1,1]));
// console.log(majorityElement([1,2,1,3,2,4,2,2,2]));


// function majorityElement(arr){
//     let freq = {}
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1;
//     }
//     for(let val in freq){
//         if(freq[val] > arr.length/2) return val
//     }
//     return 'no majority element'
// }
// console.log(majorityElement([1,2,1,9,1,6,2,1,1,1]));
// console.log(majorityElement([1,2,1,3,2,4,2,2,2]));


// function twoArrEqual(arr1, arr2){
//     if(arr1.length !== arr2.length) return "array are not equal"
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             return "array are not equal"
//         }
//     }
//     return "array are equal"
// }
// console.log(twoArrEqual([1,2,3,4,5], [1,2,3,4,5]));
// console.log(twoArrEqual([1,2,3,4,5], [1,2,3,4,12,5]));


// function twoArrEqual(arr1, arr2){
//     return arr1.length === arr2.length && arr1.every((ele, index) => ele === arr2[index])
// }
// console.log(twoArrEqual([1,2,3,4,5], [1,2,3,4,5]));
// console.log(twoArrEqual([1,2,3,4,5], [1,2,3,4,12,5]));


// function shortestWord(arr){
//     if(arr.length === 0) return false
//     let word = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i].length < word.length){
//             word = arr[i]
//         }
//     }
//     return word
// }
// console.log(shortestWord(["my", "name", "mohammed", "is", "Arrif"]));


// function shortestWords(arr){
//     let minLength = arr[0].length
//     let result = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i].length < minLength) minLength = arr[i].length;
//     }
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length === minLength) result.push(arr[i])
//     }
//     return result
// }
// console.log(shortestWords(["my", "name", "mohammed", "is", "Arrif"]));


// function shortestWord(arr){
//     if(arr.length === 0) return false
//     return arr.reduce((shortest, current) => current.length < shortest.length ? current : shortest)
// }
// console.log(shortestWord(["my", "name", "mohammed", "is", "Arrif"]));


// function longestWord(arr){
//     let longest = arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length > longest.length) longest = arr[i]
//     }
//     return longest
// }
// console.log(longestWord(["my", "name", "mohammed", "is", "Arrif"]));

// function longestWords(arr){
//     let minLength = arr[0].length
//     let result = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i].length > minLength) minLength = arr[i].length;
//     }
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length === minLength) result.push(arr[i])
//     }
//     return result
// }
// console.log(longestWords(["my", "name", "mohammed", "is", "Arrifaaa"]));


// function longestWord(arr){
//     return arr.reduce((longest, current) => current.length > longest.length ? current : longest)
// }
// console.log(longestWord(["my", "name", "mohammed", "is", "Arrif"]));


// function mergeArr(arr1, arr2){
//     let result = []
//     let maxLen = Math.max(arr1.length, arr2.length)
//     for(let i=0; i<maxLen; i++){
//         if(i < arr1.length) result.push(arr1[i])
//         if(i < arr2.length) result.push(arr2[i])
//     }
//         return result
// }
// console.log(mergeArr([1,2,3,4,5], [1,2,3,4,5]));


// function givenNumberSum(arr, num){
//     let result = 0
//     for(let ele of arr){
//         if(ele === num) result += ele
//     }
//     return result
// } 
// console.log(givenNumberSum([1,2,5,3,4,5,5], 5));


// function repeatedElementSum(arr){
//     let result = 0
//     let freq = {}
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele] = 1
//     }
//     for(let key in freq){
//         if(freq[key] > 1){
//             result += +key
//         }
//     }
//     return result
// }
// console.log(repeatedElementSum([1,2,3,2,3,9,3,5,2,5,9]));


// function repeatedAllElementSum(arr){
//     let result = 0
//     let freq = {}
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele] = 1
//     }
//     for(let i=0; i<arr.length; i++){
//         if(freq[arr[i]] > 1){
//             result += arr[i]
//         }
//     }
//     return result
// }
// console.log(repeatedAllElementSum([1,2,3,2,3,9,3,5,2,5,9]));


// function oneTimeEleSum(arr){
//     let result = 0
//     let freq = {}
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele] = 1
//     }
//     for(let i=0; i<arr.length; i++){
//         if(freq[arr[i]] === 1){
//             result += arr[i]
//         }
//     }
//     return result
// }
// console.log(oneTimeEleSum([1,2,3,3,4,4,5,6]));


// function secondLargestEle(arr){
//     if(arr.length < 2) return "not second largest element"
//     let largest = -Infinity;
//     let secLargest = -Infinity
//     for(let i=0; i<arr.length; i++){       
//         if(arr[i] > largest){
//             secLargest = largest
//             largest = arr[i]
//         }else if(arr[i]>secLargest && arr[i] !== largest){
//             secLargest = arr[i]
//         }
//     }
//     return secLargest === -Infinity ? "no selecond largest element" : secLargest
// }
// console.log(secondLargestEle([1,72,23,33,23,23,5,52,32]));
// console.log(secondLargestEle([1,]));
// console.log(secondLargestEle([1,1,1,1]));


//* JavaScript-ൽ represent ചെയ്യുന്ന ഒരു special numeric value ആണ്, എല്ലായ്പ്പോഴും ഏത് finite number-നെയുംക്കാൾ വലിയതാണ്
// function secondSmallestEle(arr){
//     if(arr.length<2) return "no sec smallest element"
//     let smallest = Infinity
//     let secSmallest = Infinity
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < smallest){
//             secSmallest = smallest
//             smallest = arr[i]
//         }else if(arr[i]<secSmallest && arr[i] !== smallest){
//             secSmallest = arr[i]
//         }
//     }
//     return secSmallest === Infinity ? "no sec smallest Element" : secSmallest
// }
// console.log(secondSmallestEle([1,72,23,33,23,23,5,52,32]));
// console.log(secondSmallestEle([1]));
// console.log(secondSmallestEle([1,1,1,1]));


////* IMPORTANT
// function mostReapeatedElement(arr){
//     let count = 0
//     let freq = {}
//     for(let i=0; i<arr.length; i++){
//         freq[arr[i]] ? freq[arr[i]]++ : freq[arr[i]]=1
//         if(freq[arr[i]] > count) count = freq[arr[i]]
//     }
//     for(let key in freq){
//         if(count === freq[key]) return `Element ${key} that appear in ${freq[key]} times`
//     }
// }
// console.log(mostReapeatedElement([1,2,4,3,3,4,3,4,1,2,4,3]));


////* IMPORTANT
// function mostReapeatedElement(arr){
//     let freq  = {}
//     let count = 0
//     let result = []
//     for(let ele of arr){
//         freq[ele] ? freq[ele]++ : freq[ele]=1
//         if(freq[ele] > count) count = freq[ele]
//     }
//     for(let key in freq){
//         if(freq[key] === count) result.push(+key)
//     }
//     return result.length ===1 ? arr[0] : result 
// }
// console.log(mostReapeatedElement([1,2,4,3,3,4,3,4,1,2,4,3]));


// //* IMPORTANT
// function intersectionElement(arr1, arr2){
//     let result = []
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j] && !result.includes(arr1[i])) result.push(arr1[i])
//         }
//     }
//     return result
// }
// console.log(intersectionElement([1,2,3,4,5], [11,33,4,55]));


// //* IMPORTANT
// function allIntersectionElement(arr1, arr2){
//     const [freq, result] = [{}, []];
//     for(let num of arr1){
//         freq[num] ? freq[num]++ : freq[num]=1;
//     }
//     for(let num of arr2){
//         if(freq[num] > 0){
//             result.push(num);
//             freq[num]--;          //*  prevent over-counting, handle duplicates correctly
//         }
//     }
//     return result;
// }
// console.log(allIntersectionElement([1,2,3,4,5], [11,2,33,4,55,3]));


// //* IMPORTANT
// function productExceptSelf(arr){
//     let result = []
//     for(let i=0; i<arr.length; i++){
//         let product = 1;
//         for(let j=0; j<arr.length; j++){
//             if(i!==j) product *= arr[j]
//         }
//         result.push(product)
//     }
//     return result
// }
// console.log(productExceptSelf([1,2,3,4,5,6,7]));


// //*  IMPORTANT
// function insertElement(arr, newElement, position){
//     if(position > arr.length+1 || position < 1) return "invalid postion"
//     for(let i=arr.length; i>position; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[position-1] = newElement;
//     return arr
// }
// console.log(insertElement([1,2,3,4,5,6,7], 1234, 3));


// //*  IMPORTANT
// function deleteElement(arr, position){
//     for(let i=position-1; i<arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length-1
//     return arr
// }
// console.log(deleteElement([1,2,3,4,5], 3));

//! ---------------------------------------------------------------------------------------
// //* IMPORTANT
// function updateByValue(arr,target,newElement){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target){
//             arr[i] = newElement;
//             return arr;
//         }
//     }
//     console.log("Target not found")
//     return arr  
// }
// console.log(updateByValue([1,2,3,4,5,6,7,4], 4, 99));             //* Output: [1,2,3,99,5,6,7]


// function updateByValue1(arr,target,newElement){
//     let found = false;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             arr[i] = newElement;
//             found = true;
//         }
//     }
//     return found ? arr : "target not found";
// }
// console.log(updateByValue1([1,2,3,4,5,6,7,4], 4, 99));            //* [1,2,3,99,5,6,7,99]
// console.log(updateByValue1([1,2,3,4,5,6,7,4], 41, 99));           //* [1,2,3,99,5,6,7,99]
//! ---------------------------------------------------------------------------------------


////* IMOPORTANT
// function mulptipleShortestWord(arr){
//     let min = arr[0].length;
//     let result = [];
//     for(let word of arr){
//         if(word.length < min){
//             min = word.length;
//         }else if(word.length === min){
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(mulptipleShortestWord(["my", "name", "mohammed", "is", "Arrif"]));

// function mulptipleShortestWord(arr){
//     let result = [];
//     let min = Infinity;
//     for(let word of arr){
//         if(word.length < min){
//             min = word.length;
//             result = [word]
//         }else if(word.length === min){
//             result.push(word)
//         }
//     }
//     return result
// }
// console.log(mulptipleShortestWord(["my", "name", "mohammed", "is", "Arrif"]));


////* IMPORTANT
// function multipleLongestWord(arr){
//     let result = [];
//     let max = -Infinity;
//     for(let word of arr){
//         if(word.length > max){
//             max = word.length;
//             result = [word];
//         }else if(word.length === max){
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(multipleLongestWord(["my", "name", "mohammed", "is", "Arrif", "muhammed"]));

// function multipleLongestWord(arr) {
//     let max = arr[0].length;
//     for(let word of arr){
//         if(word.length > max) max = word.length;
//     }
//     let result = [];
//     for(let word of arr){
//         if(word.length === max) result.push(word);
//     }
//     return result;
// }
// console.log(multipleLongestWord(["my", "name", "mohammed", "is", "Arrif", "muhammed"]));


////* IMPORTANT
// function maxProduct(arr){
//    let max1 = -Infinity
//    let max2 = -Infinity
//    if(max1 < max2) [max1, max2] = [max2, max1]
//     for(let i=2; i<arr.length; i++){
//         if(arr[i] > max1){
//             max2 = max1;
//             max1= arr[i]
//         }else if(arr[i] > max2){
//             max2 = arr[i]
//         }
//     }
//     return max1 * max2
// }
// console.log(maxProduct([1,2,5,6,3,2,5,6]));


// //* IMPORTANT
// function kthSmallestElement(arr, k){
//     for(let i=0; i<arr.length; i++){
//         let count = 0
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] < arr[i]) count++
//         }
//         if(count === k-1) return arr[i]
//     }
//     return -1
// } 
// console.log(kthSmallestElement([24,36,50,43,56,22,18], 3));


////* IMPORTANT
// function kthLargestElement(arr, k){
//     for(let i=0; i<arr.length; i++){
//         let count = 0
//         for(let j=0; j<arr.length; j++){
//             if(arr[j]>arr[i]) count ++
//         }
//         if(count === k-1) return arr[i]
//     }
//     return false
// } 
// console.log(kthLargestElement([24,36,50,43,56,22,18], 2));

// //* IMPORTANT
// function rotateLeft(arr, step){
//     let n = arr.length;
//     step = step%n;
//     let res = []
//     for(let i=step; i<n; i++){
//         res[res.length] = arr[i]
//     }
//     for(let j=0; j<step; j++){
//         res[res.length] = arr[j]
//     }
//     return res
// }
// console.log(rotateLeft([1,2,3,4,5,6], 2));              //* [3,4,5,6,1,2]

// //* IMPORTANT
// function rotateRight(arr, step){
//     let n = arr.length;
//     step = step%n;
//     let res = []
//     for(let i=n-step; i<n; i++){
//         res[res.length] = arr[i]
//     }
//     for(let j=0; j<n-step; j++){
//         res[res.length] = arr[j]
//     }
//     return res
// }
// console.log(rotateRight([1,2,3,4,5,6], 2));             //* [5,6,1,2,3,4]


// //* IMOPORTANT
// function consecutiveElement(arr){
//     let longestConsicutive = []
//     let sequenceCount = 0
//     for(let i=0; i<arr.length; i++){
//         let currentEle = arr[i];
//         let currentSequence = [currentEle]
//         let count = 1;
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] === currentEle+1){
//                 currentEle = arr[j]
//                 currentSequence.push(currentEle);
//                 count++
//                 j=-1
//             }
//         }
//         if(currentSequence.length > longestConsicutive.length) longestConsicutive = currentSequence
//         if(currentSequence.length > sequenceCount) sequenceCount = count
//     }
//     return {longestConsicutive, sequenceCount }
// }
// console.log(consecutiveElement([1,2,3,5,11,42,34,12,4,45,6,7,8,13,14,15]));

// //* IMPORTANT
// function consecutiveElement(arr){
//     let set = new Set(arr);
//     let largest = [];
//     let result = 0;
//     for(let num of set){
//         let current = num;
//         let sequence = [current];
//         while(set.has(current + 1)){
//             current++;
//             sequence.push(current);
//         }
//         if(sequence.length > largest.length) largest = sequence;
//     }
//     return {largest};
// }
// console.log(consecutiveElement([1,2,3,5,11,42,34,12,4,45,6,7,8,13,14,15]));


// //* IMPORATANT
// function findSubArray(arr){
    //     let result = []
//     for(let i=0; i<arr.length; i++){
//         let subarray = [];
//         for(let j=i; j<arr.length; j++){
//             subarray.push(arr[j]);
//             result.push([...subarray])
//         }
//     }
//     return result
// }
// console.log(findSubArray([1,2,3,4,5,6,7,8,9,10,11]));


// //* IMPORATANT
// function findSubarrays(arr){
//     let prefixSum = [0];
//     for(let num of arr){
//         prefixSum.push(prefixSum[prefixSum.length - 1] + num);
//     }
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<=arr.length; j++){
//             console.log(arr.slice(i, j), "=>", prefixSum[j] - prefixSum[i]);
//         }
//     }
// }
// findSubarrays([1,2,3,4,5,6,7,8,9,10,11])


// //* IMPORATANT
// function allSubArraySum(arr){
//     let total = 0;
//     let n = arr.length;
//     for(let i = 0; i < n; i++){
//         total += arr[i] * (i + 1) * (n - i);
//     }
//     return total;
// }
// console.log(allSubArraySum([1,2,3,4,5,6,7,8,9,10,11]));


// //* IMPORTANT
// function subarrayGivenSum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         let sum = 0;
//         for(let j=i; j<arr.length; j++){
//             sum += arr[j];
//             if(sum === target){
//                 return { subarray: arr.slice(i, j + 1), sum: sum};
//             }
//         }
//     }
//     return "No subarray found";
// }
// console.log(subarrayGivenSum([1,2,3,4,5,6,7,8,9,10,11], 33));


// //* IMPORTANT
// function removeAdjecentElement(arr){
//     let newArr = []
//     for(let i=0; i<arr.length; i++){
//         if(i === arr.length - 1 || arr[i] !== arr[i + 1]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(removeAdjecentElement([1,2,3,3,4,5,5,6,7,8,8,9]));


// //* IMPORTANT
// function removeAdjacentElement(arr){
//     let stack = [];
//     for(let num of arr){
//         if(stack.length && stack[stack.length - 1] === num){
//             stack.pop();    //* remove duplicate
//         }else{
//             stack.push(num);
//         }
//     }
//     return stack;
// }
// console.log(removeAdjacentElement([1,2,3,3,4,5,5,6,7,8,8]));


// //* IMPORTANT
// function findAdjacentDuplicates(arr){
//     let result = [];
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] === arr[i + 1]){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(findAdjacentDuplicates([1,2,3,3,4,5,5,6]));


// //* IMPORTANT
// function largestElemetNestedArr(arr){
//     let largest = -Infinity;
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             let nestedMax = largestElemetNestedArr(arr[i]);
//             if(nestedMax > largest) largest = nestedMax;
//         }else{
//             if(arr[i] > largest) largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(largestElemetNestedArr([1,2,3,[11,22,33,-89944,[111,222,333]]]));


// //* IMPORTANT
// function isPalindrome(arr){
//     let result = []
//     for(let i=0; i<arr.length; i++){
//         let str = arr[i]
//         let palidrome = true;
//         for(let j=0; j<str.length/2; j++){
//             if(str[j] !== str[str.length-1-j]){
//                 palidrome = false
//                 break
//             }
//         }
//         if(palidrome) result.push(str)
//     }
//     return result
// }
// console.log(isPalindrome(["hello", "level", "world", "noon", "malayalam"]));


//! ------------------------------------- MATH --------------------------------------


// function missingNumber(arr){
//     let n = arr.length+1
//     let expectedSum = n*(n+1)/2
//     let actualSum = arr.reduce((acc, curr) => curr+acc, 0)
//     return expectedSum-actualSum;
// }
// console.log(missingNumber([1,2,4,5]))


// function findMissingNumber(arr, n){
//     let expectedSum = (n*(n+1))/2;
//     let actualSum = arr.reduce((acc, curr) => curr+acc, 0)
//     return expectedSum - actualSum;
// }
// console.log(findMissingNumber([1,2,4,5], 5));


// function findMissingNumbers(arr){
//     let result = [];
//     let max = Math.max(...arr);
//     for(let i=1; i<=max; i++){
//         if(!arr.includes(i)) result.push(i);
//     }
//     return result;
// }
// console.log(findMissingNumbers([1,5,2]));


// function primeElements(arr){
//     let primes = []
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<2) continue
//         let isprime = true;
//         for(let j=2; j<arr[i]; j++){
//             if(arr[i] % j === 0){
//                 isprime = false
//                 break
//             }
//         }
//         if(isprime) primes.push(arr[i])
//     }
//     return primes
// }
// console.log(primeElements([1,2,34,7,25,35,11,65,6,32,73,5]));


// function getNPrimeNumber(num){
//     let allPrimes = []
//     for(let i=2;i<=num; i++){
//         let isPrime = true
//         for(let j=2; j<i; j++){
//             if(i%j===0){
//                 isPrime = false
//                 break
//             }
//         }
//     if(isPrime) allPrimes.push(i)
//     }
//     return allPrimes
// }
// console.log(getNPrimeNumber(73))


// function isPrime(num){
//     if(num < 2) return false
//     for(let i=2; i<num; i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(11));
// console.log(isPrime(35));


// function factorial(num){
//     let result = 1
//     for(let i=2; i<=num; i++){
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5));


//* --------------- use recursion to find factorial -----------------
// function factorial(num){
//     if(num<2) return 1
//     return num*factorial(num-1)
// }
// console.log(factorial(5));


//* --------------- use recursion to find sum ----------------
// function sum(num){
//     if(num<1) return 0
//     return num+sum(num-1)
// }
// console.log(sum(5));


// function arrSum(arr,index=0){
//     if(index === arr.length) return 0
//     return arr[index] + arrSum(arr,index+1)
// }
// console.log(arrSum([1,2,3,4,5,1]))


// function febnacci(n){
//     let fibonacciSeries = [0, 1]
//     for(let i=2; i<=n; i++){
//         fibonacciSeries[i] = fibonacciSeries[i-1]+ fibonacciSeries[i-2]
//     }
//     return fibonacciSeries
// }
// console.log(febnacci(7));


//* ------------------- use recursion to generate number ----------------------
// function genarateNumebrs(num){
//     if(num<1) return 0
//     genarateNumebrs(num-1)
//     console.log(num);
// }
// genarateNumebrs(10)


// function genarateNumebrs(start, stop){
//     if(start>stop) return 0
//     console.log(start);
//     genarateNumebrs(start+1, stop)
// }
// genarateNumebrs(1,110)



//* ----------------------------------------------------------------------



