console.log("==================== STEP 1 ====================");
function squareOfWordLength(str) {
    var length = str.length;
    var square = length * length;
    console.log(`The square of the length of "${str}" is: ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("==================== STEP 2 ====================");

function stringOperators() {
    var str1 = "I am Angular Developer";
    var len1 = str1.length;
    var str2 = str1.split(" ");
    var len2 = str2.length;
    console.log(`Length of given String: ${len1}`);
    console.log(`Total number of words in given string: ${len2}`);
    console.log(`Division of length of given string and total number of words is: ${len1/len2}`);
    console.log(`Multiplication of length of given string and total number of words is: ${len1*len2}`);
}
stringOperators();