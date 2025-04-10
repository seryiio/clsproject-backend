import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import velocidadOptimaRoutes from './routes/velocidadOptima.routes.js'
import codigoOperacionRoutes from './routes/codigoOperacion.routes.js'
import ordenNavegacionOptimaRoutes from './routes/ordenNavegacionOptima.routes.js'
import autenticacionCLS from './routes/autenticacion.routes.js'
import roleCLS from './routes/role.routes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', velocidadOptimaRoutes)
app.use('/api/v1', codigoOperacionRoutes)
app.use('/api/v1', ordenNavegacionOptimaRoutes)
// app.use('/api/v1', autenticacionCLS)
// app.use('/api/v1', roleCLS)

app.listen(port, () => {
    console.log(`port running on port http://localhost:${port}`);
});

export default app;