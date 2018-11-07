alert("myCurrentAge = 18");
console.log("Цикл For");
var myCurrentAge = 18;
for (var i = 3; i <= 18; i++)
{   
    if( i % 3 === 0)
    {
        console.log ( "Числа кратные 3 =", i);
    }
    if(i === 18)
    {
        console.log( "myCurrentAge-1");
    }
}


console.log("Цикл While");
var myCurrentAge = 0;
while(myCurrentAge <= 18)
{
    myCurrentAge++;
    if( myCurrentAge % 3 === 0)
    {
        console.log ( "Числа кратные 3 =", myCurrentAge);
    }
    
}  
console.log( "myCurrentAge-1");


console.log('Цикл DO WHILE');
var myCurrentAge = 0;
do {
    myCurrentAge++;
    
    if( myCurrentAge % 3 === 0)
    {
        console.log ( "Числа кратные 3 =", myCurrentAge);
    }
    
}
while(myCurrentAge<=18)
console.log( "myCurrentAge-1");


console.log('Цикл FOR-IN');
var ar = [3, 6, 9, 12, 15, 18];
for(var myCurrentAge in ar)
{
    console.log('Числа кратные 3 =', ar[myCurrentAge]);
    
}
console.log( "myCurrentAge-1");


console.log('START FOREACH DO ');
ar.forEach (function (el) {
    console.log("Числа кратные 3 =", el);
    })    
console.log( "myCurrentAge-1");