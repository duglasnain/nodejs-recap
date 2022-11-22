var rememberMeChecked = 0
var rememberMeCheckbox = document.querySelector('#remember-me-checkbox')
rememberMeCheckbox.addEventListener('change', ()=>{
   this.checked ? rememberMeChecked=1 : rememberMeChecked=0;
})

if(window.localStorage.getItem('client') !== null){
   const client = JSON.parse(window.localStorage.getItem('client'));
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   var loginButton = document.querySelector('#login-button');
   loginButton.onclick = () => login();
   loginButton.innerHTML = 'LOG OUT';

   username.classList.add('disabled');
   password.classList.add('disabled');
   if(rememberMeChecked === 1){
      username.value = client.username;
      password.value = password.username;
   }
}

function login(){
   const username = document.querySelector('#username').value;
   const password = document.querySelector('#password').value;
   
}

function showPass(){
   const container = document.querySelector('#password');
   if(container){
      if(container.type == "password")
         container.type = 'text';
      else container.type = 'password';
   }else alert("not found");
}