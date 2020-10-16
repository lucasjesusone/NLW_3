import express from 'express';
import path from 'path'
import 'express-async-errors'
import cors from 'cors'

import './database/connection';
import routes from './routes'
import errorHandler from './errors/handler'


const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);




app.listen(3333);




// Rota = conjunto
// Recurso = Usuário
// Metodos HTTP
// Parametros

// Get = Buscar uma info
// Post = Criar uma info
// Delete = deletar uma info
// Put = Editar uma info
