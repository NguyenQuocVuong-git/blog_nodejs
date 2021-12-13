const Course = require("../models/courses");
const { mongoooseToObject } = require("../../util/mongoose");

class CoursesController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = mutipleMongooseObject(courses);
        res.render("home", { courses });
      })
      .catch(next);
  }
  //GET :slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongoooseToObject(course) });
      })
      .catch(next);
    // res.send("courses detail - " + req.params.slug);
  }
  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    // body du lieu nhan dc tu client
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg`;
    const courseC = new Course(formData);
    courseC
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
  //edit /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((courses) =>
        res.render("courses/edit", {
          course: mongoooseToObject(courses),
        })
      )
      .catch(next);
    // res.render('courses/edit');
  }

  //PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
          .then(() => res.redirect('/me/stored/courses'))
          .catch(next);
  }

  // DELETE /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
          .then(() => res.redirect('back'))
          .catch(next);
  }
}

module.exports = new CoursesController();
