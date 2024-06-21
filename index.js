var myGlobal = 10;

    function fun1() {
        // Assign 5 to oopsGlobal Here
        var oopsGlobal = 5;
    }

    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }

    fun1();
    fun2();


var outerWear = "T-Shirt";
function myOutfit() 
{
  var outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit()); // sweater
console.log(outerWear); // T-Shirt
function nextInLine(arr, item) {
  arr.push(item); // add the element to the end of the array
  return arr.shift(); // remove the first element and return it
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + testArr);
console.log("Before: " + JSON.stringify(testArr)); // convert the array to a string
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    else{
        return "No, that was false";
    }
}

console.log(trueOrFalse(false));


function testEqual(val) {
  if (val === 7) // strict equality operator
  {
      return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual('7'));

function campareEquality(a, b) {
  if (a == b) {
      return "Equal";
  }
  return "Not Equal";
}
console.log(campareEquality(10, "10"));
