document.addEventListener('DOMContentLoaded', () => {
    
  
    const dogForm = document.querySelector('#dog_form');
    dogForm.addEventListener('submit', handleDogFormSubmit);
    
  })

  const handleDogFormSubmit = function (event) {
    
    event.preventDefault();

    // sets new div under which the form items will be placed
    const newDiv= document.createElement('div');    


    // creates paragraph with the breed name
    const newName= document.createElement('p');
    newName.textContent=  `Breed : ${event.target.name.value}`;

    // creates paragraph with the kids friendly rating
    const newKidsFriendly= document.createElement('p');
    newKidsFriendly.textContent= `Kids friendly rating: ${event.target.kids_friendly.value}`;

    //appends h2 with new div
    const h2 = document.querySelector("h2");
    h2.appendChild(newDiv);

    //adds paragraphs under newly created div
    newDiv.appendChild(newName);
    newDiv.appendChild(newKidsFriendly);
    
    //resets form data
    document.getElementById("dog_form").reset();
  }