const score = prompt("Please Enter Your Score");

if(score>=90){
    console.log("A+");
}

else if(score>=89 && score>=85){
console.log("A");
}


else if(score>=84 && score>=80){
    console.log("A-");
}

else if(score>=79 && score>=75){
    console.log("B+")
}

else if(score>=74 || score>=71){
    console.log("B");
}

else if(score>=70 || score>=68){
    console.log("B-");
}

else if(score>=67 || score>=64){
    console.log("C+");
}

else if(score>=63 || score>=61){
    console.log("C");
}

else if(score>=60 || score>=57){
    console.log("C-");
} 

else if(score>=56 || score>=53){
    console.log("D+");
}

else if(score>=52 || score>=50){
    console.log("D");
}

else if(score<=49){
    console.log("Fail");
}