let list = document.getElementById("list");
let sortBtn = document.getElementById("sortBtn");
let data = JSON.parse(localStorage.getItem("data")) || [];

data.forEach((item) => {
  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  let emailCell = document.createElement("td");
  let messageCell = document.createElement("td");
  nameCell.textContent = item.name;
  emailCell.textContent = item.email;
  messageCell.textContent = item.message;
  row.appendChild(nameCell);
  row.appendChild(emailCell);
  row.appendChild(messageCell);
  list.appendChild(row);
});

sortBtn.addEventListener("click", () => {
  let rows = list.children;
  let sortedRows = Array.from(rows).sort((a, b) => a.children[0].textContent.localeCompare(b.children[0].textContent));
  list.innerHTML = "";
  sortedRows.forEach((row) => {
    list.appendChild(row);
  });
});
