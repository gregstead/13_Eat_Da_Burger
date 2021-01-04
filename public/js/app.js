// Wait until DOM is loaded
$(() => {
  $(".change-devoured").on("click", (event) => {
    event.preventDefault();
    console.log("Devour clicked");

    const newDevoured = { devoured: true };
    // Send the PUT request.

    const id = event.target.dataset.id;
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
