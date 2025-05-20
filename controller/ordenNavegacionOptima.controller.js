import { OrdenNavegacionOptima } from '../models/ordenNavegacionOptima.model.js';

export const obtenerOrdenNavegacionOptima = async (req, res) => {
    try {
        const navegacionVelocidadOptima = await OrdenNavegacionOptima.findAll({
        });
        res.json(navegacionVelocidadOptima);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const crearOrdenNavegacionOptima = async (req, res) => {

    const { fecha_hora, embarcacion, velocidad_optima, velocidad_nominal, gph, rpm, rpm_nominal, usuario, CODOR, FECZR, FECAR, HORZR, HORAR, matricula } = req.body;

    try {
        const nuevanavegacionVelocidadOptima = await OrdenNavegacionOptima.create({
            fecha_hora, embarcacion, velocidad_optima, velocidad_nominal, gph, rpm, rpm_nominal, usuario, CODOR, FECZR, FECAR, HORZR, HORAR, matricula
        })
        res.json(nuevanavegacionVelocidadOptima);
    } catch (error) {
        console.error('Error al crear velocidad:', error);
        res.status(500).json({ error: 'Error al crear velocidad' });
    }
}

export const actualizarOrdenNavegacionOptima = async (req, res) => {
    try {
        const { id } = req.params;
        const { velocidad_optima } = req.body;

        const navegacionVelocidadOptima = await OrdenNavegacionOptima.findByPk(id);
        navegacionVelocidadOptima.velocidad_optima = velocidad_optima;

        await navegacionVelocidadOptima.save();
        res.json(navegacionVelocidadOptima);

    } catch (error) {
        console.error('Error al actualizar la velocidad:', error);
        res.status(500).json({ error: 'Error al actualizar la velocidad' });
    }
}

export const borrarOrdenNavegacionOptima = async (req, res) => {
    try {
        const { id } = req.params;
        await OrdenNavegacionOptima.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar la velocidad:', error);
        res.status(500).json({ error: 'Error al eliminar la velocidad' });
    }
}