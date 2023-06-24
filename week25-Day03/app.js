const express = require("express");
const mongoose = require("mongoose");
const app = express();

const RestaurantData = require("./restaurant");

mongoose.set("strictQuery", true);
//connection
mongoose
  .connect("mongodb://127.0.0.1:27017/RestaurantDATA", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
const RestaurantSchema = mongoose.Schema({
  address: [
    {
      building: "String",
      coord: ["Double", "Double"],
      street: "String",
      zipcode: "String",
    },
  ],
  borough: "String",
  cuisine: "String",
  grades: [
    {
      date: {
        $date: "Date",
      },
      grade: "String",
      score: "Number",
    },
    {
      date: {
        $date: "Date",
      },
      grade: "String",
      score: "Number",
    },
    {
      date: {
        $date: "Date",
      },
      grade: "String",
      score: "Number",
    },
    {
      date: {
        $date: "Date",
      },
      grade: "String",
      score: "Number",
    },
    {
      date: {
        $date: "Date",
      },
      grade: "String",
      score: "Number",
    },
  ],
  name: "String",
  restaurant_id: "String",
});
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const restaurant = new Restaurant({
  address: {
    building: "120",
    coord: [-74.01065899999999, 40.7082118],
    street: "Broadway",
    zipcode: "10005",
  },
  borough: "Manhattan",
  cuisine: "American ",
  grades: [
    {
      date: {
        $date: 1391385600000,
      },
      grade: "A",
      score: 11,
    },
    {
      date: {
        $date: 1378339200000,
      },
      grade: "A",
      score: 13,
    },
    {
      date: {
        $date: 1364169600000,
      },
      grade: "A",
      score: 9,
    },
    {
      date: {
        $date: 1331164800000,
      },
      grade: "A",
      score: 9,
    },
    {
      date: {
        $date: 1300752000000,
      },
      grade: "A",
      score: 8,
    },
  ],
  name: "Ashby'S Specialty",
  restaurant_id: "40898366",
});
// -------------INSERTION PROCESS---------------------------------------------
/* Restaurant.insertMany(
  RestaurantData
); */
/* <------ uncomment above line to insert elements */
// restaurant.save();
// -----Display All Documents------------------------------------------------------------------
const getRestaurant = async () => {
  try {
    const allRestaurant = await Restaurant.find();
    console.log(allRestaurant.length);
    console.log(allRestaurant);
  } catch (error) {
    console.log(error);
  }
};
// getRestaurant(); //to show all Restaurants inside array

// ----
const CustomRestaurant = async () => {
  try {
    const allRestaurant = await Restaurant.find().select({
      name: 1,
      borough: 1,
      cuisine: 1,
    });
    console.log(allRestaurant.length);
    console.log(allRestaurant);
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurant();
// ----------------------------------------------------------------------------
const CustomRestaurant1 = async () => {
  try {
    const allRestaurant = await Restaurant.find().select({
      "address.zipcode": 1,
    });
    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurant1();
// --------------------------------------------------------------------------
const CustomRestaurantBrox = async () => {
  try {
    const allRestaurant = await Restaurant.find({ borough: "Bronx" });
    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurantBrox();

// ----------------------------------------------------------------------
const CustomRestaurantBrox5 = async () => {
  try {
    const allRestaurant = await Restaurant.find({ borough: "Bronx" }).limit(5);
    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurantBrox5();
// ------------------------------------------------------------------------
const CustomRestaurantBroxSkip = async () => {
  try {
    const allRestaurant = await Restaurant.find({ borough: "Bronx" })
      .limit(5)
      .skip(5);
    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurantBroxSkip();
// ---------------------------------------------------------------------------------
const CustomRestaurantBroxgrad = async () => {
  try {
    const allRestaurant = await Restaurant.find({
      "grades.score": { $gt: 50 },
    });

    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurantBroxgrad();
// --------------------------------------------------------------------------------
const CustomRestaurantBroxgtlt = async () => {
  try {
    const allRestaurant = await Restaurant.find({
      "grades.score": { $gt: 80, $lt: 100 },
    });

    console.log(allRestaurant.length);
    console.log(JSON.stringify(allRestaurant));
  } catch (error) {
    console.log(error);
  }
};
// CustomRestaurantBroxgtlt();

// --Q.10--------------------------------------------------------------------------------
const CustomLocation = async () => {
  try {
    const allRestaurant = await Restaurant.find({
      "address.coord[0]": { $lt: -95.754168 },
    });

    console.log(allRestaurant.length);
    console.log(allRestaurant);
  } catch (error) {
    console.log(error);
  }
};
CustomLocation();