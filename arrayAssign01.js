const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruits_seasonal);
console.log(`===================== Step 1 =====================`);
const firstElement = fruits_seasonal[0];
console.log(`First Element is: ${firstElement}`);
const lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last Element is: ${lastElement}`);

console.log(`===================== Step 2 =====================`);
console.log(`Original Array: `);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`Array after adding Pspsys`);
console.log(fruits_seasonal);

console.log(`===================== Step 3 =====================`);
const removedElement = fruits_seasonal.splice(4,1);
console.log(`Removed elements`);
console.log(removedElement);
console.log(`Array after removing Mango`);
console.log(fruits_seasonal);

console.log(`===================== Step 4 =====================`);
console.log(`Array after inserting Pineapple`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`===================== Step 5 =====================`);
console.log(`Array after inserting Dragon Fruit: `);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);

console.log(`===================== Step 6 =====================`);
console.log(`Array after replacing Orange with Kiwi: `);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);

console.log(`===================== Step 7 =====================`);
console.log(`Elements starting from index 1 to 4: `);
let selectedElements = fruits_seasonal.slice(1,5);
console.log(selectedElements);

console.log(`===================== Step 8 =====================`);
console.log(fruits_seasonal);
console.log(`Last three elements: `);
const lastThreeElements = fruits_seasonal.slice(-3);
console.log(lastThreeElements);