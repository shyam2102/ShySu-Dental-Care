document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const date = document.getElementById('appointment-date').value;
      const time = document.getElementById('appointment-time').value;
      const serviceType = document.getElementById('service-type').value;
  
      if (!date) {
        alert('Please select an appointment date.');
        return;
      }
  
      if (!time) {
        alert('Please select an appointment time.');
        return;
      }
  
      if (!serviceType) {
        alert('Please select a service type.');
        return;
      }
  
      const currentDate = new Date().toISOString().split('T')[0];
      if (date < currentDate) {
        alert('Appointment date cannot be in the past.');
        return;
      }
  
      alert('Appointment booked successfully!');
      form.submit(); // Submit the form after validation
    });
  });
  