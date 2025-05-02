/*let accform = document.getElementById('accregcon');
let signupbtn = document.getElementById('sgnup').style;

function showsignIn(){
accform.className = "container mt-5 text-center"
signupbtn.visibility = 'hidden'
}

function hideForm(){
    accform.className = 'd-none'
    signupbtn.visibility = 'visible'
}
*/
/*const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Perform form validation here
  if (formIsValid()) {
    // If the form is valid, proceed with submission logic
    // For example, using fetch or AJAX to send data
    fetch('/submit-form', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        // Execute code for successful submission
        console.log('Form submitted successfully!');
        // Add further actions like displaying a success message or redirecting
      } else {
        // Handle errors if the submission fails
        console.error('Form submission failed.');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  } else {
      // Handle the case where the form is invalid
      console.log('Form is invalid. Please correct the errors.');
  }
});

function formIsValid() {
    // Implement your validation logic here
    // Return true if the form is valid, false otherwise
    return true; // Replace with actual validation
}*/

/*
function greet(name, callback){
    const greetMessage = document.getElementById('testbtn');
    greetMessage.textContent = "Hello, " + name +'!';
    callback();
}

function farewell(){
    const farewellMessage = document.getElementById('another');
    farewellMessage.textContent = 'Goodbye!';
}

document.getElementById('greetbtn').addEventListener('click', function(){
    greet('Alice', farewell);
})*/


function walkDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            const dogWalked=true;

            if (dogWalked){
            resolve('You walk the dog')}
            else {reject('You didnt clean the kitchen')};
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            const cleaned=true;
            if (cleaned){
            resolve('You clean the kitchen')}
            else {reject('You did not clean the kitchen')};
        }, 2500)
    })
}


function takeTrashOut(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashout=false

            if (trashout){
            resolve('You take out the trash')}
            else {reject('You did not take the trash out')};
        }, 500)
    })
    
}


 async function doChores(){
    try {const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const trashOutResult = await takeTrashOut();
    console.log(trashOutResult);

    console.log('You did all the chores!');
}
catch(error){
    console.log(error)
}
 };

doChores();