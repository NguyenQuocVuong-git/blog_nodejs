const Course = require('../models/courses');



class SiteController {
    // [GET] / home
    index(req , res) {
        res.render('home');
    }

    // [GET] /search
    search(req,res) {
        res.render('search')
    }

}

module.exports = new SiteController;

// index(req,res) {
//     Course.find({}, function (err,courses){
//         if(!err) {
//             res.json(courses);
//         }
//         res.status(400).json({error : 'no loi roi'})
//     })
// }