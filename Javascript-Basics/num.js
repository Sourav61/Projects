function missing(numbers) {
  var missing = -1;
  var sorted = numbers.sort(function(a, b) { return a - b; });

  for(i = sorted[0]; i<=numbers.length + 1; i++){
    console.log(numbers.indexOf(i));
    if(numbers.indexOf(i) === -1){
      missing = i;
    }
  }
  return missing;

}


var numbers = [3 ,8, 7, 9, 6, 1, 12, 18, 5, 14, 2, 19, 16, 11, 10, 15, 13, 17, 20];

console.log(missing(numbers));
