## Travel Sleep


Live Demo:  

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
* `'/api/v1/users/register' - POST` - create an user

#### Booking API

* `'/api/v1/bookings/manage' - GET` - get all bookings
* `'/api/v1/bookings/' - POST` - create a booking

#### Rental API

* `'/api/v1/rentals/:rentalID' - GET` - get that specific rental
* `'/api/v1/rentals/:rentalID' - PATCH` - edit their own rental
* `'/api/v1/rentals/:rentalID' - DELETE` - delete their own item
* `'/api/v1/rentals/' - POST` - create a rental
* `'/api/v1/rentals/' - GET` - get rentals by name





## Author

* **Toan Thanh**


## License

This project is licensed under the ISC License