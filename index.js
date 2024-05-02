import { getAllUsers, getSingleUser } from "./script.js/api.js";
import { renderUser } from "./script.js/utility.js";
import { getCardHTML, getRow, description } from "./script.js/markup.js";

document.addEventListener("DOMContentLoaded", () => {
  //for dark mode
  const outerTooogle = document.querySelector(".toggle-out");
  outerTooogle.addEventListener("click", function () {
    outerTooogle.classList.toggle("active");
    let html = document.documentElement;
    if (outerTooogle.classList.contains("active")) {
      html.setAttribute("data-bs-theme", "dark");
    } else html.removeAttribute("data-bs-theme");
  });

  // for home page
  const wrapper = document.getElementById("users-wrapper");
  getAllUsers().then((allUsers) => {
    let row = getRow();
    for (let i = 0; i < allUsers.length; i++) {
      if (i % 5 === 0) {
        wrapper.append(row);
        row = getRow();
      }
      const col = document.createElement("div");
      col.classList.add("col");
      col.insertAdjacentHTML(
        "afterbegin",
        getCardHTML(allUsers[i].avatar_url, allUsers[i].login)
      );
      row.append(col);
    }
  });
  //for decription page
  document.addEventListener("click", (evt) => {
    evt.preventDefault();
    const userId = evt.target.dataset["userid"];

    if (userId) {
      getSingleUser(userId).then((userid) => {
        renderUser(userid);
      });
    } else if (evt.target.localName == "button") {
      const input = document.querySelector("input");
      if (!input.value) return;
      getSingleUser(input.value).then((randomuser) => {
        renderUser(randomuser);
      });
    }
  });

  
});
