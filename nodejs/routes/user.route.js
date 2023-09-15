const  userController  =  require('../controllers/userController');
const  router  =  require('express').Router();

router.get('/getall', userController.getall);
router.get('/:id', userController.find);
router.post('/create', userController.create);
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);

module.exports  =  router;
