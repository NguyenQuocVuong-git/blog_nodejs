const Course = require("../models/courses");
const { mutipleMongooseObject } = require("../../util/mongoose");

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res , next) {
    Course.find({})
        .then(courses => res.render('me/stored_courses' , {
            courses : mutipleMongooseObject(courses)
        })) 
        .catch(next);
    
  }
}

module.exports = new MeController();
