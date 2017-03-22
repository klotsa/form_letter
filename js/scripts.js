$(document).ready(function() {
  $("#letter").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letterOutput").show();

    event.preventDefault();
  });
});
