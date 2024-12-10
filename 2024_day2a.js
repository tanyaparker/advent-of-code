var reports = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 8, 4, 4, 1],
  [1, 3, 6, 7, 9]
];

for (var i=0; i<reports.length; i++) {
  if (check_direction(reports[i][0], reports[i][1]) == "no change") {
    reports.splice(i, 1);
    i--;
  } else {
    reports[i].unshift(check_direction(reports[i][0], reports[i][1]));
  }
}

for (var i=0; i<reports.length; i++) {
  for (var j=2; j<reports[i].length-1; j++) {
    if (safe_change(reports[i][0], reports[i][j], reports[i][j+1]) == false) {
      reports.splice(i, 1);
      i--;
    }
  }
}

function check_direction(first, second) {
  if (first-second == 0) {
    return "no change";
  }
  else if(first-second < 0) {
    return "increasing";
  }
  else if (first-second > 0) {
    return "decreasing";
  }
}

function safe_change(old_dir, first, second) {
  if (check_direction(first, second) == "no change") {
    return false;
  } 
  else if (old_dir != check_direction(first, second)) {
    return false;
  }
  else {
    if ([1,2,3].includes(Math.abs(first-second))) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(reports.length);
