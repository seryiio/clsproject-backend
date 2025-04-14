import { EmbarcacionesFaena } from '../models/clsEmbarcacionFaena.model.js';

export const obtenerTodasEmbarcacionesEnFaena = async (req, res) => {
  try {
    const embarcaciones = await EmbarcacionesFaena.findAll({
      attributes: ['EMBARCACION'],
      group: ['EMBARCACION'],
      raw: true
    });

    res.json(embarcaciones);
  } catch (error) {
    console.error('Error al obtener embarcaciones:', error);
    res.status(500).json({ error: 'Error al obtener embarcaciones en faena' });
  }
};