const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('nam-input');
const emailInput = document.getElementById('mail-input');
const textErea = document.getElementById('text-erea-input');
const resetBtn = document.getElementById('reset-btn');
const submitBtn = document.getElementById('send');

myForm.addEventListener('submit', (event) =>{
    const errorMessage = document.getElementById('error-message');
    if(emailInput.value !== emailInput.value.toLowerCase()){
        errorMessage.style.visibility = "visible";
        errorMessage.style.transition = "0.5s ease";
        event.preventDefault();
        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
        },4000);
    }
    else{
        errorMessage.style.visibility = "hidden";
    }
})

resetBtn.addEventListener("click", ()=>{
    // location.reload();
    emailInput.value = '';
    nameInput.value = '';
    textErea.value = '';
})