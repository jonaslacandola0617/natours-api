const { Router } = require('express');

const TourController = require('../controllers/tourControllers');

const router = Router();

router
  .route('/top-5-cheap')
  .get(TourController.aliasTopTours, TourController.findAllTours);

router.route('/tour-stats').get(TourController.getTourStats);
router.route('/monthly-plan/:year').get(TourController.getMonthlyPlan);

router
  .route('/')
  .get(TourController.findAllTours)
  .post(TourController.createTour);

router
  .route('/:id')
  .get(TourController.findTourById)
  .patch(TourController.updateTour)
  .delete(TourController.deleteTour);

module.exports = router;
