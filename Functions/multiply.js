let readline=require('readline-sync');
function ask (text){
  return Number(readline.question(text));
}
function multiply(number1,number2){
  return number1*number2
}


n1 = ask('Enter the first number: ')
n2 = ask('Enter the second number: ')
console.log(`${n1} * ${n2} = ${multiply(n1,n2)}`)
