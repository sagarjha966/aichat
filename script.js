const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');
const trackBtn = document.getElementById('track-btn');
const trackInput = document.getElementById('track-id');
const trackResult = document.getElementById('track-result');
const questionForm = document.getElementById('question-form');
const questionMessage = document.getElementById('question-message');

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const serviceId = `SRV${Math.floor(Math.random() * 9000 + 1000)}`;
  bookingMessage.textContent = `Booking submitted successfully. Your service ID is ${serviceId}.`;
  bookingForm.reset();
});

trackBtn?.addEventListener('click', () => {
  const id = trackInput.value.trim();
  if (!id) {
    trackResult.textContent = 'Please enter your service ID.';
    return;
  }

  const states = ['Technician Assigned', 'On the Way', 'In Progress', 'Completed'];
  const state = states[Math.floor(Math.random() * states.length)];
  trackResult.textContent = `${id.toUpperCase()}: ${state}`;
});

questionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  questionMessage.textContent = 'Thanks! Our support team will contact you shortly.';
  questionForm.reset();
});
