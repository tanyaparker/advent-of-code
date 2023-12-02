var sum = 0;
var input = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"];
var numbers = [
  ["o", "one", 1],
  ["t", "two", 2],
  ["t", "three", 3],
  ["f", "four", 4],
  ["f", "five", 5],
  ["s", "six", 6],
  ["s", "seven", 7],
  ["e", "eight", 8],
  ["n", "nine", 9],
];

for (var i=0; i<input.length; i++) {
  var first_digit = null;
  var last_digit = null;

  for (var j=0; j<input[i].length; j++) {
    for (var a=0; a<numbers.length; a++) {
      if (Number(input[i].charAt(j))) {
        if (first_digit == undefined) {
        first_digit = Number(input[i].charAt(j));
        } else last_digit = Number(input[i].charAt(j));
      } else {       
      for (var b=1; b<numbers[a].length; b++) {        
        if (input[i].charAt(j) == numbers[a][0]) {
          if (input[i].substring(j,j+numbers[a][b].length) == numbers[a][b]) {
            if (first_digit == undefined) {
              first_digit = numbers[a][2];
            } else last_digit = numbers[a][2];
          }
        }
      }
      }
    }
  }
 
  if (last_digit == undefined) {
    last_digit = first_digit;
  }

  sum = sum + Number("" + first_digit + last_digit); 
} 
  
console.log(sum);
