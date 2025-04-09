const { Router } = require('express');

const UserController = require('../controllers/userController');

const router = Router();

router.route('/').get(UserController.findAll).post(UserController.create);
router
  .route('/:id')
  .get(UserController.findById)
  .patch(UserController.update)
  .delete(UserController.delete);

module.exports = router;
