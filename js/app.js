document.addEventListener('DOMContentLoaded', () => {
    
  
    const dogForm = document.querySelector('#dog_form');
    dogForm.addEventListener('submit', handleDogFormSubmit);
    
  })

  const handleDogFormSubmit = function (event) {
    event.preventDefault();
    console.log('hi');

  }