function saveData(){
    let nameInput = document.getElementById('name-input').value;
    let textEreaInput = document.getElementById('text-erea-input').value;

    localStorage.setItem("email",emailInput);
    localStorage.setItem("name",nameInput);
    localStorage.setItem("textErea",textEreaInput);
}