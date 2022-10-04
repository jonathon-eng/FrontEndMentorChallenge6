const form = document.getElementById('myform')

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    if (errors() === true) {
        location.reload();
    } else return false;

})


function errors(){

    let valid = true, error = "", field = "";

    field = document.getElementById("Email");
    error = document.getElementById("email");
    
    if (field.value.trim().length === 0) {
        valid = false;
        field.style.border = "1px solid hsl(354, 100%, 66%)";
        field.style.color = "hsl(354, 100%, 66%)";
        field.classList.add("err");
        error.innerHTML = "Whoops! It looks like you forgot to add your email\r\n";
        return false;
      }
    
    else if (!field.checkValidity()) {
      valid = false;
      field.style.outline = "1px solid hsl(354, 100%, 66%)";
      field.style.color = "hsl(354, 100%, 66%)";
      field.classList.add("err");
      error.innerHTML = "Please provide a valid email address\r\n";
      return false;
    } 
    
    else {
      field.classList.remove("err");
      field.style.outline = "1px hsl(246, 25%, 77%) solid";
      field.style.color = "hsl(249, 10%, 26%)";
      error.innerHTML = "";
      return true;
    }

    
}

