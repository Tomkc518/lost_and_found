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

  $(".foundBtn").on("click", function (event) {
      var id = $(this).data("id");
      var status = true;
      var found = {
        found: status
      };
      
      // Send the PUT request.
      $.ajax("/api/posts/" + id, {
        type: "PUT",
        data: found
      }).then(
        function() {
          console.log("changed found to", found);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
