function average(scores) {
  // let sum = 0;
  // scores.forEach((score) => {
  //     sum += score;
  // });
  let total = scores.reduce(function(sum, score) {
    return sum + score;
  }, 0);
  total;
  console.log(scores.length);
  let ave = Math.round(total / scores.length);
  console.log(ave);
}

average([90, 83, 90, 78, 89, 99]);
