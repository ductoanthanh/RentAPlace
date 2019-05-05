## Travel Sleep


Live Demo: https://toanth-rentaplace.herokuapp.com

### Users can: 
  - See all available apartments
  - Register and Login to the app
  - Create, edit and delete their own apartments for rent
  - Book someone else's apartment
  - See their own bookings
  
  ## Technologies used

* [NodeJS](https://nodejs.org/en/docs/) 
* [MongoDB](https://docs.mongodb.com/) 
* [ReactJS](https://reactjs.org/) 
  

## List of API used

#### User API

* `'/api/v1/users/auth' - POST` - authenticate user

Request body:

| key |	type | description |
| --- | --- | --- |
| email | string | |
| password | string | |

Response payload

| key |	type | description |
| --- | --- | --- |
| token | string | Server Token |

Sample request:

```json
{
  "email": "toan123@gmail.com",
  "password": "123456",
}
```

Sample response:

```json
{
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2MyYTMzYTIyZTgzZDAwMjFjODNlYmEiLCJ1c2VybmFtZSI6InRvYW4xMjMiLCJpYXQiOjE1NTY5NjkwMjIsImV4cCI6MTU1Njk3MjYyMn0.srkNLfQXU5Z3fWFiTKXhZ20LFgBzc-r1s1YHKZqkkhM"
}
```

* `'/api/v1/users/register' - POST` - create an user

Request body:

| key |	type | description |
| --- | --- | --- |
| username | string | |
| email | string | |
| password | string | |
| passwordConfirmation | string | |

Response payload

| key |	type | description |
| --- | --- | --- |
| registered | boolean | |

Sample request:

```json
{
  "username": "toan1234",
  "email": "toan1234@gmail.com",
  "password": "123456",
  "passwordConfirmation": "123456"
}
```

Sample response:

```json
{
  "registered": true
}
```

#### Booking API

* `'/api/v1/bookings/manage' - GET` - get all bookings

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token |

Response payload

| key |	type | description |
| --- | --- | --- |
| id | string | |
| days | int | |
| totalPrice | int | |
| guests | int | |
| rental | object | |
| user | string | userID |
| createdAt | Timestamp | |
| endAt | Timestamp | |
| startAt | Timestamp | |


Sample response:

```json
[
  {
    "_id": "5ccd8dfdd1b4160021919427",
    "startAt": "2019-06-09T00:00:00.000Z",
    "endAt": "2019-06-18T00:00:00.000Z",
    "totalPrice": 108,
    "guests": 2,
    "days": 9,
    "createdAt": "2019-05-04T13:05:01.679Z",
    "user": "5ccd794a9664940021456dd8",
    "rental": {
      "bookings": [
          "5ccd8dfdd1b4160021919427"
      ],
      "_id": "5c0d6126ba46d700200c24c2",
      "title": "Amazing modern place",
      "city": "helsinki",
      "street": "Klaneettitie 1 B",
      "category": "apartment",
      "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
      "shared": true,
      "bedrooms": 2,
      "description": "Amazing place",
      "dailyRate": 12,
      "createdAt": "2019-04-09T18:38:30.072Z",
      "user": "5c0d60f7ba46d700200c24c1",
      "__v": 1
    },
    "__v": 0
  }
]
```

* `'/api/v1/bookings/' - POST` - create a booking

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token |

Response payload

| key |	type | description |
| --- | --- | --- |
| status | string | |


Sample response:

```json
{
  "bookings": [],
  "_id": "5ccd91f2d1b416002191942a",
  "title": "Nice apartment",
  "city": "helsinki",
  "street": "Eerikinkatu 5",
  "category": "house",
  "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
  "shared": false,
  "bedrooms": 2,
  "description": "This is super nice",
  "dailyRate": 99,
  "createdAt": "2019-05-04T13:21:54.702Z",
  "user": {
      "rentals": [
          "5ccd8fd4d1b4160021919429"
      ],
      "bookings": [
          "5ccd8dfdd1b4160021919427"
      ],
      "_id": "5ccd794a9664940021456dd8",
      "username": "toan1234",
      "email": "toan1234@gmail.com",
      "password": "$2b$10$ul9GbomTl8nqEKaoYXderugk7qsusfhFjry02kP1kjY8/RM9.YAF.",
      "__v": 0
  },
  "__v": 0
}
```


#### Rental API

* `'/api/v1/rentals/:rentalID' - GET` - get that specific rental

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token  |


Response payload

| key |	type | description |
| --- | --- | --- |
| id | string | |
| title | string | |
| city | string | |
| street | string | |
| category | string | |
| image | string | |
| shared | boolean | |
| bedrooms | int | |
| description | string | |
| dailyRate | int | |
| createdAt | Timestamp | |
| user | string | userID |
| bookings | array | each bookingItem is object that has startAt & endAt fields |


Sample response:

```json
{
  "bookings": [
      {
          "startAt": "2019-06-09T00:00:00.000Z",
          "endAt": "2019-06-18T00:00:00.000Z"
      }
  ],
  "_id": "5c0d6126ba46d700200c24c2",
  "title": "Amazing modern place",
  "city": "helsinki",
  "street": "Klaneettitie 1 B",
  "category": "apartment",
  "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
  "shared": true,
  "bedrooms": 2,
  "description": "Amazing place",
  "dailyRate": 12,
  "createdAt": "2019-04-09T18:38:30.072Z",
  "user": {
      "username": "toan"
  },
  "__v": 1
}
```

* `'/api/v1/rentals/:rentalID' - PATCH` - edit their own rental

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token  |


Request body:

| key |	type | description |
| --- | --- | --- |
| bedrooms | int | |
| category | string | Valid values: house, condo, apartment |
| city | string |  |
| dailyRate | int | |
| description | string | |
| image | string | |
| shared | boolean | |
| street | string | |
| title | string | |

Response payload

| key |	type | description |
| --- | --- | --- |
| bedrooms | int | |
| bookings | array | |
| category | string | |
| city | string |  |
| createdAt | timestamp |  |
| dailyRate | int | |
| description | string | |
| image | string | |
| shared | boolean | |
| street | string | |
| title | string | |
| id | string | |
| user | object | |

Sample request:

```json
{
	"title": "Nice apartment in Kamppi center"
}
```

Sample response:

```json
{
  "bookings": [],
  "_id": "5ccd91f2d1b416002191942a",
  "title": "Nice apartment in Kamppi",
  "city": "helsinki",
  "street": "Eerikinkatu 5",
  "category": "house",
  "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
  "shared": false,
  "bedrooms": 2,
  "description": "This is super nice",
  "dailyRate": 99,
  "createdAt": "2019-05-04T13:21:54.702Z",
  "user": {
      "rentals": [
          "5ccd8fd4d1b4160021919429"
      ],
      "bookings": [
          "5ccd8dfdd1b4160021919427"
      ],
      "_id": "5ccd794a9664940021456dd8",
      "username": "toan1234",
      "email": "toan1234@gmail.com",
      "password": "$2b$10$ul9GbomTl8nqEKaoYXderugk7qsusfhFjry02kP1kjY8/RM9.YAF.",
      "__v": 0
  },
  "__v": 0
}
```

* `'/api/v1/rentals/:rentalID' - DELETE` - delete their own item

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token |

Sample response:

```json
{
	"status": "deleted"
}
```

* `'/api/v1/rentals/' - POST` - create a rental

Header payload:

| key |	type | description |
| --- | --- | --- |
| authorization | string | Server Token  |

Response payload

| key |	type | description |
| --- | --- | --- |
| bedrooms | int | |
| category | string | |
| city | string | |
| dailyRate | int | |
| description | string | |
| image | string | |
| shared | boolean | |
| street | string | |
| title | string | |

Response payload

| key |	type | description |
| --- | --- | --- |
| status | string | |

Sample request:

```json
{
	"bedrooms": "2",
	"category": "house",
	"city": "helsinki",
	"dailyRate": 99,
	"description": "This is super nice",
	"image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
	"shared": false,
	"street": "Eerikinkatu 5",
	"title": "Nice apartment"
}
```

Sample response:

```json
{
  "bookings": [],
  "_id": "5ccd91f2d1b416002191942a",
  "title": "Nice apartment",
  "city": "helsinki",
  "street": "Eerikinkatu 5",
  "category": "house",
  "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
  "shared": false,
  "bedrooms": 2,
  "description": "This is super nice",
  "dailyRate": 99,
  "createdAt": "2019-05-04T13:21:54.702Z",
  "user": {
      "rentals": [
          "5ccd8fd4d1b4160021919429"
      ],
      "bookings": [
          "5ccd8dfdd1b4160021919427"
      ],
      "_id": "5ccd794a9664940021456dd8",
      "username": "toan1234",
      "email": "toan1234@gmail.com",
      "password": "$2b$10$ul9GbomTl8nqEKaoYXderugk7qsusfhFjry02kP1kjY8/RM9.YAF.",
      "__v": 0
  },
  "__v": 0
}
```

* `'/api/v1/rentals/' - GET` - get all rentals

Response payload

| key |	type | description |
| --- | --- | --- |
| id | string | |
| title | string | |
| city | string | |
| street | string | |
| category | string | |
| image | string | |
| shared | boolean | |
| bedrooms | int | |
| description | string | |
| dailyRate | int | |
| createdAt | Timestamp | |
| user | string | userID |


Sample response:

```json
[
  {
    "_id": "5ccbeab889aed40021c3e595",
    "title": "Helsinki rental",
    "city": "helsinki",
    "street": "Eerikinkatu 6",
    "category": "apartment",
    "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
    "shared": false,
    "bedrooms": 1,
    "description": "This is super nice",
    "dailyRate": 22,
    "createdAt": "2019-05-03T07:16:08.525Z",
    "user": "5ccbea8789aed40021c3e594",
    "__v": 0
  }
]
```


* `'/api/v1/rentals/?city=cityName' - GET` - get all rentals by city

Request params:

| key |	type | description |
| --- | --- | --- |
| city | string | |


Sample request params:

```json
{
  "city": "helsinki"
}
```

Response payload

| key |	type | description |
| --- | --- | --- |
| id | string | |
| title | string | |
| city | string | |
| street | string | |
| category | string | |
| image | string | |
| shared | boolean | |
| bedrooms | int | |
| description | string | |
| dailyRate | int | |
| createdAt | Timestamp | |
| user | string | userID |


Sample response:

```json
[
  {
    "_id": "5ccbeab889aed40021c3e595",
    "title": "Helsinki rental",
    "city": "helsinki",
    "street": "Eerikinkatu 6",
    "category": "apartment",
    "image": "https://i.ibb.co/2tgDqZT/apartment-photo.jpg",
    "shared": false,
    "bedrooms": 1,
    "description": "This is super nice",
    "dailyRate": 22,
    "createdAt": "2019-05-03T07:16:08.525Z",
    "user": "5ccbea8789aed40021c3e594",
    "__v": 0
  }
]
```



## Author

* **Toan Thanh**


## License

This project is licensed under the ISC License