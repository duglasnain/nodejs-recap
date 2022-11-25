if(window.localStorage.getItem('client') !== null){
   const client = JSON.parse(window.localStorage.getItem('client'));
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   var loginButton = document.querySelector('#login-button');
   loginButton.onclick = () => logout();
   loginButton.innerHTML = 'LOG OUT';
   username.classList.add("disabled"); username.value = client.username;
   password.classList.add("disabled"); password.value = client.password;
   document.querySelector('#show-password-checkbox').disabled = true;
   document.querySelector('#remember-me-checkbox').disabled = true;
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
      document.querySelector('#show-password-checkbox').disabled = true;
      document.querySelector('#remember-me-checkbox').disabled = true;
   }

   fetch('http://localhost:3000/api/users')
      .then(res=>res.json())
      .then(data=>{
         data.forEach(user => {
            if(username.value == user.username && password.value == user.password)
               console.log('logged in')
            else console.error('invalid data')
         });
      })
      .catch(err=>console.error(err));
   
}

function logout(){
   const username = document.querySelector("#username");
   const password = document.querySelector("#password");
   window.localStorage.clear();
   document.querySelector('#login-button').onclick=()=>login();
   document.querySelector('#login-button').innerHTML = 'LOG IN';
   username.classList.remove('disabled');
   password.classList.remove('disabled');
   document.querySelector('#show-password-checkbox').disabled = false;
   document.querySelector('#remember-me-checkbox').disabled = false;
}

function showPass(){
   const container = document.querySelector('#password');
   if(container){
      if(container.type == "password")
         container.type = 'text';
      else container.type = 'password';
   }else alert("not found");
}

function register(){
   const username = document.querySelector('#username');
   const password = document.querySelector('#password');
   if(username.value === "" && password.value === ""){
      wrongInput(username); wrongInput(password);
   }
   else if(username.value === "") wrongInput(username);
   else if(password.value === "") wrongInput(password);
   else{
      fetch(
         'http://localhost:3000/register/reg',
         {
            method:"POST",
            headers:{
               "Content-Type": "application/json"
            },
            body:JSON.stringify({
               "username": `${username.value}`,
               "password": `${password.value}`
            })
         })
         .then((res)=>{
            console.log(res)
            alert(`${username.value} registered!`);
            // window.location = 'http://localhost:3000/login';
         }).catch(err=>console.log(err))
      
   }
}