# GET /products

Endpoint for retrieving products


## Response Body

### Success

| Name | Type | Required | Default | Description |
| -------- | -- | ----- | ---------- | ---------------- |
| timestamp | string | T | *none* | Response UTC timestamp in ISO 8601 format |
| status | int | T | *none* | HTTP error code |
| message | string | T | *none* |
| products | array | T | *none*| contains the list of products|

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
    "timestamp": "2022-06-15T01:45:38.579Z",
    "status": 200,
    "message": "Successfully retrieved products",
    "products": [
        {
            "_id": "62a939be4eb45e053c2b29c4",
            "id": 2,
            "name": "Tissue",
            "image": "https://img.freepik.com/free-psd/facial-tissue-box-mockup_439185-1819.jpg",
            "quantity": 10,
            "description": "Tissue with 1000 sheets"
        },
        {
            "_id": "62a939be4eb45e053c2b29c3",
            "id": 1,
            "name": "Towel",
            "image": "https://img.freepik.com/free-psd/pile-towels-white_176382-1916.jpg?t=st=1655210545~exp=1655211145~hmac=34810af83270619d932e9ed30f01bc7506008006e3c986038506ed0c1d5fa11c",
            "quantity": 10,
            "description": "A Very Nice towel"
        },
        {
            "_id": "62a939be4eb45e053c2b29c6",
            "id": 4,
            "name": "Sandals",
            "image": "https://img.freepik.com/free-psd/baby-shoes-mockup_1332-4909.jpg",
            "quantity": 10,
            "description": "Sandals for 6 months to 1 year"
        },
        {
            "_id": "62a939be4eb45e053c2b29c7",
            "id": 5,
            "name": "Stroller",
            "image": "https://img.freepik.com/free-psd/baby-pram-design_1310-674.jpg",
            "quantity": 10,
            "description": "Durable Multi Compartment Stroller"
        },
        {
            "_id": "62a939be4eb45e053c2b29c5",
            "id": 3,
            "name": "Diapers",
            "image": "https://img.freepik.com/free-photo/reusable-diapers-two-color-background-close-up_185193-68378.jpg",
            "quantity": 10,
            "description": "High Quality Diapers"
        }
    ]
}
```
