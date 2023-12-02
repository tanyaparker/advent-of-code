var sum = 0;
var input = [
"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
"Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
"Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
"Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
"Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
];

for (var i=0; i<input.length; i++) {
  var cubes = input[i].match(/\d+\s\D/g);
  var possible = true;
  
  for (var j=0; j<cubes.length; j++) {
    if (cubes[j].match(/[rgb]/) == "r" && parseInt(cubes[j]) > 12) {
      possible = false;  
    } else if (cubes[j].match(/[rgb]/) == 'g' && parseInt(cubes[j]) > 13) {
      possible = false;
    } else if (parseInt(cubes[j]) > 14) {
      possible = false
    }
  }
  
  if (possible) {
    sum = sum + parseInt(input[i].substring(5));
  }
}

console.log(sum);
