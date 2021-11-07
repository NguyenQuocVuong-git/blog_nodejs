class NewController {


    // [GET] news
    index(req , res) {
        res.render('news');
    }
    show(req , res) {
        res.send('New DEtail')
    }
}

module.exports = new NewController;