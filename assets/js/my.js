
// Include HTML
function includeHTML() {
var z, i, elmnt, file, xhttp;
/* Loop through a collection of all HTML elements: */
z = document.getElementsByTagName("*");
for (i = 0; i < z.length; i++) {
elmnt = z[i];
/*search for elements with a certain atrribute:*/
file = elmnt.getAttribute("w3-include-html");
if (file) {
  /* Make an HTTP request using the attribute value as the file name: */
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {elmnt.innerHTML = this.responseText;}
      if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
      /* Remove the attribute, and call this function once more: */
      elmnt.removeAttribute("w3-include-html");
      includeHTML();
    }
  }
  xhttp.open("GET", file, true);
  xhttp.send();
  /* Exit the function: */
  return;
}
}
}

// DCC
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

    // wait for wip manipulation
  });
});

// WIP
$(document).ready(function() {
  // jQuery methods go here...
  $("input:checkbox.form-check-input").change(function() {
    var checkedVals = $('.form-check-input:checkbox:checked').map(function() {
    return this.value;
  }).get();
  $(".wip-td").removeClass("bg-warning");
  $.each( checkedVals, function( i, l ){
    var handle = "#" + l + "-td"
    $(handle).addClass("bg-warning")
    });
  });
});
