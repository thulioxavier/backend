const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const EventClassController = require('../controllers/EventClassController');
const EventController = require('../controllers/EventController');
const router = express.Router();

const TestController = require('../controllers/TestController');
const UserControllers = require('../controllers/UserControllers');
const imageUp = require('../middlewares/imageUp');

// Router Test Ping Server
router.get('/ping', TestController.Ping);
// Cadastro Usuario
router.post('/user', UserControllers.Create);
// Login Usuario
router.post('/user/login', UserControllers.Login);

//Category
router.post('/category', CategoryController.Create);

//Event
router.post('/event', imageUp.upload, imageUp.resize, EventController.Create);
router.put('/event/:id', imageUp.upload, imageUp.resize, EventController.Update);
router.delete('/event/:id', EventController.Delete);
router.get('/events/', EventController.Select);
router.get('/event/:id', EventController.SelectById);

//event_class
router.post('/event_class', EventClassController.Create);
router.delete('/event_class/:id', EventClassController.Delete);
router.put('/event_class/:id_class', EventClassController.Update);
router.get('/event_class/:id_event', EventClassController.SelectByEventId);
module.exports = router;