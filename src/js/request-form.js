document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("request-form");
  const formInputs = document.querySelectorAll(".request-form-input");
  const inputName = document.getElementById("request-form-name-input");
  const inputPhone = document.getElementById("request-form-phone-input");
  const checkAgreement = document.getElementById("request-form-checkbox");
  const checkText = document.getElementById("request-form-checkbox-label");
  const alertPopup = document.getElementById('alert-popup');

  if (form) {
    const submitForm = (event) => {
      event.preventDefault();
      const agreementValue = checkAgreement.checked;
      const emptyInputs = Array.from(formInputs).filter(input => input.value.trim() === '');

      formInputs.forEach(input => {
        if (input.value.trim() === '') {
          input.classList.add("errorValidation", "tomatoText");
        } else {
          input.classList.remove("errorValidation", "tomatoText");
        }
      });

      if (!agreementValue) {
        checkText.classList.add("tomatoText");
      } else {
        checkText.classList.remove("tomatoText");
      }

      if (emptyInputs.length !== 0 || !agreementValue) {
        return false;
      }

      const data = {
        name: inputName.value,
        phone: inputPhone.value,
        agreementCheck: agreementValue,
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(() => {
        form.reset();
         alertPopup.style.display = 'flex';
            requestAnimationFrame(() => {
            alertPopup.classList.add('show');
        });
      })
      .catch(error => {
        console.error('Ошибка при отправке формы:', error);
      });
    };

    form.addEventListener('submit', submitForm);
  }
});