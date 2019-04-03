const Rental = require('./models/rental');
const User = require('./models/user');

class FakeDb {

  constructor() {
    this.rentals = [{
      title: "Nice view on ocean",
      city: "Helsinki",
      street: "Eerikinkatu",
      category: "condo",
      image: "https://images.unsplash.com/photo-1462737267920-420084dde70c?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=58201366b6389029cbfba3d6c7d03d51",
      bedrooms: 4,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 43
      },
      {
      title: "Modern apartment in center",
      city: "Turku",
      street: "Samonkatu",
      category: "apartment",
      image: "https://images.unsplash.com/photo-1462737267920-420084dde70c?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=58201366b6389029cbfba3d6c7d03d51",
      bedrooms: 1,
      shared: false,
      description: "Very nice apartment in center of the city.",
      dailyRate: 11
      },
      {
      title: "Old house in nature",
      city: "Venice",
      street: "Banicka 1",
      category: "house",
      image: "https://images.unsplash.com/photo-1462737267920-420084dde70c?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=58201366b6389029cbfba3d6c7d03d51",
      bedrooms: 5,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 23
    }];

    this.users = [{
      username: "Test User",
      email: "test@gmail.com",
      password: "testtest"
    }];

  }

  async cleanDb() {
    await User.remove({});
    await Rental.remove({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);

    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.user = user;

      user.rentals.push(newRental);
      newRental.save();
    });

    user.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;