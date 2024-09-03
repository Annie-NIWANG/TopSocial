//git init
// 在 backend 这一层npm init
//npm i nodemon concurrently -D
// npm i express cors json-server axios
const express = require('express');
const cors = require('cors');
const router =  require ('./routes/index');
const {handleErrors} = require('./middleware/errorMiddleware')
//create web server
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api',router)
//use error middleware at the end
app.use(handleErrors)

const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost:80')
})
// run web server 
// terminal :cd backend & npx nodemon server.js

