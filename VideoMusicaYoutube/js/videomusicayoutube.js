  document.getElementById('playBtn').addEventListener('click', function() {
    var selectedRadio = document.getElementById('radioSelect').value;
    window.open(selectedRadio, '_blank');
  });
