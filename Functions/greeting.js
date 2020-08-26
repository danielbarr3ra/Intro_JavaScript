let grettingMessage = 'Good Mroning';
console.log(grettingMessage);

function greetPeople() {
  console.log(grettingMessage);
}

greetPeople();

/*
greeting message is accesed within the function since it
 is a gloal vairbale
*/

function changeGreetingMessage (newMessage) {
  grettingMessage=newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople(); // logs Good eveining
//becasue there was a change thorugh the change function 
// since the greeting message was a global variable
// the fucniton accesed it
//avoid global variables

//Local Variable
function greetPeople() {
  let greetingMessage = 'Good Morning'
  console.log(greetMessage); 
}

greetPeople();

// if you try to use the message outside
// of the function you get a reference error

// you can avoid useing the variable by using
// an argument

function greetPeople(message){
  console.log(message);
}
greetPeople('Good Morning');

/*
the message is in fact a local variable that is 
initialized from the argument passed to the function
*/