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
   loginButton.onclick = () => logout();
   loginButton.innerHTML = 'LOG OUT';

   username.classList.add('disabled');
   password.classList.add('disabled');

   // if(rememberMeChecked === 1){
      username.value = client.username;
      password.value = password.username;
   // }
}

function login(){
   const username = document.querySelector('#username').value;
   const password = document.querySelector('#password').value;
   
   if(username === "" || password === ""){
      if(username === ""){
         username.style.border = 'solid';
         username.style['border-color'] = 'red';
         username.style['background-color'] = 'rgb(231, 104, 104)';
      }
      if(password === ""){
         password.style.border = 'solid';
         password.style['border-color'] = 'red';
         password.style['background-color'] = 'rgb(231, 104, 104)';
      }
   }else{
      window.localStorage.setItem('client', `{"username": "${username}", "password": "${password}"}`)
      document.querySelector('#login-button').onclick=()=>logout();
      document.querySelector('#login-button').innerHTML = 'LOG OUT';
      document.querySelector('#username').classList.add('disabled');
      document.querySelector('#password').classList.add('disabled');
   }
   
}

function showPass(){
   const container = document.querySelector('#password');
   if(container){
      if(container.type == "password")
         container.type = 'text';
      else container.type = 'password';
   }else alert("not found");
}
