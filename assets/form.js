(function(){
  emailjs.init("s7dOAnnJ9TglWiKBc");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
       
      this.contact_number.value = Math.random() * 100000 | 0;

      var form = this; // Guardamos una referencia al formulario

      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');

      // Limpiamos el formulario
        form.reset();
        
        // Mostramos el alert
        alert('Gracias por escribir, pronto me pondré en contacto.');
        
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
};