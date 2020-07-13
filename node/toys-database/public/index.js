// Populate the table of toys
fetch("./toys")
  .then((r) => r.json())
  .then((r) => {
    let tbody = document.getElementById("toy-table-body");

    r.forEach((toy) => {
      let tr = document.createElement("tr");
      tbody.appendChild(tr);

      let tdToyId = document.createElement("td");
      tdToyId.innerText = toy.toyId;
      tbody.appendChild(tdToyId);

      let tdToyDescription = document.createElement("td");
      tdToyDescription.innerText = toy.description;
      tbody.appendChild(tdToyDescription);

      let tdFriendName = document.createElement("td");
      tdFriendName.innerText = toy.lentToFriendName;
      tbody.appendChild(tdFriendName);
    });

    console.log(r);
  });
