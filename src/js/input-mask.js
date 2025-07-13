document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('request-form-phone-input');
  if (!input) return;

  input.addEventListener('focus', onFocus);
  input.addEventListener('input', onInput);
  input.addEventListener('blur', () => {
    if (input.value.replace(/\D/g, '').length < 11) {
      input.value = '';
    }
  });

  function onFocus() {
    if (!input.value.replace(/\D/g, '').startsWith('7')) {
      input.value = '+7 ';
    }
    setCursor(3);
  }
  
  function onInput() {
    const raw = input.value;
    const oldCursor = input.selectionStart;

    let digits = raw.replace(/\D/g, '').slice(0, 11);
    if (!digits.startsWith('7')) {
      digits = '7' + digits.replace(/^7*/, '');
    }

    let countBefore = 0;
    for (let i = 0; i < oldCursor; i++) {
      if (/\d/.test(raw[i])) countBefore++;
    }

    let formatted = '+7 ';
    if (digits.length > 1) formatted += '(' + digits.slice(1, 4);
    if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7);
    if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);
    if (digits.length >= 9) formatted += '-' + digits.slice(9, 11);

    input.value = formatted;
    let newCursor = 0, seen = 0;

    while (newCursor < formatted.length && seen < countBefore) {
      if (/\d/.test(formatted[newCursor])) seen++;
      newCursor++;
    }

    if (newCursor < 3) newCursor = 3;
    setCursor(newCursor);
  }

  function setCursor(pos) {
    setTimeout(() => {
      input.setSelectionRange(pos, pos);
    }, 0);
  }
})
