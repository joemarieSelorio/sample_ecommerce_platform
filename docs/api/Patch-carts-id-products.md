# PATCH /carts/:id/products

Endpoint for adding products to cart

## Parameters

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| id | string | T | *none* | id of the searched cart |


## Request Body


| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| productId | string | T | *none* | product's unique identification |
| name | string | T | *none* | product's name|
| image | string | T | *none* | product's image URL |
| quantity | number | T | *none* | quantity of the product to be added to cart |
| price | number | T | *none* | price of product |


## Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* |
| cart | object | T | *none*| contains the updated details of the cart|

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| code | int | T | *none* | Internal error code. See [Codes List](docs/api/Response-Codes.md) |
| message | string | T | *none* | Error summary |
| errors | array | F | *none* | Error breakdown |

## Sample Request

GET http://localhost:5050/cart

## Sample Response

```json
{
    "timestamp": "2022-06-15T01:55:55.734Z",
    "status": 201,
    "message": "Successfully added the product to cart",
    "cart": {
        "_id": "62a939be4eb45e053c2b29c0",
        "id": 1,
        "products": [
            {
                "name": "Diaper",
                "image": "test.jpeg",
                "quantity": 1,
                "_id": "62a93c034eb45e053c2b29d1"
            }
        ],
        "active": true,
        "modifiedOn": "2022-06-15T01:45:34.520Z",
        "createdAt": "2022-06-15T01:45:34.524Z",
        "updatedAt": "2022-06-15T01:55:15.974Z",
        "__v": 0
    }
}
```
