function addRow() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    if (!name || !email || !age) return;
    
    let table = document.getElementById("userTableBody");
    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = age;
    document.getElementById("registrationForm").reset();
}

function sortTable(n) {
    let table = document.querySelector("table");
    let rows = Array.from(table.rows).slice(1);
    let sortedRows = rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[n].innerText.toLowerCase();
        let cellB = rowB.cells[n].innerText.toLowerCase();
        return isNaN(cellA) || isNaN(cellB) ? cellA.localeCompare(cellB) : cellA - cellB;
    });
    document.getElementById("userTableBody").append(...sortedRows);
}

function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#userTableBody tr");
    rows.forEach(row => {
        row.style.display = row.cells[0].innerText.toLowerCase().includes(input) ? "" : "none";
     });
}