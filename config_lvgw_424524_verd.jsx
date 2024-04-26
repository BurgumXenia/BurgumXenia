orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeString = str => str.toUpperCase();

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
false - grape

const capitalizeString = str => str.toUpperCase();
11,49,47,5,53,42,96,10,36,46,81,35,83,36,11,90,23,87,27,19,67,9,75,19,40,41,46,52,54,33,14,69,21,0,42,6,73,15,50 + 91
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
76 - 8,13,93,52,64,17,87,64,10,40,50,95,44,93,49,88,69,3,62,13,51,6,96,54,5,91,55,64,69,90,56,16,20,61,57,16
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

kiwi

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
let result = performOperation(getRandomNumber(), getRandomNumber());

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
true - 39
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
