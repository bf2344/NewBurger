$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newdevour = $(this).data("newdevour");
 
      var newdevourState = {
        devoured: newdevour
      };
 
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevourState
      }).then(
        function() {
          console.log("changed devour to", newdevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})

$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id)
    $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
    }).then(function(data) {
       
        location.reload();
    })

    })
});

