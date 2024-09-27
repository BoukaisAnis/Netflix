let form = document.getElementById('form')

let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let sumbit = document.getElementById('sumbit');

console.log(form);

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    console.log(e);
    
    let user ={
        name : name.value,
        email: email.value,
        password: password.value,
    }
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    alert("Sign up succefuly 🎉\n Please wait 10 minutes we will send you your Netflix Account ")
    form.reset();

});
