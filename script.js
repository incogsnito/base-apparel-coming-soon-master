const btn = document.getElementById('btn');
const error = document.getElementById('error');
const email = document.getElementById('email');
const form = document.getElementById('form');
const invalid = document.getElementById('invalid')


form.addEventListener('click', (e) =>{

  const emailValidity = email.checkValidity()


    if(e.target != btn ){
      return;
    }

  if (emailValidity === false){
      e.preventDefault()
      error.classList.add('active')
      invalid.innerHTML = 'Please provide a valid email'
  }

  invalid.innerHTML 




});