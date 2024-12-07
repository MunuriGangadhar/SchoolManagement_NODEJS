# School Management API

This is a **Node.js** application for managing school data, built using **Express.js** and **MySQL**. The application provides APIs to add schools and list schools sorted by proximity to a user's specified location.

---

## Features

- **Add School API**: Add a new school to the database.
- **List Schools API**: Fetch schools and sort them by proximity to a given location.

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed:

1. **Node.js** (v14 or higher)  
2. **MySQL** (v8 or higher)  
3. **Git**  
4. **Postman** (optional, for testing)

---

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/school-management.git
cd school-management
```

### Step 2: Install Dependencies
Install the required Node.js packages using npm:
```bash
npm install
```

### Step 3: Configure the Database
1. Open your MySQL client and create a database:
   ```sql
   CREATE DATABASE school_management;
   ```

2. Update the `.env` file with your database credentials:
   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=school_management
   DB_PORT=3306
   ```

3. Import the database schema into MySQL:
   ```bash
   mysql -u root -p school_management < schema.sql
   ```

### Step 4: Start the Server
Run the server using the following command:
```bash
node server.js
```

If successful, you’ll see:
```plaintext
Server is running on port 3000
Connected to the MySQL database.
```

---

## API Endpoints

### 1. Add School
- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "name": "Green Valley High School",
    "address": "123 Elm Street",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```
- **Response**:
  ```json
  {
    "message": "School added successfully."
  }
  ```

### 2. List Schools
- **Endpoint**: `/api/listSchools`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Example**: `/api/listSchools?latitude=40.73061&longitude=-73.935242`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Green Valley High School",
      "address": "123 Elm Street",
      "latitude": 40.7128,
      "longitude": -74.006,
      "distance": 2.3
    }
  ]
  ```

---

## Testing with Postman

1. Import the provided Postman collection (`school-management.postman_collection.json`).
2. Test the following endpoints:
   - **POST /api/addSchool**
   - **GET /api/listSchools**

---

## Environment Variables

Ensure you have the following variables in a `.env` file at the project root:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
```

---

## Project Structure

```
school-management/
│
├── config/
│   └── db.js         # Database configuration
│
├── routes/
│   └── school.js     # API routes
│
├── .env              # Environment variables
├── schema.sql        # MySQL schema
├── server.js         # Entry point
├── package.json      # Project metadata and dependencies
└── README.md         # Documentation
```



