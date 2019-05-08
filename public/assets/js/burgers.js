$(document).ready(function() {

  $("#burger-form").on("submit", function(e) {

    e.preventDefault();

    const burgerData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    })
    .then(function() {
      location.reload();
    })
    .catch(err => console.log(err));

  });

  $(".update-burger").on("click", function() {
    const burgerId = $(this).attr("data-id");
    const eaten = $(this).attr("data-eaten")

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        eaten: eaten
      }
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  $(".delete-burger").on("click", function() {
    const burgerId = $(this).attr("data-id");

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

});