window.onload = () => {
  checkbox = document.querySelector('input');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      /* реализация через CSS */
      document.getElementsByClassName('calendar')[0].classList.add('calendar_dark');
    } else {
      document.getElementsByClassName('calendar')[0].classList.remove('calendar_dark');
    }
  }
  )
}

