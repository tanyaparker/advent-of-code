var left = [3, 4, 2, 1, 3, 3];
var right = [4, 3, 5, 3, 9, 3];
var count = 0;
var sum = 0;

for (var i=0; i<left.length; i++) {
  for (var j=0; j<right.length; j++) {
    if (left [i] == right[j]) {
      count++;
    }
  }
  sum = sum + left[i] * count;
  count = 0;
}

console.log(sum);
