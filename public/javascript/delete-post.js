const { DELETE } = require("sequelize/types/lib/query-types");

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const verifyDelete = confirm("Delete?");

  if (verifyDelete) {
    const response = await fetch(`/api/posts${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
