var left = [3, 4, 2, 1, 3, 3];
var right = [4, 3, 5, 3, 9, 3];
var sum = 0;

left.sort();
right.sort();

for (var i=0; i<left.length; i++) {
  sum = sum + Math.abs(left[i] - right[i]);
}

console.log(sum);
