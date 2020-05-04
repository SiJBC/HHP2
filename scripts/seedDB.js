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
        Treatment: "Fioricet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Fioricet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Fioricet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Fioricet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Fioricet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "321@321.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Caffeine",
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
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Pharmaceutical",
        Treatment: "Advil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Nutraceuticals",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Nutraceuticals",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Nutraceuticals",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Nutraceuticals",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "Neuromodulation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical",
        Treatment: "STS",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: "123@123.com"
    },

    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Tylenol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Opioids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical",
        Treatment: "Corticosteroids",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Guided-relaxation",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Acupuncture",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical",
        Treatment: "Physical-therapy",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Cholinesterase-inhibitors",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Cholinesterase-inhibitors",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Cholinesterase-inhibitors",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Cholinesterase-inhibitors",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Memantine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Memantine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Memantine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Memantine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Donepezil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Donepezil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Donepezil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Donepezil",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Galantamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Galantamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Galantamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Galantamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Pharmaceutical",
        Treatment: "Galantamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Cognitive-therapy-approaches",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Cognitive-therapy-approaches",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Cognitive-therapy-approaches",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Cognitive-therapy-approaches",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Cognitive-therapy-approaches",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Emotional-training",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Emotional-training",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method:  "Non-Pharmaceutical",
        Treatment: "Emotional-training",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Emotional-training",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment:"Emotional-training",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Alzheimers",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Bariatricsurgery",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Bariatricsurgery",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Bariatricsurgery",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Bariatricsurgery",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Bariatricsurgery",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Blood-monitoring",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Blood-monitoring",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Blood-monitoring",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Blood-monitoring",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Non-Pharmaceutical",
        Treatment: "Blood-monitoring",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },

    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Metformin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Metformin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Metformin ",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Metformin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Metformin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Sulfonylureas",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Sulfonylureas",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Sulfonylureas",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Sulfonylureas",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Sulfonylureas",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Meglitinides",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Meglitinides",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Meglitinides",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Meglitinides",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Meglitinides",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "Diabetes",
        Method: "Pharmaceutical",
        Treatment: "Thiazolidinediones",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Paracetamol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Paracetamol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Paracetamol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Paracetamol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Paracetamol",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Ibuprofen",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Aspirin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Aspirin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Aspirin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Aspirin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Aspirin",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Pharmaceutical",
        Treatment: "Codeine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Exercise",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Diet",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Glucosamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Glucosamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Glucosamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Glucosamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Glucosamine",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
    },
    {
        Ailment: "JointPains",
        Method: "Non-Pharmaceutical",
        Treatment: "Massage",
        Age: "30-40",
        ActivityLevel: "Do not exercise",
        Story:"Once upon a time",
        Source: "https://somethingsomething.com",
        Email: ""
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