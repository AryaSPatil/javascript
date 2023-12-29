function stringHandsOn() {
  var givenString = "   Hey you are doing good, keep it up    ";
  console.log(`1)   Given string is: "${givenString}"`);

  var length1 = givenString.length;
  console.log(`2)   Length of given string is: ${length1}`);

  var updatedString = givenString.trim();
  var length2 = updatedString.length;
  console.log(
    `3)   After trim given strig is: "${updatedString}" and it's length is: ${length2}`
  );

  var extraSpaces = length1 - length2;
  console.log(`4)   Total number of extra spaces is: ${extraSpaces}`);

  console.log(
    `5)   First character: ${updatedString.charAt(
      0
    )}     Last character: ${updatedString.charAt(length2 - 1)}`
  );

  var stringSplit = updatedString.split(" ");
  console.log(`6)   Total words in string: ${stringSplit.length}`);

  console.log(`7)   Index of good is: ${updatedString.indexOf("good")}`);

  console.log(
    `8.1) Substring starting from index 22: ${updatedString.substring(22)}`
  );
  console.log(`8.2) Slice starting from index 22: ${updatedString.slice(22)}`);

  console.log(
    `9)   Is string ends with word "up": ${updatedString.endsWith("up")}`
  );

  console.log(
    `10)  Is string starts with word "Hey": ${updatedString.startsWith("Hey")}`
  );
}
stringHandsOn();
