$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
// dgsfdhshureyre
function myFunction() {
  alert("Thank's for contacting us we will reach on you shortly!!!");
}