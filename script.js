// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Contact form — opens the visitor's email client with everything pre-filled,
  // addressed to the business inbox. No backend required.
  //
  // Upgrade path: to collect submissions without a mailto redirect (e.g. into a
  // dashboard or spreadsheet), sign up at https://formspree.io, create a form
  // tied to s.edwinantonyraj@gmail.com, and point this <form>'s action to your
  // Formspree endpoint with method="POST" instead of using this script.
  var CONTACT_EMAIL = 's.edwinantonyraj@gmail.com';

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var email = form.email.value.trim();
      var serviceSelect = form.service;
      var service = serviceSelect.options[serviceSelect.selectedIndex]
        ? serviceSelect.options[serviceSelect.selectedIndex].text
        : '';
      var message = form.message.value.trim();

      var subject = 'Service Request: ' + (service || 'General Enquiry') + ' — ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        'Service Needed: ' + service + '\n\n' +
        'Message:\n' + message;

      var mailtoLink =
        'mailto:' + encodeURIComponent(CONTACT_EMAIL) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailtoLink;

      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
});
