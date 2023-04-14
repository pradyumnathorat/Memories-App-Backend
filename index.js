const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const postRoutes = require("./routes/posts")
dotenv.config()
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use( "/post" , postRoutes)

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })).catch((err) => {
        console.log(err.message);
    });