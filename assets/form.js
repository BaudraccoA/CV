function validateForm() {
    // Obtener los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementsByName('message')[0].value;

    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (name.trim() === '') {
      alert('Por favor, ingrese su nombre');
      return false;
    }
    
    if (email.trim() === '') {
      alert('Por favor, ingrese su correo electrónico');
      return false;
    }

    if (subject.trim() === '') {
      alert('Por favor, ingrese el asunto');
      return false;
    }
    
    if (message.trim() === '') {
      alert('Por favor, ingrese su mensaje');
      return false;
    }

    // Enviar el formulario por correo electrónico
    var form = document.getElementsByClassName('email-form')[0];
    var formData = new FormData(form);

    // Agrega el código para enviar el formulario por correo electrónico aquí
    // Puedes utilizar una biblioteca de envío de formularios o una API de correo electrónico

    // Mostrar el mensaje de éxito y limpiar el formulario
    document.getElementsByClassName('sent-message')[0].style.display = 'block';
    form.reset();

    return false; // Evitar que el formulario se envíe mediante la acción predeterminada
  }