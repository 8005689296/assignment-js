//Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following

//Console log the length of string
//Extract "AlmaBetter" from string using slice() and console log it
//Replace "Javascript" with "Web3.0" in test and console log it
//Convert test to upper case using built in function and console log it
//Concat "Web3.0 is future" to test and console log it

const str = "AlmaBetter";
console.log(str.length);
 
const result = str.slice(0,-2);// slice use to remove
console.log(result);

const string = "javascript is a good language";
const res = string.replace("javascript","web3.0");
console.log(res);


const test = "javascript";
const re = test.toUpperCase();
console.log(re);

const test2 = "Web3.0 is future";
const r1 = test.concat(test2);
console.log(r1);





