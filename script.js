document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields!");
      return;
    }

    const userData = {
      email,
      password
    };

    localStorage.setItem('formData', JSON.stringify(userData));
    alert("Form data saved to localStorage!");

    emailInput.value = '';
    passwordInput.value = '';
  });
});
