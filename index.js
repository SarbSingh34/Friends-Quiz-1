var readlinesync = require('readline-sync');
var  score=0;
var username = readlinesync.question('what is your name?');
console.log('Welcome \n'+username+'  \n Do You know Who is Dollar Boy?');

function play(question,answer)
{
 var answer1 =  readlinesync.question(question);
  if(answer1 === answer)
  {
    console.log("You are Right");
     score = score+1;
     console.log(' The score is:'+ score);
  }else
  {
    console.log("You are Wrong");
     score = score-1;
     console.log(' The score is:'+ score);
  }
}

var questions = 
[
  {
    question: " Where do i Live ? ",
    answer : "chd"
  },
  {
    question: " Where do i Study? ",
    answer : "PUP"
  },
  {
  question : " What do you think he is best known for?  ",
   answer : "hardwork"
  }
]
for(var i=0;i<questions.length;i++)
{
  var currentvalue = questions[i];
  play(currentvalue.question,currentvalue.answer);
}