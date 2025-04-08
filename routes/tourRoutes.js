import { Router } from 'express';

import TourController from '../controllers/tourControllers';

const router = Router();

router.route('/').get(TourController.findAll).post(TourController.create);
router
  .route('/:id')
  .get(TourController.findById)
  .patch(TourController.update)
  .delete(TourController.delete);

export default router;
