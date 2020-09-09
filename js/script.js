$(function () {

  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });

  $(".placing__star--four").rateYo({
    rating: 4,
    starWidth: "13px",
    readOnly: true,
    spacing: "7px",
    ratedFill: "#e9ce93"

  });

  $(".placing__star--five").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true,
    spacing: "7px",
    multiColor: {
      "endColor": "#e9ce93"
    }
  });

  $(document).ready(function () {
    //E-mail Ajax Send
    $("form").submit(function () { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function () {
        alert("Thank you!");
        setTimeout(function () {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });

  });

});
