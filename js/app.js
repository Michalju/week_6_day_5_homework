document.addEventListener('DOMContentLoaded', () => {
    
  
    const dogForm = document.querySelector('#dog_form');
    dogForm.addEventListener('submit', handleDogFormSubmit);
    
  })

  const handleDogFormSubmit = function (event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.kids_friendly.value);
    const newdiv= document.createElement('div');
    newdiv.setAttribute("id", event.target.name.value);
    const newName= document.createElement('p');
    newName.textContent=  `Breed : ${event.target.name.value}`;
    const newKidsFriendly= document.createElement('p');
    newKidsFriendly.textContent= `Kids friendly rating: ${event.target.kids_friendly.value}`;
    const h2 = document.querySelector("h2");
    h2.appendChild(newdiv);
    const div= document.querySelector(`#${event.target.name.value}`);
    div.appendChild(newName);
    div.appendChild(newKidsFriendly);
    document.getElementById("dog_form").reset();
  }