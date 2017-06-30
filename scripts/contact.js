function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    alert('Name must be filled out.');
producePrompt('Invalid', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    alert('First and Last Name must be filled out.');
producePrompt('Invalid', 'name-error' , 'red')
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
      alert('Phone must be filled out.');
producePrompt('Invalid', 'phone-error' , 'red')
      return false;
    }

    if(phone.length != 11) {
      alert('Phone must have 11 numbers in it.');
producePrompt('Invalid', 'phone-error' , 'red')
      return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;

}

function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    alert('Email must be filled in.');
producePrompt('Invalid', 'email-error' , 'red')
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    alert('Email must be in correct format');
producePrompt('Invalid', 'email-error' , 'red')
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    alert('Message must be 30 characters long');
producePrompt('Invalid', 'message-error' , 'red')
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    alert('Fix all invalid fields.');
    setTimeout(function(){jsHide('submit-error');}, 2000);
      return false;
  }
  else {

  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}