'use-strict';

//opens video popup on click
document.querySelector('.logo').addEventListener('click', function () {
  document.querySelector('.container-popup').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.container-popup').style.display = 'none';
  }, 3000);
});
