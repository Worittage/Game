let selectedButton = null;

  document.querySelectorAll('.content__button').forEach(button => {
    button.addEventListener('click', function() {
      selectedButton = this;
    });
  });

  document.querySelector('#button').addEventListener('click', function() {
    if (selectedButton) {
      alert(selectedButton.dataset.name);
    } else {
          }
  });