import {
  getCardHTML,
  getRow,
  description,
  descriptionIncard,
} from "./markup.js";

//for rendering user details on description page
export const renderUser = (userid) => {
  const containerDiv = document.getElementById("users-wrapper");
  if (containerDiv.classList.contains("hide")) return;
  containerDiv.classList.toggle("hide");

  const detailedWrapperdiv = document.getElementById("userdetails-wrapper");
  detailedWrapperdiv.classList.toggle("hide");

  detailedWrapperdiv.querySelector(".row > .col:first-child").innerHTML =
    `<button class="btn btn-outline-danger back-btn">
            <i class="bi bi-arrow-left-circle"></i>
            <span>Go Back</span>
          </button>` + getCardHTML(userid.avatar_url, userid.login);

  //user detail on card
  detailedWrapperdiv.querySelector(
    ".row > .col:first-child .card-text"
  ).innerHTML = descriptionIncard(userid);

  //remove btn from card
  detailedWrapperdiv
    .querySelector(".row > .col:first-child .btn-primary")
    .remove();

  //user detail outside card
  detailedWrapperdiv.querySelector(".row > .col:last-child").innerHTML =
    description(userid);

  //for moving back to the home page
  detailedWrapperdiv.querySelector(
    ".row > .col:first-child .back-btn"
  ).onclick = () => {
    containerDiv.classList.toggle("hide");
    detailedWrapperdiv.classList.toggle("hide");
  };
};
