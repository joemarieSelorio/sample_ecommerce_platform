# GET /carts/:id

Endpoint for retrieving cart details

## Parameters

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| id | string | T | *none* | id of the searched cart |


## Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* |
| result | array | T | *none*| contains details of cart including list of added product|

### Errors

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| code | int | T | *none* | Internal error code. See [Codes List](docs/api/Response-Codes.md) |
| message | string | T | *none* | Error summary |
| errors | array | F | *none* | Error breakdown |

## Sample Request

GET http://localhost:5050/carts/1

## Sample Response

```json
{
    "timestamp": "2022-06-15T01:49:39.363Z",
    "status": 200,
    "message": "Successfully retrieved cart details",
    "result": {
        "_id": "62a939be4eb45e053c2b29c0",
        "id": 1,
        "products": []
    }
}
```
