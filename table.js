function populateTable(data, createRow) {
    const tbody = document.createElement('tbody');
  
    data.forEach((item) => {
      const row = createRow(item);
      tbody.appendChild(row);
    });
  
    return tbody;
  }
  

function createTableRow(item) {
    const row = document.createElement("tr");
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = item.label;
  
    const span = document.createElement("span");
    span.textContent = item.value;
    cell2.appendChild(span);
  
    if (item.className) {
      span.classList.add(item.className);
    }
  
    return row;
  }

  function createCharacterBox(item) {
    const box = document.createElement('div');
    box.textContent = item.character;
    const description = document.createElement('p');
    description.textContent = item.description;
    box.appendChild(description);
    return box;
  }
  

  document.getElementById('licenses-table').appendChild(
    populateTable(licensesData, createTableRow)
  );
  
  document.querySelector('.character-box').append(
    ...characterBoxData.map(createCharacterBox)
  );

  document.getElementById('product-pricelist-table').appendChild(
    populateTable(productPricelistData, createPriceListRow)
  );


function createPriceListRow(item) {
  const row = document.createElement('tr');
  const keys = ['product', 'package', 'sku', 'price', 'checkout'];

  keys.forEach((key, index) => {
    const cell = row.insertCell();

    // Create an inner span and apply the positive class for the checkout column
    if (key === 'checkout') {
      const span = document.createElement('span');
      span.textContent = item[key];
      span.classList.add('positive');
      cell.appendChild(span);
    } else {
      cell.textContent = item[key];
    }
  });

  return row;
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

// // Add the new columns to the top of the website in table.js
document.getElementById("main-content").prepend(createColumns(columnData));


function renderHeaders() {
    document.getElementById("main-header").textContent = headersData.main;
    document.getElementById("licenses-header").textContent = headersData.licenses;
    document.getElementById("licenses-subheader").textContent = headersData.licensesSub;
    document.getElementById("character-boxes-header").textContent = headersData.characterBoxes;
    document.getElementById("product-pricelist-header").textContent = headersData.productPricelist;
    document.getElementById("sample-header").textContent = headersData.sample;
    document.getElementById("sample-text").textContent = sampleTextData;
  }
  
  // Call the renderHeaders function
  renderHeaders();