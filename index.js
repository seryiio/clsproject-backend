import app from './app.js'
import { config } from 'dotenv'
import { VelocidadOptima } from './models/velocidadOptima.model.js';
import { OrdenNavegacionOptima } from './models/ordenNavegacionOptima.model.js';

config();

async function main() {
    try {
        await
        VelocidadOptima.sync({ force: false })
        OrdenNavegacionOptima.sync({ force: false })
        app.listen(4000);
        console.log('Server RUN!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();