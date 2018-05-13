$(document).ready(function() {
  //create a new lost item

  $("#createLost").on("submit", function (event) {
    //preventDefault on a submit event.
    event.preventDefault();

    var newLost = {
      name: $("#name_input").val().trim(),
      email: $("#searcher_email_input").val().trim(),
      phone: $("#phone_input").val().trim(),
      item: $("#item_input").val().trim(),
      description: $("#description_input").val().trim(),
      image: $("#image_input").val().trim()
    };
    console.log(newLost);
      // Send the POST request.
      $.ajax("/api/posts", {
        type: "POST",
        data: newLost
      }).then(
        function() {
          // Reload the page to get the updated list
          //location.reload();
          //alert("this is the modal")
          $("#lostEntry").modal('toggle');
      })
    });

  $("#updateLost").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $("[name=id]").val().trim();

    var updatedLost = {
      lost: $("######").val().trim()
    };

    // Send the PUT request.
    $.ajax("#####" + id, {
      type: "PUT",
      data: updatedPlan
    }).then(
      function () {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
