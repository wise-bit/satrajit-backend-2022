# Shopify Backend Challenge 2022

[_By Satrajit Chatterjee_](https://www.satrajit.ca)

<br>

**The server is currently hosted on Heroku at [satrajit-shopify-challenge-22.herokuapp.com](https://satrajit-shopify-challenge-22.herokuapp.com/)**

In case of unexpected downtime it is also hosted on Repl.it at [replit.com/@thepiprogrammer/satrajit-shopify-backend-2022](https://replit.com/@thepiprogrammer/satrajit-shopify-backend-2022)

---

## Additional Functionality Chosen

Ability to create warehouses/locations and assign inventory to specific locations


---

## Github Repository:

**[github.com/wise-bit/satrajit-shopify-backend-2022](https://github.com/wise-bit/satrajit-shopify-backend-2022)**

---

<br>

## Execution steps - Direct

Directly call the API at `https://satrajit-shopify-challenge-22.herokuapp.com` using CURL, Postman or any API test tool to reach any of the endpoints listed below. 

## Execution steps - Local

### Prerequisites

Node.js must be installed prior to running the application locally. This is an Express.js server application. The app can be installed by running `npm install` on the root folder.

### Execution

The application can be run by executing `npm run start` on the root folder. It runs on port 8080 can can be tested locally by calling the API at `http://localhost:8080/` using CURL, Postman, or any other API testing tool.

---

## Available Endpoints

Exported endpoints collection stored in [api-tests-shopify-app-fall-2022.postman_collection.json](api-tests-shopify-app-fall-2022.postman_collection.json)

### GET endpoints

- `/items`: Get list of all available items in stock
- `/items/:id`: Get details of an item with ID
- `/warehouses`: Get list of all available warehouse
- `/warehouses/:id`: Get list of all items in a warehouse with ID

### POST endpoints

- `/items`: Create a new item
- `/warehouses`: Create a new warehouse

### PUT endpoints

- `/items/:id`: Update an item with ID
- `/warehouses/:id`: Update a warehouse with ID

### DELETE endpoints

- `/items/:id`: Delete an item with ID
- `/warehouses/:id`: Delete a warehouse with ID

---

## Sample Request Bodies (JSON)

### Items POST/PUT

```json
{
  "warehouse": 1,
  "name": "potato",
  "price": "3.4"
}
```

### Warehouses

```json
{
  "name": "Test warehouse",
  "address": "3 Test Street, Toronto"
}
```

---

## Sample Requests (JSON)

### Get all warehouses 

```bash
curl --location --request GET 'https://satrajit-shopify-challenge-22.herokuapp.com/warehouses'
```

### Get all items of warehouse 1

```bash
curl --location --request GET 'https://satrajit-shopify-challenge-22.herokuapp.com/warehouses/1'
```

### Insert new item

```bash
curl --location --request POST 'https://satrajit-shopify-challenge-22.herokuapp.com/items' \
--header 'Content-Type: application/json' \
--data-raw '{
    "warehouse": 1,
    "name": "potato",
    "price": "3.4"
}'
```

### Update warehouse 2

```bash
curl --location --request PUT 'https://satrajit-shopify-challenge-22.herokuapp.com/warehouses/2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test warehouse",
    "address": "4 Test Street, Toronto"
}'
```

### Delete item 2

```bash
curl --location --request DELETE 'https://satrajit-shopify-challenge-22.herokuapp.com/items/2'
```
