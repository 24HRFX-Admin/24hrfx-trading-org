const express = require ('express');
const authController = require ('../controllers/auth');

const router = express.Router();

router.post ('/register', authController.register);
router.post ('/login', authController.login);
router.post ('/editbalance', authController.editbalance);
/*router.post ('/userA', authController.userA);
router.post ('/userB', authController.userB);
router.post ('/userC', authController.userC);
router.post ('/userD', authController.userD);
router.post ('/userE', authController.userE);
router.post ('/userF', authController.userF);
router.post ('/userG', authController.userG);
router.post ('/userH', authController.userH);
router.post ('/userI', authController.userI);
router.post ('/userJ', authController.userJ);
router.post ('/userK', authController.userK);
router.post ('/userL', authController.userL);

*/




module.exports = router;