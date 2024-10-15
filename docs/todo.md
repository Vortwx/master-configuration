## Frontend
- Angular JS

## Backend
- ExpressJS for API framework and Sequelize for ORM

## Example Data
User
- user_id (PK)
- user_name
- user_email

Category
- category_id (PK)
- category_name
- category_description

Spending
- spending_id (PK)
- category_id (FK)
- user_id (FK)
- spending_amount
- spending_date
- spending_desc

Spending to category is one to one,
Spending to user is one to many


# Full Stack Project with Angular, Express.js, and Sequelize ORM

## Step 1: Backend Setup

1. **Initialize Backend Project**:
   - Set up a Node.js project using `npm init`.
   - Install necessary packages: Express, Sequelize, MySQL driver, body-parser, and CORS.
   
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express sequelize mysql2 body-parser cors
   ```

   - Create project structure:
   
   ```bash
   mkdir models routes controllers
   ```

2. **Configure Sequelize**:
   - Set up the Sequelize configuration to connect to a MySQL database.
   - Create models for entities, representing database schema.
   - Manage database using MySQL Workbench

--Completed 15/10

3. **Create API Endpoints**:
   - Build RESTful API endpoints for CRUD operations (e.g., `GET`, `POST`, `PUT`, `DELETE`).
   - Implement controllers to handle the business logic and interaction with Sequelize models.
   
4. **Test Backend**:
   - Use Postman or curl to test API endpoints (CRUD).

## Step 2: Frontend Setup (Angular)

1. **Initialize Angular Project**:
   - Use Angular CLI to create a new Angular project.

   ```bash
   ng new frontend
   cd frontend
   ```

2. **Create Components**:
   - Generate components for adding/updating data (form-based), displaying data (table), and a search bar.

3. **Set Up Service for API Calls**:
   - Create a service that handles HTTP requests using Angular’s HTTP client for communicating with the Express API.

4. **Implement Search, Add, and Update Functionality**:
   - Implement a form for adding/updating data.
   - Use a data table to display fetched data.
   - Include a search field to filter the table.

## Step 3: Integration and Testing

1. **Connect Frontend to Backend**:
   - In the Angular service, use the API URLs you created in Express to send/receive data.
   - Bind form inputs to your backend via API calls for creating and updating records.

2. **Test the Full Stack**:
   - Test the frontend by interacting with the form and table, ensuring that it communicates with the backend API for data operations.

## Step 4: GitHub and Documentation

1. **Commit Code to GitHub**:
   - Set up a Git repository.
   - Commit and push both frontend and backend code to GitHub.

2. **Provide Instructions**:
   - Write a `README.md` file with instructions on how to clone the repository, install dependencies, set up the MySQL database, and run the project.

## Steps to Execute:

1. Clone the repository.
2. Set up the MySQL database and configure the Sequelize settings.
3. Install backend dependencies with `npm install`.
4. Run the backend API server using `node` or `nodemon`.
5. In the frontend directory, run `npm install` and then `ng serve` to serve the Angular application.
6. Access the application through the Angular development server, and verify the frontend and backend integration.
