const { Router } = require('express');

const TourController = require('../controllers/tourControllers');

const router = Router();

router.param('id', (req, res, next, val) => {
  if (!val)
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });

  next();
});

router
  .route('/')
  .get(TourController.findAll)
  .post((req, res, next) => {
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid query',
      });
    }

    next();
  }, TourController.create);
router
  .route('/:id')
  .get(TourController.findById)
  .patch(TourController.update)
  .delete(TourController.delete);

module.exports = router;
