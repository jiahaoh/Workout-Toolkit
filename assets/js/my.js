$(document).ready(function() {
  // jQuery methods go here...
  $("#calculate").click(function() {
    var gender = $("#gender").val()
    var height = $("#height").val()
    var weight = $("#weight").val()
    var age = $("#age").val()
    var ac = $('input[name=RadioOptions]:checked', '#ac').val()

    if (gender == "male") {
      var res = (90+4.8*height+13.4*weight-5.7*age)*ac
    } else {
      var res = (450+3.1*height+9.2*weight-4.3*age)*ac
    };

    $("#res").text("Your daily calories is: " + res.toFixed(2) + " kcal!");
  });
});
