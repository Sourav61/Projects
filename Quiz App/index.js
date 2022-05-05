var readlineSync = require('readline-sync');

let name=readlineSync.question("What's your name?\n");

console.log(`Hello ${name} welcome to the Marvel quiz\n`);

const input=readlineSync.question('Press 1 to play\nPress 2 to Quit\n')
const Quiz=()=>{
  let score=0;
const ques1=readlineSync.question("How many infinity stones are there?\n");
if(ques1==='6'){
  console.log("You know everything about Marvel");
  score++;
  console.log(`Your score is ${score}`);
}else{
  console.log('Better Luck Next Time');
}

const ques2=readlineSync.question("Who is Tony Stark's Father?\n");
if(ques2==='Howard Stark'){
  console.log("Yo nice");
  score++;
  console.log(`your score is ${score}`);
}else{
  console.log('Better Luck Next Time');
}

const ques3=readlineSync.question("What type of doctor is Doctor Strange?\n");
if(ques3==='Neurosurgeon'){
  console.log("Nice you know everything");
  score++;
  console.log(`your score is ${score}`);
}else{
  console.log('Better Luck Next Time');
}

const ques4=readlineSync.question("Who was able to pcik up Thor's hammer in endgame?\n");
if(ques4==='Captain America'){
  console.log("Nice you know everything");
  score++;
  console.log(`your score is ${score}`);
}else{
  console.log('Better Luck Next Time');
}

}

if(input==='1'){
  Quiz();
}else if(input==='2'){
  console.log("Thanks for joining\n");
}else{
  console.log("Enter Desired Number\n");
  Quiz();
}
