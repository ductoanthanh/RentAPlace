const express = require('express');
const router = express.Router();

const RentalCtrl = require('../controllers/rental');
const UserCtrl = require('../controllers/user');

router.get('/manage',  UserCtrl.authMiddleware, RentalCtrl.getAllUserRentals);

router.get('/:id/verify-user', UserCtrl.authMiddleware, RentalCtrl.verifyRentalOwner);

router.get('/:id', RentalCtrl.getRentalDetail);

router.patch('/:id', UserCtrl.authMiddleware, RentalCtrl.editRental);

router.delete('/:id', UserCtrl.authMiddleware, RentalCtrl.deleteRental);

router.post('', UserCtrl.authMiddleware, RentalCtrl.createRental);

router.get('', RentalCtrl.getAllRentalsByCity);

router.get('/secret', UserCtrl.authMiddleware, function(req, res) {
  res.json({"secret": true});
});

module.exports = router;
