import { Router } from "express";
import HelloController from "./controllers/HelloController"
import CartoesController,{createTableCartoes} from "./controllers/CartoesController";
import UsersController,{createTablePessoas} from "./controllers/UsersController";
import SessionsController from "./controllers/SessionsController";
import auth from './middlewares/auth'
const routes = new Router()
createTablePessoas()
createTableCartoes()
//controllers publicos
 //REST 
routes.post('/sessions',SessionsController.create)
// routes.post('/users'        ,UsersController.create)
routes.post('/users/'        ,UsersController.insertPessoa)
// //middleware
routes.use(auth)

//-- protegido daqui pra baixo
//controllers privados

//RESTFULL
routes.get('/users'         ,UsersController.index)
routes.get('/users/:id'         ,UsersController.show)
// routes.get('/users'         ,UsersController.index)
// routes.get('/users/:id'     ,UsersController.show)
 
// routes.put('/users/:id'     ,UsersController.update) 
routes.put('/users/:id'     ,UsersController.update) 
routes.delete('/users/:id'  ,UsersController.destroy) 
// routes.delete('/users/:id'  ,UsersController.destroy) 

routes.get('/users/:user_id/Cartoes',CartoesController.index)
// routes.get('/users/:user_id/Cartoes',CartoesController.index)
routes.post('/users/:user_id/Cartoes',CartoesController.create)
// routes.post('/users/:user_id/Cartoes',CartoesController.create)
routes.delete('/users/:user_id/Cartoes/:id',CartoesController.destroy) 
// routes.delete('/users/:user_id/Cartoes/:id',CartoesController.destroy) 

export default routes
