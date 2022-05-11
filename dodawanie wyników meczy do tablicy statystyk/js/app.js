const submitButton = document.querySelector("form");


function callBack(event) {
    event.preventDefault();
    const row = document.querySelector("tbody tr");
    const newRow = document.createElement("tr");
    row.parentElement.appendChild(newRow);

    const cell1 = document.createElement("td");
    newRow.appendChild(cell1);
    cell1.innerText = document.querySelector("#team1").value;

    const cell2 = document.createElement("td");
    newRow.appendChild(cell2);
    cell2.innerText = document.querySelector("#team2").value;

    const cell3 = document.createElement("td");
    newRow.appendChild(cell3);
    cell3.innerText = document.querySelector("#points1").value + " - " + document.querySelector("#points2").value;
}

submitButton.addEventListener("submit", callBack)
