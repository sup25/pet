# Pet Project

## Overview

The Pet Project is a MERN (MongoDB, Express.js, React.js, Node.js) stack application that allows users to manage and perform basic CRUD operations on pet information. Users can add a pet with a name, image, and description.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add a pet with a name, image, and description.
- View a list of pets.
- Update pet information.
- Delete a pet.

## Technologies Used

- **MongoDB:** Database to store pet information.
- **Express.js:** Server framework for the backend.
- **React.js:** Frontend framework for building the user interface.
- **Node.js:** JavaScript runtime for server-side development.

## Getting Started

### Prerequisites

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sup25/pet.git
   cd pet-project
   ```

2. Install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd client
   npm install
   ```

3. Set up the MongoDB database:

   - Create a MongoDB database and connect it using .env file.

4. Start the application:

   ```bash
   # Start the server
   cd server
   npm run dev

   # Start the client
   cd client
   npm start
   ```

   The application should now be running at `http://localhost:3000/`.

## Usage

1. Open the application in your web browser.
2. Add, view, update, or delete pets using the provided interface.

## API Endpoints

- `GET /api/pets`: Get a list of all pets.
- `POST /api/pets`: Add a new pet.
- `PUT /api/pets/:id`: Update information for a specific pet.
- `DELETE /api/pets/:id`: Delete a specific pet.

## License

This project is licensed under the [MIT License](LICENSE).
