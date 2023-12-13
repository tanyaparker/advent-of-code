var sum = 0;
var cards = [
 [8, 1], 
 [2, 1], 
 [2, 1], 
 [1, 1], 
 [0, 1],
 [0, 1]
];

for (var i=0; i<cards.length; i++) {
  if (cards[i] != 0) {
    for (var j=1; j<=how_many_copies(cards[i][0]); j++) {
      for (var k=1; k<=cards[i][1]; k++) {
        cards[i+j][1] = cards[i+j][1] + 1;
      }
    }
  }
}

for (var l=0; l<cards.length; l++) {
  console.log(cards[l][0] + "," + cards[l][1]);
  sum = sum + cards[l][1];
}

console.log(sum);

function how_many_copies(points) {
  var copies;
  switch (points) {
    case 1:
      copies = 1;
      break;
    case 2:
      copies = 2;
      break;
    case 4:
      copies = 3;
      break;
    case 8:
      copies = 4;
      break;
    case 16:
      copies = 5;
      break;
    case 32:
      copies = 6;
      break;
    case 64:
      copies = 7;
      break;
    case 128:
      copies = 8;
      break;
    case 256:
      copies = 9;
      break;
    case 512:
      copies = 10;
  }
  return copies;
}
