const express = require("express");
const app = express();

const colors = require("colors");
const port = 3000;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  USEING EJS | NPM 
app.set('views engine', 'ejs');
app.set(express.static(path.join(__dirname, './views')));


// ROUTES | GET
app.use(require("./Rooutes/useRoutes"));
app.use(require("./Shema/userSheam"));



// Application Listing on PORT 
app.listen(port, () => {
    console.log(`server is runign on : -> ${port} `.bgGreen.black);
});