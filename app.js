import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import velocidadOptimaRoutes from './routes/velocidadOptima.routes.js'
import embarcacionesFaena from './routes/embarcacionesFaena.routes.js'
import ordenNavegacionOptimaRoutes from './routes/ordenNavegacionOptima.routes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', velocidadOptimaRoutes)
app.use('/api/v1', embarcacionesFaena)
app.use('/api/v1', ordenNavegacionOptimaRoutes)

app.listen(port, () => {
    console.log(`RUNNING ON ${port}`);
});

export default app;