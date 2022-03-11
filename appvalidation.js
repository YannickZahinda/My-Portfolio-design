const myForm = document.getElementById('my-form');
const emailInput = document.getElementById('mail-input');

myForm.addEventListener('submit', (event) =>{
    const errorMessage = document.getElementById('error-message');
    if(emailInput.value !== emailInput.value.toLowerCase()){
        errorMessage.style.visibility = "visible";
        errorMessage.style.transition = "0.5s ease";
        event.preventDefault();
        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
        },4000);
        // emailInput.value = emailInput.value.toLowerCase();
    }
    else{
        errorMessage.style.visibility = "hidden";
    }
})