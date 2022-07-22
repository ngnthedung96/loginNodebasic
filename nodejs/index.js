const express = require('express')
const app = express()
const session = require('express-session')
//connect db
const connection = require('./src/config/connectDb')

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }
}));

//truyền app vào route
const route = require('./src/route/index')
route(app)



const cors = require('cors')
app.use(cors())
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

app.listen(3000)