document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    let randomX = Math.random() * (960 - 90); 
    let randomY = Math.random() * (534 - 80);
    el.style.left = randomX + 'px';
    el.style.top = randomY + 'px';
  });
});


document.querySelectorAll('.creature').forEach(function (el) {
  el.addEventListener('mouseover', function () {

    let randomX = 360 + Math.random() * (850 - 360 - 40); 
    let randomY = 190 + Math.random() * (320 - 190 - 40);
    el.style.left = randomX + 'px';
    el.style.top = randomY + 'px';
  });
});