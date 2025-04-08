import { Router } from 'express';

import UserController from '../controllers/userController';

const router = Router();

router.route('/').get(UserController.findAll).post(UserController.create);
router
  .route('/:id')
  .get(UserController.findById)
  .patch(UserController.update)
  .delete(UserController.delete);

export default router;
