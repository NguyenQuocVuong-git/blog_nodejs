const newRouter = require("./news");
const siteRouter = require("./site");
const meRouter = require("./me");
const coursesRouter = require("./courses");

function route(app) {
  app.use("/news", newRouter);

  app.use("/", siteRouter);
  app.use("/", meRouter);
  app.use("/courses", coursesRouter);

  // app.get('/', (req, res) => {
  //     res.render('home');
  //   });

  // app.get('/news', (req, res) => {
  //   res.render('news');
  // });

  //   app.get('/search', (req, res) => {
  //     res.render('search');
  //   });

  //   app.post('/search', (req, res) => {
  //     console.log(req.body);
  //     res.send('');
  //   });
}

module.exports = route;
