import { VelocidadOptima } from '../models/velocidadOptima.model.js';

export const obtenerVelocidadOptima = async (req, res) => {
    try {
        const velocidades = await VelocidadOptima.findAll({
        });
        res.json(velocidades);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const obtenerVelocidadOptimaporEmbarcacion = async (req, res) => {
    try {
        const { embarcacion } = req.params;
        const velocidad = await VelocidadOptima.findOne({
            where: { embarcacion },
            attributes: ['velocidad_optima'],
        });
        if (!velocidad) {
            return res.status(404).json({ error: 'Embarcación no encontrada' });
        }

        res.json(velocidad);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const obtenerGphOptimoporEmbarcacion = async (req, res) => {
    try {
        const { embarcacion } = req.params;
        const velocidad = await VelocidadOptima.findOne({
            where: { embarcacion },
            attributes: ['gph'],
        });
        if (!velocidad) {
            return res.status(404).json({ error: 'Embarcación no encontrada' });
        }

        res.json(velocidad);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const obtenerRpmOptimoporEmbarcacion = async (req, res) => {
    try {
        const { embarcacion } = req.params;
        const velocidad = await VelocidadOptima.findOne({
            where: { embarcacion },
            attributes: ['rpm'],
        });
        if (!velocidad) {
            return res.status(404).json({ error: 'Embarcación no encontrada' });
        }

        res.json(velocidad);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const obtenerVelocidadNominalOptimaporEmbarcacion = async (req, res) => {
    try {
        const { embarcacion } = req.params;
        const velocidad = await VelocidadOptima.findOne({
            where: { embarcacion },
            attributes: ['velocidad_nominal'],
        });
        if (!velocidad) {
            return res.status(404).json({ error: 'Embarcación no encontrada' });
        }

        res.json(velocidad);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}

export const obtenerRpmNominalOptimaporEmbarcacion = async (req, res) => {
    try {
        const { embarcacion } = req.params;
        const velocidad = await VelocidadOptima.findOne({
            where: { embarcacion },
            attributes: ['rpm_nominal'],
        });
        if (!velocidad) {
            return res.status(404).json({ error: 'Embarcación no encontrada' });
        }

        res.json(velocidad);
    } catch (error) {
        console.error('Error al obtener las velocidades de las embarcaciones:', error);
        res.status(500).json({ error: 'Error al obtener las velocidades de las embarcaciones' });
    }
}


export const crearVelocidadOptima = async (req, res) => {

    const { embarcacion, velocidad_optima, gph, rpm } = req.body;

    try {
        const nuevaVelocidad = await VelocidadOptima.create({
            embarcacion, velocidad_optima, gph, rpm
        })
        res.json(nuevaVelocidad);
    } catch (error) {
        console.error('Error al crear velocidad:', error);
        res.status(500).json({ error: 'Error al crear velocidad' });
    }
}

export const actualizarVelocidad = async (req, res) => {
    try {
        const { id } = req.params;
        const { velocidad_optima, gph, rpm } = req.body;

        const velocidad = await VelocidadOptima.findByPk(id);
        velocidad.velocidad_optima = velocidad_optima;
        velocidad.gph = gph;
        velocidad.rpm = rpm;

        await velocidad.save();
        res.json(velocidad);

    } catch (error) {
        console.error('Error al actualizar la velocidad:', error);
        res.status(500).json({ error: 'Error al actualizar la velocidad' });
    }
}

export const actualizarVelocidades = async (req, res) => {
    const datos = req.body;
    if (!Array.isArray(datos)) {
        return res.status(400).json({ error: 'Se esperaba un array de objetos con los datos a actualizar' });
    }

    try {
        const resultados = await Promise.all(datos.map(async (item) => {
            const { id, velocidad_optima, velocidad_nominal, gph, rpm, rpm_nominal } = item;

            const velocidad = await VelocidadOptima.findByPk(id);
            if (!velocidad) {
                return { id, error: 'No encontrado' };
            }

            velocidad.velocidad_optima = velocidad_optima;
            velocidad.velocidad_nominal = velocidad_nominal;
            velocidad.gph = gph;
            velocidad.rpm = rpm;
            velocidad.rpm_nominal = rpm_nominal;

            await velocidad.save();
            return velocidad;
        }));

        res.json(resultados);
    } catch (error) {
        console.error('Error al actualizar velocidades:', error);
        res.status(500).json({ error: 'Error al actualizar velocidades' });
    }
};
