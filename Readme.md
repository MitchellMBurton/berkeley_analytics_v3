1. `index.html`: This is the main HTML file for the website. It contains the structure and layout of the page, such as the header, sections, and tables. It also links to the CSS and JavaScript files.

2. `sample.html`: This is a sample HTML page with a simple header, basic text, and a sample table using the price list. It also links to the same CSS and JavaScript files as index.html.

3. `styles.css`: This file contains all the CSS styles for the website. It styles elements such as tables, headers, and the dark mode toggle. The styles are applied to both index.html and sample.html pages.

4. `data.js`: This file contains the data used on the website, such as column content, headers, subheaders, and design philosophy items. The data is organized into separate JavaScript objects and arrays.

5. `table.js`: This file contains JavaScript functions for creating and populating tables, including createColumns, createDesignPhilosophyTable, and renderHeaders. It processes the data from data.js and adds the tables and columns to the index.html page.

6. `common.js`: This file contains common JavaScript functions used across different pages, such as toggleDarkMode and createColumns. These functions are shared between index.html and sample.html for consistent functionality.

The relationships between the files are as follows:

- `index.html` and `sample.html` are the main pages of the website, displaying the content and applying styles from `styles.css` and using JavaScript functions from `common.js` and `table.js`.
- `data.js` provides the data for the tables and columns, which is processed by the functions in `table.js`.
- `styles.css` provides the styling for both index.html and sample.html, making the website visually consistent.
- `common.js` contains shared functionality between index.html and sample.html, ensuring consistent behavior across the website.
- `table.js` manipulates the data from data.js and creates tables and columns for the index.html page.