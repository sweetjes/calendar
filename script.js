window.onload = () => {
  let title = document.querySelector('h1'),
    nameDay = document.querySelectorAll('.border_dissapering'),
    numberDay = document.querySelectorAll('.numbers'),
    offDayColor = document.querySelectorAll('.color'),
    btn = document.querySelector('.btn');
    specialNumber = document.querySelector('.special_numbers');
    checkbox = document.querySelector('input');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.style.background = '#333';
        title.style.color = '#fff';
        btn.style.background = '#fff';
        specialNumber.style.color = '#fff';
        for(i = 0; i < nameDay.length; i++) {
          nameDay[i].style.color = '#fff';
          if (i === 5 || i === 6) {
            nameDay[i].style.color = '#BEB6B6';
          }
        }
        for(l = 0; l < numberDay.length; l++) {
          numberDay[l].style.color = '#fff';
          if (l === 0 || l === 4 || l === 4 || l === 10 || l === 11 || l === 17 || l === 18 || l === 24 || l === 25) {
            numberDay[l].style.color = '#877777';
          }
          if (l === 16) {
            numberDay[l].style.color = 'red';
          }
        }
        for(k = 0; k < offDayColor.length; k++) {
          offDayColor[k].style.color = '#BEB6B6';
        }
      } else {
        document.body.style.background = '#fff';
        title.style.color = '#000';
        btn.style.background = '#333';
        specialNumber.style.color = '#000';
        for(i = 0; i < nameDay.length; i++) {
          nameDay[i].style.color = '#000';
          if (i === 5 || i === 6) {
            nameDay[i].style.color = '#BEB6B6';
          }
        }
        for(l = 0; l < numberDay.length; l++) {
          numberDay[l].style.color = '#000';
          if (l === 0 || l === 4 || l === 4 || l === 10 || l === 11 || l === 17 || l === 18 || l === 24 || l === 25) {
            numberDay[l].style.color = '#877777';
          }
          if (l === 16) {
            numberDay[l].style.color = 'red';
          }
        }
        for(k = 0; k < offDayColor.length; k++) {
          offDayColor[k].style.color = '#BEB6B6';
        }
      }
    });
}