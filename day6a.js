var time = 7;
var record = 9;
var distance;
var win = 0;

for (var i=1; i<time; i++) {
  distance = (time - i) * i;
  if (distance > record) {
    win = win + 1;
  }
}

console.log(win);
