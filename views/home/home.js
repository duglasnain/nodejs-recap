fetch('http://localhost:3000/api/cats/')
   .then(res=>{
      return res.json();
   })
   .then(arr=>{
      const container = document.querySelector('#container-items')
      
      arr.forEach((item, index) => {
         const newCat = document.createElement('div')
         newCat.classList.add('item')
         newCat.setAttribute('id', 'item-'+index)
         
         
         const image = document.createElement('div')
         image.classList.add('image')

         image.style['background-image'] = `url(${item.image_link})`
         

         const content = document.createElement('div')
         content.classList.add('content')

         

         const name = document.createElement('div'), action = document.createElement('div'), age = document.createElement('div');
         console.log(item.image_link)

         name.innerHTML = `Name: ${item.name}`;
         age.innerHTML = `Age: ${item.age}`;
         action.innerHTML = `When bored: ${item.bored_action}`
         
         container.appendChild(newCat)
         newCat.appendChild(content); newCat.appendChild(image);
         content.appendChild(name); content.appendChild(age); content.appendChild(action);
      });
   })
   .catch(err=>console.log(err))

async function createInstance(){
   //get name
   const name = document.querySelector('#name').value;

   //get action
   let action
   await fetch('https://www.boredapi.com/api/activity')
      .then(res=>{
         return res.json()
      })
      .then(data=>{
         action = data.activity
      }).catch(err=>{console.log(err)})

   //get image_link from 
   const link = document.querySelector('#image-link').value;

   
   //get age
   let age = Math.trunc(Math.random()*10)

   //add to db
   fetch(
      'http://localhost:3000/api/cats/reg',
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            "name": name,
            "bored_action": action,
            "image_link": link,
            "age": age
         })
      }
   )
   .then(res=>{
      alert(`${name} is new kitty`)
      // console.log(res)
      window.location.reload();
   })
   .catch(err=>{
      console.log(err)
   })
}