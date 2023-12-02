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
  var power;
  var r = 0;
  var g = 0;
  var b = 0;
  
  for (var j=0; j<cubes.length; j++) {
    if (cubes[j].match(/[rgb]/) == 'r' && parseInt(cubes[j]) > r) {
      r = parseInt(cubes[j]);
    } else if (cubes[j].match(/[rgb]/) == 'g' && parseInt(cubes[j]) > g) {
      g = parseInt(cubes[j]);
    } else if (cubes[j].match(/[rgb]/) == 'b' && parseInt(cubes[j]) > b) {
      b = parseInt(cubes[j]);
    }
  }
  
  power = r * g * b;
  sum = sum + power;
}

console.log(sum);
