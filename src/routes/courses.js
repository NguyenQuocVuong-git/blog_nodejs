const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');


// newController.index

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

router.get('/', courseController.index);

module.exports = router;
