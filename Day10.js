// All Methods are Function 
// but
// not all Functions are Methods

// What is Function
// A Function is a Standalone block of code that can be called or invoked, function can be defined in another function, which bascially means Functional Scope.

// For Example

let first = function () {
    let name = "Ram Sharma";
    return name;
}

let second = function () {
    let line = 'Hello, How are you my name is ${first()}'
    return line;
}
console.log(second());

/*******  These are Functions ******/
/*******  What is Method ************/
// When Function is Defined inside a block, then that function is called as a method, now we can call that method as a function but not all functions are methods 

let section = {
    id: "A2",
    student: 54,
    ccName: function Name () {
        return "Mr. Shyam"
    }
}

console.log(section.ccName())
// In this context of section, the ccName is a method and it is also a function which return Mr. Shyam
// Name is only an identifier for the function ccName, Name is not directly invoked 

let sectionB2 = {
    id: "B2",
    students: 64,
    ccName: function Name(){
        return "Mrs. Rashmika "
    }
}
console.log(section.Name())

// this will cause an error, Error Name = Name() is not a Function
