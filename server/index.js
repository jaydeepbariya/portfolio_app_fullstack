const express = require('express');
require('dotenv').config();
const contactRoutes = require("./routes/Contact");
const cors = require('cors');  

const app = express();

app.listen(process.env.PORT, ()=> {
    console.log("Server Started on port ", process.env.PORT);
});


app.use(express.json());
app.use(cors());

app.use("/api/v1/contact/", contactRoutes);