const express = require('express');
const cors = require('cors');
const bodypParder = require('body-parser');
const config = require('./config')


//import route
const userRoutes = require('./Routes/User');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodypParder.json());


app.use('/api', userRoutes);

// http://localhost:3001
app.listen(config.port, () => 
    console.log("Server is running...")
)



