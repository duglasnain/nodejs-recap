if(window.localStorage.getItem('client') !== null){
   const client = JSON.parse(window.localStorage.getItem('client'));
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   var loginButton = document.querySelector('#login-button');
   loginButton.onclick = () => logout();
   loginButton.innerHTML = 'LOG OUT';
   username.classList.add("disabled"); username.value = client.username;
   password.classList.add("disabled"); password.value = client.password;
}

function wrongInput(obj){
   obj.style.border = 'solid';
   obj.style['border-color'] = 'red';
   obj.style['background-color'] = 'rgb(231, 104, 104)';
}

function resetInput(obj){
   obj.style.border = 'none';
   obj.style['background-color'] = 'rgb(206, 230, 168)';
}

function login(){
   
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   
   if(username.value === "" && password.value === ""){
      wrongInput(username); wrongInput(password);
   }
   else if(username.value === "") wrongInput(username);
   else if(password.value === "") wrongInput(password);
   else{
      if(document.querySelector('#remember-me-checkbox').checked){
         window.localStorage.setItem('client', `{"username": "${username.value}", "password": "${password.value}"}`)
      }
      
      document.querySelector('#login-button').onclick=()=>logout();
      document.querySelector('#login-button').innerHTML = 'LOG OUT';
      document.querySelector('#username').classList.add('disabled');
      document.querySelector('#password').classList.add('disabled');
   }   
}

function logout(){
   const username = document.querySelector("#username");
   const password = document.querySelector("#password");
   window.localStorage.clear();
   document.querySelector('#login-button').onclick=()=>login();
   document.querySelector('#login-button').innerHTML = 'LOG IN';
   username.classList.remove('disabled');
   password.classList.remove('disabled');
}

function showPass(){
   const container = document.querySelector('#password');
   if(container){
      if(container.type == "password")
         container.type = 'text';
      else container.type = 'password';
   }else alert("not found");
}
