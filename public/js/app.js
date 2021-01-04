$(document).ready(() => {
  $("#addBurgerSubmit").on("click", (event) => {
    event.preventDefault();
    const newName = "";
  });
  $(".change-devoured").on("click", (event) => {
    event.preventDefault();
    const id = event.target.dataset.id;
    const URL = "/api/burger/" + id;
    const ajaxObj = {
      url: URL,
      method: "PUT",
    };
    $.ajax(ajaxObj).then((res) => {
      console.log(res);
      location.reload();
    });
  });
});
