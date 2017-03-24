$(document).ready(function() {
  $("#animal").change (function(event) {
  if ($("#animal").val() === "Elephant"){
    $("#icecream").show();
  }
  else {
    $("#icecream").hide();
  }
});
  $("#form").submit(function(event) {
    var ratingInput = parseInt($("#rating").val());
    var animalInput = $("#animal").val();
    var regionInput = $("input:radio[name=region]:checked").val();

    if (ratingInput >= 0 && ratingInput <= 10) {
      var scale = ratingInput;
      if (animalInput === "Donkey") {
        scale -= 3;
      } else {
        scale += 3;
      }
      if (regionInput === "coast") {
        scale -= 3;
      } else {
        scale += 3;
      }
      $("#result").text(scale);
    } else {
      $("div.must-be-number").addClass("has-error");
    }
    event.preventDefault();
  });
});
