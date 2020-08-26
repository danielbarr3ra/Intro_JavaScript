
function factorial(number){
  if (number === 1){
    return number
  } else {
    return number*factorial(number-1)
  }
}
for (index=1; index<6; index++ ) {
  console.log(factorial(index));
}