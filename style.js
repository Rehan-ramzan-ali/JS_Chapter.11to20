
//_______________1. Comparison Operators_____________//




var age=Number(prompt("enter yuor age"))

if(age>=1 && age<=18){
    console.log("Eligibel")
}
else{console.log("Not Elegibel")}



// // ____________2. If-Else & Nested Conditions____________//




// // 1.Develop a grading system based on user-provided marks://


var marke=Number(prompt("enter your marks"))

if(marke>=90 && marke<100){
    console.log("A+"+"Excellent")
}
else if ( marke>=80 && marke<90){
    console.log("A"+"Very Good")
    
}
else if ( marke>=70 && marke<80){
    console.log("B"+"Good")
    
}
else if ( marke>=60 && marke<70){
    console.log("C"+"Needs Improvement")
}
else if ( marke>=50 && marke<60){
    console.log("D"+"Needs Very Improvement")
    
}
else{console.log("pleace try again")}



// // 2.Create a score evaluation program://



var marke=Number(prompt("enter your marks"))

if(marke>=90 && marke<100){
    console.log("Excellent")
}
else if ( marke>=80 && marke<90){
    console.log("Very Good")
    
}
else if ( marke>=70 && marke<80){
    console.log("Good")
    
}
else if ( marke>=60 && marke<70){
    console.log("Needs Improvement")
}

else if ( marke<60){
    console.log("faild")
    
}
else{console.log("pleace try again")}



// __________________3. Arrays_____________//



var arr=["rehan","raza","ramzan","shabir","ali",]
console.log(arr)




//___________________4. Adding, Removing, Inserting, Extracting Elements_________________//




//___1.Append a new element to an existing array using js method method, then print the modified array___//

var arr=["rehan","raza","ramzan","shabir","ali"]

console.log(arr+"don")

//__2. Remove the last element from an array using js method method and then print the altered array.__//

var arr=["rehan","raza","ramzan","shabir","ali"]

arr.pop()
console.log(arr)

//__3. Add an element to the beginning of an array using the appropriate JavaScript method and print the result//

var arr=["rehan","raza","ramzan","shabir","ali"]

arr.unshift("don")
console.log(arr)

// 4. Remove the first element of an array using the designated method and display the array's new state.

var arr=["rehan","raza","ramzan","shabir","ali"]

arr.shift()
console.log(arr)

// 5.Insert a new element at a specific midpoint within an array using an appropriate method, then print the array to confirm the insertion.//

var arr=["rehan","raza",  ,"ramzan","shabir","ali"]

console.log(arr.splice(2,1,"don" ))
console.log(arr)
var arr=["rehan","raza",  ,"ramzan","shabir","ali"]

//___6.Extract a specific element from an array into a newly created array using the relevant JavaScript method and display both arrays.//

var arr=["rehan","raza","ramzan","shabir","ali"]
console.log(arr.splice(2,1,"don" ))
console.log(arr)



//______________ 5. For Loops_____________//

// __1Use a for loop to g8enerate and print the inverse multiplication table of 5 (e.g., 50, 45, ..., 5).//
var names=[1,2,3,4,5,6,7,8,9,10]
for(var i=9;i>=0;i--){
    for(var j=6;j>=6;j--){
       
    }
    console.log(names[i]*[j]
    )
}


//__2.Implement a flag variable within a for loop to check if a specific number is present in an array. If found, print"Found" and terminate the loop immediately//

var nub=["10","40","30","50","40","70",]
var found="40"
var flag=false
for ( var i=0; i<nub.length; i++){
    if(nub[i] == "40"){
        flag=true

        console.log(flag)
        break;
        
    }
}




//____3.Write a loop that stops execution when the number 5 is detected, leveraging a suitable JavaScript method to achieve this condition. 



for (let i = 1; i <= 10; i++) {
  console.log(i);

  if (i === 5) {
    console.log("Number 5 detected. Stopping loop...");
    break; // exits the loop
  }
}

