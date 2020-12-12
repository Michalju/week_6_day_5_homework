document.addEventListener('DOMContentLoaded', () => {
    
  
    const dogForm = document.querySelector('#dog_form');
    dogForm.addEventListener('submit', handleDogFormSubmit);

    createButton();
    createSection(); 

    const deleteAllButton = document.querySelector('#DeleteAll');
    deleteAllButton.addEventListener('click', handleDeleteAllButton);
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
    const section = document.querySelector("section");
    section.appendChild(newDiv);

    //adds paragraphs under newly created div
    newDiv.appendChild(newName);
    newDiv.appendChild(newKidsFriendly);

    //resets form data
    document.getElementById("dog_form").reset();


  }

  const handleDeleteAllButton = function (event){
     
    const readingList = document.querySelector('section');
    readingList.innerHTML = '';
  }

  const createButton = function(){
    // create button under h2 header
    const h2 = document.querySelector('h2');
    const deleteAll = document.createElement('button');
    deleteAll.textContent = 'DeleteAll';
    deleteAll.setAttribute("id", "DeleteAll");
    h2.appendChild(deleteAll);
  }


  const createSection = function(){
       // create section under h2 header to keep items
       const h2 = document.querySelector('h2');
       const section = document.createElement('section');  
       h2.appendChild(section);
  }