var a=10;
var b=a++;
console.log(b);

var c=20;
var d=++c;
console.log(d);

var result=0/0;
console.log(result);

//Automatic OR Implicit Conversion
var result=100 + true;
console.log(result);

var resultValue = 99-false;
console.log(resultValue);

var resultValue = 100+ "arya";
console.log(resultValue);

console.log("1"+"1");
var s1="101";
console.log(typeof s1);

var d =+"200";
console.log(d);
console.log(typeof d);
var z = +"arya";
console.log(z);

var d=Number("101");
console.log(typeof d);

var s1="200A";
var res = Number(s1);
console.log(typeof res);
console.log(res);

var d=String(100);
console.log(typeof d);

var f = String(true);
console.log(typeof f);

var p = Boolean(0);
console.log(p);