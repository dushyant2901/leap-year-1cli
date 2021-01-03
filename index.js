var readlineSync=require("readline-sync");
var chalk=require("chalk")
var c1 = chalk.hex('#DEADED');
var c2 = chalk.keyword('orange');
var c3= chalk.hex('#e6e0d4')
var c4=chalk.green
var c5=chalk.yellow
var c6=chalk.hex('e6e0d4')

var username=readlineSync.question(c1("what is your name?"))
var welcomeMessage="Hi! "+ username+ " Do you want to check whether your birth year was leap year or not?"
console.log(c2(welcomeMessage))
console.log("-----------------------------------------------------")
var instruction=" INSTRUCTION: when asked to write down your born year age write it down in YYYY format"
console.log(c3(instruction))
console.log("-----------------------------------------------------")
var userBornYear=readlineSync.question(c4("Write the year in which you were born?"))
console.log("-----------------------------------------------------")
if(userBornYear%4===0)
{
  if(userBornYear%100===0){
    console.log(c5("You were born in the leap year"));
    console.log(c6("-----------------------------------------------"))
  }else{
    if(userBornYear%400===0){
      console.log(c5("You were born in the leap year"));
      console.log(c6("---------------------------------------------"))
    }else{
      console.log(c5("YOu were not born in the leap year"));
      console.log(c6("---------------------------------------------"))
    }
    
  }
}
else{
  console.log(c5("YOu were not born in the leap year"));
  console.log(c6("-------------------------------------------------"))
}
