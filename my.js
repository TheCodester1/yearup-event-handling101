const x = 0 // constant: cannot be reassigned
let y = 0

console.log({x, y})

console.log("are we workin or are we workin?")

// The "document" object is the DOM (Document Object Model)
// The "DOM" is another way of calling the "HTML Tree Structure"
// In this case, Javascript's interpretation of the tree
let calculatorForm = document.getElementById('calculator-form')
let inputX = document.getElementById('number-x')
let inputY = document.getElementById('number-y')
let resultElement = document.getElementById('result')


// console.dir('login-form')

// function definition
function onCalculate (event) {  //input variable - > "parameter"
    event.preventDefault() // for every event listener for forms, prevents page from refreshing
    
    let sum = Number(inputX.value) + Number(inputY.value)
    resultElement.innerHTML = "<h4>" + sum + "</h4>"
    
    
}

// calculatorForm.onsubmit = onCalculate

onCalculate(SubmitEventObj) // input - > "argument"



// overrides everything
// loginForm.innerHTML = "<h3>yerrrr</h3>"

/* If your search results appear too random or unrelated to 
each other, your sign is either too specific or too general

Binary search - how to go from one place to another*/

// run a function
// call a function ("a function call")
// invoke a function ("a function invocation")
// execute a function (rare: "a function execution")
// method


function makePBJSandwich (bread, pb, jelly) { // one set of parameters
    // ...
    return newSandwich
}

// multiple possible arguments
let mySandwichAttempt1 = makePBJSandwich("whole wheat", "creamy Peter Pan", "blackberry")
let mySandwichAttempt2 = makePBJSandwich("potato bread", "chunky Jiff", "strawberry")

function calculateMean (x, y, z) { // one set of parameters
    return (x + y + z) / 3
}

// three sets of arguments
let average1 = calculateMean(3, 4, 5)
let average2 = calculateMean(100, 200, 132)
let average3 = calculateMean(3.4, 78, -19)

// \n = new line

