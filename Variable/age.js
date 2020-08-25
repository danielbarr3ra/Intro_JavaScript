let ages=[10,20,30,40,50]
console.log(`You are 20 years old.`)
ages.forEach(age => {
  if (age != 20){
    console.log(`In ${age}, you will be ${age+20} years old.`)
  }
})