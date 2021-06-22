$ ()//tooltip
$(function () {
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
});

// titulos en rojos 
$( document ).ready( function (){
  $( "h2" ).click( function (){
  $( this ).css({
  "color" : "black" ,
  });
  });
  });