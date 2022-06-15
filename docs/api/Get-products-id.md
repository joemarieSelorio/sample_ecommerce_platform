# GET /products/:id

Endpoint for retrieving product details

## Parameters

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| id | string | T | *none* | id of the searched product |


## Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* |
| product | object | T | *none*| details of product|

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| code | int | T | *none* | Internal error code. See [Codes List](docs/api/Response-Codes.md) |
| message | string | T | *none* | Error summary |
| errors | array | F | *none* | Error breakdown |

## Sample Request

GET http://localhost:5050/products/1

## Sample Response

```json
{
    "timestamp": "2022-06-15T01:51:16.798Z",
    "status": 200,
    "message": "Successfully retrieved product",
    "product": {
        "_id": "62a939be4eb45e053c2b29c3",
        "id": 1,
        "name": "Towel",
        "image": "https://img.freepik.com/free-psd/pile-towels-white_176382-1916.jpg?t=st=1655210545~exp=1655211145~hmac=34810af83270619d932e9ed30f01bc7506008006e3c986038506ed0c1d5fa11c",
        "quantity": 10,
        "description": "A Very Nice towel",
        "price": 1000
    }
}
```
