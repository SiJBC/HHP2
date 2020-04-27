const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/healthyhumanproject"
);

const ailmentSeed = [
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "tablet1",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
]

db.Ailments
    .deleteMany({})
    .then(() => db.Ailments.collection.insertMany(ailmentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });