const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//session entity
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

//ongs entity
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

//incident entity
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.patch('/incidents/:id', IncidentController.update);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes; 