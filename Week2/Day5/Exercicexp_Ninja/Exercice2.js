// Main version: one function does everything
function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  const average = sum / gradesList.length;
  console.log("Average: " + average);

  if (average > 65) {
    console.log("Congratulations, you passed!");
  } else {
    console.log("Sorry, you failed and must repeat the course.");
  }
}

findAvg([80, 72, 90, 65]); 
findAvg([50, 60, 70, 40]); 


// Bonus: split into two functions, one calls the other

// Parts 1 & 2: calculate and log the average
function findAvgSplit(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  const average = sum / gradesList.length;
  console.log("Average: " + average);

  checkResult(average); 
}

// Parts 3 & 4: decide pass or fail
function checkResult(average) {
  if (average > 65) {
    console.log("Congratulations, you passed!");
  } else {
    console.log("Sorry, you failed and must repeat the course.");
  }
}

findAvgSplit([80, 72, 90, 65]);