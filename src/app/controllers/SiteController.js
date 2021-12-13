const courses = require("../models/courses");
const Course = require("../models/courses");
const { mutipleMongooseObject} = require( '../../util/mongoose');
class SiteController {
  // [GET] / home
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     return res.json(courses);
    //   }else {
    //       next(err);
    //     // res.status(400).json({ error: "ERROR" });
    //   }
    // });

    Course.find({})
      .then((courses) => {
        courses = mutipleMongooseObject(courses)
        res.render("home", { courses });
      })
      .catch(next);

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

// index(req,res) {
//     Course.find({}, function (err,courses){
//         if(!err) {
//             res.json(courses);
//         }
//         res.status(400).json({error : 'no loi roi'})
//     })
// }
