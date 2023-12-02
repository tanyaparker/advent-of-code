var sum = 0;
var input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

for (var i=0; i<input.length; i++) {
  var first_digit = null;
  var last_digit = null;

  for (var j=0; j<input[i].length; j++) {
    if (Number(input[i].charAt(j))) {
      if (first_digit == undefined) {
        first_digit = Number(input[i].charAt(j));
      }
      else last_digit = Number(input[i].charAt(j));
    }
  }

  if (last_digit == undefined) {
    last_digit = first_digit;
  }

  sum = sum + Number("" + first_digit + last_digit);
}

console.log(sum);
