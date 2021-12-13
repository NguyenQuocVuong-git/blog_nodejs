const express = require("express");
const path = require("path"); // co san ho tro cua node
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const app = express();
const db = require("./config/db");
const port = 3001;

const route = require("./routes/");

require('dotenv').config({path : '.env'})

// connect to DB
db.connect();

//route init

//http logger ( console log request sever)
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

//ytber

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(methodOverride('_method'));
route(app);
//template angine (them phuong thuc goi view tra ve tu sever)
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    helpers : {
      sum : (a,b) => a + b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
