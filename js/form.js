const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_vgrigjp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Su mensaje se ha enviado!');
      this.reset();
     
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});