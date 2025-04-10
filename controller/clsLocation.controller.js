import { ClsLocation } from "../models/clsLocation.model.js";

export const obtenerFecha = async (req, res) => {
    try {
        const codigoOperaciones = await ClsLocation.findAll({
        });
        res.json(codigoOperaciones);
    } catch (error) {
        console.error('Error al obtener el código de operación:', error);
        res.status(500).json({ error: 'Error al obtener el código de operación' });
    }
}

export const obtenerCodigoOperacionPorFechaYEmbarcacion = async (req, res) => {
    try {
        const { Embarcación } = req.params;

        const codigoOperaciones = await ClsLocation.findOne({
            where: {
                Embarcación: Embarcación,
            },
            attributes: ['codigo_operacion'],
        });
        res.json(codigoOperaciones);
    } catch (error) {
        console.error('Error al obtener el código de operación:', error);
        res.status(500).json({ error: 'Error al obtener el código de operación' });
    }
};
