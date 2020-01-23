$(document).ready(function(){
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportMode = $(this).val();
      $("#work-responses").append(workTransportMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>")  
    });
    $("#transportation_survey").hide();
  });
});