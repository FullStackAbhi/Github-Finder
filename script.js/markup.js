export const getCardHTML = (
  imgSrc,
  userId,
  description = "Description about User"
) => {
  return `<div class="card" style="width: 12rem">
            <img src="${imgSrc}" class="card-img-top" alt="user img" />
            <div class="card-body">
              <h5 class="card-title">${userId}</h5>
              <p class="card-text">
                To see full description about the user press the button below
              </p>
              <button  class="btn btn-primary" data-userid="${userId}">View Details</button>
            </div>
          </div>`;
};

export const getRow = () => {
  const div = document.createElement("div");
  div.classList.add("row");
  return div;
};

export const description = (singleuser) => {
  let createdAt = new Date(`${singleuser.created_at}`);
  let Createdyear = createdAt.getFullYear();
  let Createdmonth =
    createdAt.getMonth() < 10
      ? "0" + createdAt.getMonth()
      : createdAt.getMonth();
  let Createdday =
    createdAt.getDay() < 10 ? "0" + createdAt.getDay() : createdAt.getDay();
  let Createdhour =
    createdAt.getHours() > 12
      ? createdAt.getHours() - 12
      : createdAt.getHours();
  let Createdmin =
    createdAt.getMinutes() < 10
      ? "0" + createdAt.getMinutes()
      : createdAt.getMinutes();
  let Createdsec =
    createdAt.getSeconds() < 10
      ? "0" + createdAt.getSeconds()
      : createdAt.getSeconds();

  let updatedAt = new Date(`${singleuser.updated_at}`);
  let Updatedyear = updatedAt.getFullYear();
  let Updatedmonth =
    updatedAt.getMonth() < 10
      ? "0" + updatedAt.getMonth()
      : updatedAt.getMonth();
  let Updatedday =
    updatedAt.getDay() < 10 ? "0" + updatedAt.getDay() : updatedAt.getDay();
  let Updatedhour =
    updatedAt.getHours() > 12
      ? updatedAt.getHours() - 12
      : updatedAt.getHours();
  console.log(Updatedhour);
  let Updatedmin =
    updatedAt.getMinutes() < 10
      ? "0" + updatedAt.getMinutes()
      : updatedAt.getMinutes();
  let Updatedsec =
    updatedAt.getSeconds() < 10
      ? "0" + updatedAt.getSeconds()
      : updatedAt.getSeconds();

  return `<ul> <b>User description</b>
      <li>Username : ${singleuser.name}</li>
      <li>Public gists : ${singleuser.public_gists}</li>
      <li>Public repos : ${singleuser.public_repos}</li>
      <li>User hireable : ${singleuser.hireable}</li>
      <li>Id created at : ${Createdyear}-${Createdmonth}-${Createdday} Time-${Createdhour}:${Createdmin}:${Createdsec}</li>
      <li>Id updated at : ${Updatedyear}-${Updatedmonth}-${Updatedday} Time-${Updatedhour}:${Updatedmin}:${Updatedsec}</li>
      <li>User email : ${singleuser.email}</li>
      </ul>`;
};
// on card detail
export const descriptionIncard = (singleuser) => {
  return `<ul>
      <li>Site admin : ${singleuser.site_admin}</li>
      <li>bio : ${singleuser.bio}</li>
      <li>Id: ${singleuser.id}</li>
    </ul>`;
};
