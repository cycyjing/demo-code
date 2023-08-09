# Full-Stack Application

This is a full-stack application built using Node.js with Express.js for the back-end and React.js for the front-end. It provides functionality for managing customer information and recording sales opportunities for each customer. The back-end uses SQLite as the data store.

## Table of Contents

- [Requirements](#requirements)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Additional Information](#additional-information)

## Requirements

This application allows a company to view and manage customer information, as well as record sales opportunities. The following are the key requirements of the application:

- Customers have a unique identifier, status, creation date and time, and general information such as name, phone, and email.
- Sales opportunities can be associated with customers and have attributes like status, name, and creation date and time.
- The user should be able to filter and sort the list of customers.
- Clicking on a customer in the list should display their details and allow the addition/editing of opportunities for that customer.
- The status of a customer should be changeable.

## Directory Structure

```
|-- package.json
|-- README.md
|-- front-end
|   |-- public
|   |-- .gitignore
|   |-- package.json
|   |-- src
|   |   |-- page
|   |   |   |-- Customers.jsx
|   |   |-- reportWebVitals.js
|   |   |-- App.css
|   |   |-- index.js
|   |   |-- utils
|   |   |   |-- index.jsx
|   |   |-- components
|   |   |   |-- CustomerDetails.jsx
|   |   |   |-- CustomerDetailsAndOpportunitiesDrawer.jsx
|   |   |   |-- UpdateOpportunityModel.jsx
|   |   |   |-- AddOpportunityModel.jsx
|   |   |   |-- Opportunities.jsx
|   |   |   |-- CustomerStatusLink.jsx
|   |   |   |-- CustomerFilterModel.jsx
|   |-- App.js
|-- back-end
|   |-- app
|   |   |-- customers
|   |   |   |-- index.js
|   |   |-- opportunities
|   |   |   |-- index.js
|   |-- dataInit.js
|   |-- index.js
|   |-- .gitignore
|   |-- package.json
|   |-- data
|   |   |-- demo-db.db
```

The directory structure of the application is organized as follows:

- The `front-end` directory contains the React.js front-end code.
- The `back-end` directory contains the Node.js back-end code with Express.js framework.
- The `data` directory stores the SQLite database file (`demo-db.db`).
- The `package.json` files in both directories hold the dependencies and scripts for each part of the application.

## Usage

To set up and run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `back-end` directory in your terminal.
3. Run the following command to install the back-end dependencies:

```shell
npm install
```

4. Run the following command to initialize the database and create the required tables:

```shell
npm run data
```

5. Start the back-end server by running the following command in the `back-end` directory:

```shell
npm start
```

6. Open a new terminal window and navigate to the `front-end` directory.
7. Run the following command to install the front-end dependencies:

```shell
npm install
```

8. Start the front-end development server by running the following command:

```shell
npm start
```

5. Open your web browser and visit `http://localhost:3000` to access the application.

## Additional Information

- The back-end provides two APIs: `customers` and `opportunities`. These APIs handle CRUD operations for customers and sales opportunities respectively.
- The front-end interacts with the back-end APIs to fetch and update customer and opportunity data.
- The customer page displays a list of customers and allows filtering and sorting of the list.
- Clicking on a customer's name in the list opens a drawer that shows the customer's opportunities. From the drawer, the user can edit existing opportunities or add new ones.
- Clicking on a customer's status in the list opens a popup allowing the user to edit the customer's status.
- The back-end uses SQLite as the data store, with separate tables for customers and opportunities.
- The database is initialized and the required tables are created by running the `npm run data` command.

Please make sure you have Node.js and npm installed on your system before running the application.

Feel free to reach out if you have any further questions or need assistance with the application.
