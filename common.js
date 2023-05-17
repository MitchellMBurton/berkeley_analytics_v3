function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const themeToggleText = document.getElementById("toggle-theme");
  themeToggleText.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
}

function createColumns(data) {
  const columnsContainer = document.createElement("div");
  columnsContainer.classList.add("columns");

  data.forEach((column) => {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");

    const title = document.createElement("h3");
    title.textContent = column.title;
    columnDiv.appendChild(title);

    if (Array.isArray(column.content)) {
      const table = document.createElement("table");
      table.classList.add("philosophy-table");

      const tbody = document.createElement("tbody");
      column.content.forEach((item) => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = item;
        row.appendChild(cell);
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      columnDiv.appendChild(table);
    } else {
      const content = document.createElement("p");
      content.textContent = column.content;
      columnDiv.appendChild(content);
    }

    columnsContainer.appendChild(columnDiv);
  });

  return columnsContainer;
}