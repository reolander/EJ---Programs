//Run code in the context of Chapter 0.
//Using Javascript print the sum of first 10 integers;
var total = 0; count = 1;
while(count<=10) {
 total += count;
 count += 1;
}
console.log(total);


//Run code in the context of Chapter 1.
//The following code is used to test whether a meaningful value is present in a variable
//or not.
if(null==false)
  console.log(true);
else
  console.log(false);

 // Run code here in the context of Chapter 2
//Demo about alert function.
alert("hello Rohan!");

//Prompt function
prompt("What are you doing?");

//Confirm function
confirm("Are you sure?");

//Printing X value.
var x=40;
console.log("Value of x is " + x);

//Squaring a number by taking input from user.
var num = Number(prompt("Pick a number"));
if(!isNaN(num))  
  alert("Your number is square root of " + num*num);
else
  alert("You did not enter a number!");

//Check whether a number is big or small or large;
var num = Number(prompt("Enter a number!"));
if(num < 5)
  alert("Small");
else if(5 < num && num < 10)
   alert("Big");
else if (num > 10)
  alert("Large");
else if(!NaN(num))
  alert("Please enter a number!");

//Create a program to log first 7 even numbers starting from 0.
var number = 0;
while(number <= 12) 
{
  console.log(number);
  number += 2;
}


//Exercises
// Loop a pyramid.
var lengthOfPyramid = prompt("Please enter a number:");
for(var line='#'; line.length < lengthOfPyramid; line += '#')
  console.log(line);

// FizzBuzz.
for(var n=1; n<100; n++)
{
  var output = '';
  if(n%3==0)
    output += "Fizz";
  if(n%5==0)
    output += "Buzz";
  console.log(output || n);
}

// ChessBoard.
var board = "";
for(var x=0; x<8; x++)
{
 for(var y=0; y<8; y++)
   if((x+y)%2==1)
     board += "#"; 
   else
     board += " ";
 board += "\n";
}
console.log(board);

