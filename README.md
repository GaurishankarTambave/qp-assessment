Overview
The Grocery Booking API is a RESTful web service built with Node.js, TypeScript, and MySQL. It allows users to view available grocery items and place orders, while providing administrators the ability to manage grocery items and inventory levels. The application is containerized using Docker for ease of deployment and scalability.
Features

    Admin Functionality:
        Add new grocery items
        View existing grocery items
        Update grocery item details (name, price, quantity, description)
        Remove grocery items
        Manage inventory levels
    User Functionality:
        View available grocery items
        Place orders for multiple grocery items


API Endpoints

1. Add New Grocery Item
    Endpoint: POST /api/admin/grocery-items

    Request Body:
            {
                "name": "string",
                "price": "number",
                "quantity": "number",
                "descriptions": "string"
            }
    Response: 201 Created on success

2. View Existing Grocery Items
    
    Endpoint: GET /api/admin/grocery-items
    Response: 200 OK with a list of grocery items

3. Update Grocery Item Details

    Endpoint: PUT /api/admin/grocery-items/:id
    Request Body:

    json
    {
      "name": "string",
      "price": "number",
      "quantity": "number",
      "descriptions": "string"
    }

    Response: 200 OK on success.

4. Remove Grocery Item

    Endpoint: DELETE /api/admin/grocery-items/:id
    Response: 200  on success.

5. Manage Inventory Levels

    Endpoint: PUT /api/admin/grocery-items/:id/inventory
    Request Body:

    json
    {
      "quantity": "number"
    }

    Response: 200 OK on success.



User Endpoints: 

1. View Available Grocery Items

    Endpoint: GET /api/grocery-items
    Response: 200 OK with a list of available grocery items.

2. Book Multiple Grocery Items in a Single Order

    Endpoint: POST /api/orders
    Request Body:

    json
    {
      "items": [
        {
          "id": "string",
          "quantity": "number"
        }
      ],
      "userId": "string" // Optional if user is authenticated via token
    }

    Response: 201 Created on success


MySQL Database Schema

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE grocery_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    description TEXT
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(255),
    items TEXT
);

// API are tested using Postman tool screen shots are added of that 
![Add New Grocery Item](https://github.com/user-attachments/assets/6f46b315-3aaf-4659-846f-07df56ea0cc3)

![View Existing Grocery Items](https://github.com/user-attachments/assets/4a28772b-8ad5-4256-b9d2-f904f3ab2c7c)

![Update Grocery Item Details](https://github.com/user-attachments/assets/be6c84f0-b0fb-4ad1-a75c-d2a1755e60a9)

![Remove Grocery Item](https://github.com/user-attachments/assets/3bef6ace-0dba-455f-b87e-acef9af1c166)

![Manage Inventory Levels](https://github.com/user-attachments/assets/267d1038-dcec-449a-84b2-94797e6baaed)

![user View Available Grocery Items](https://github.com/user-attachments/assets/1dc32442-26e4-4472-8911-864fda4df0fc)
