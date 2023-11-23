function validateForm(){
    let check = document.forms["my-form"]["name"]["email"]["message"].value;
    if(check == ""){
        alert("Name, email, and message box cannot be blank");
        return false;
    }
}