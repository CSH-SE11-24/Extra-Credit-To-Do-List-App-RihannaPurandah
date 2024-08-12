// Create an empty array called 'todoList' to store your to-do list items.
let todoList = []

// You will be implementing a loop that repeatedly displays possible options, takes user input, and performs actions accordingly. 
// Print "Welcome to the To-Do List App"
let welcome = "Welcome to the To-Do List"
console.log(welcome)
// Print the options 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit

let options = ["0 - Display the List", "1 - Add New Task to end","Add New Task to Beginning","Delete First Task", "Exit"]
console.log(options)
// Define a variable called userChoice and set it to 0
let userChoice = 0

// Create a while loop that runs while the user doesn't type in 5
let user = prompt("Choose A Number:")
user = parseInt(user)
console.log(user)
while (user !== 4){
  if(user == 0){
    console.log("Display the List:")
  } else if(user == 1){
    user = "Add A New Task @ end"
    todoList.push(user)
  } else if(user = 2){
    user = "Add A New Task @ beginning"
    todoList.push(user)
  } else if(user == 3){
    user = "Delete First Task"
  } 
}

// In the loop, use conditionals to match the action to the option 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit









