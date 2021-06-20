$ ()//tooltip
$(function () {
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
});

//enviar a correo
$(document).ready(function() {
    $("#success-alert").hide();
    $("#enviarCorreo").click(function showAlert() {
      $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
        $("#success-alert").slideUp(500);
      });
    });
  });