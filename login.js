const username=document.getElementById('userName');
const password=document.getElementById('passWord');
const login=document.getElementById('login');

login.addEventListener("click",()=>{
    const enteredUsername = username.value;
    const enteredPassword = password.value;

    if (enteredUsername === 'sowmya' && enteredPassword === 'sowmya') {
        window.open("https://bmsit.ac.in/", "_blank");
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});


