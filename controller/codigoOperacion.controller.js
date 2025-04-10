import { Op } from 'sequelize';
import { CodigoOperacionEmbarcacion } from "../models/codigosOperacion.model.js";
import { CLS_LOCATION } from '../models/clsLocation.model.js';
import { Mobile } from '../models/clsMobiles.model.js';

export const obtenerCodigoOperacionPorFechaYEmbarcacion = async (req, res) => {
  try {
    const { Embarcación } = req.params;

    console.log('Embarcación:', Embarcación);

    // Paso 1: Obtener el ID_MOBILE de la embarcación seleccionada
    const mobile = await Mobile.findOne({
      where: { NAME: Embarcación },
      attributes: ['ID_MOBILE', 'ID_2'],  // Necesitamos ID_MOBILE y ID_2 para hacer el JOIN
      order: [['ID_MOBILE', 'ASC']],  // Ordenar por ID_MOBILE para asegurarse de obtener el correcto
    });

    if (!mobile) {
      return res.status(404).json({ error: 'Embarcación no encontrada' });
    }

    const { ID_MOBILE, ID_2 } = mobile;

    // Paso 2: Obtener la última fecha de zarpe para la embarcación seleccionada
    const operacion = await CodigoOperacionEmbarcacion.findOne({
      where: { 'Embarcación': Embarcación },
      order: [['Fecha Zarpe', 'DESC']],  // Ordenamos por la fecha de zarpe en orden descendente
      limit: 1,
      attributes: ['Fecha Zarpe', 'Fecha Arribo', 'Código Orden'],  // Incluimos 'Código Orden' en los atributos
    });

    if (!operacion) {
      return res.status(404).json({ error: 'No se encontró código de operación para esta embarcación' });
    }

    const { 'Fecha Zarpe': fechaZarpe, 'Fecha Arribo': fechaArribo, 'Código Orden': codigoOrden } = operacion;

    // Paso 3: Obtener la ubicación de la embarcación (JOIN con CLS_LOCATION)
    const location = await CLS_LOCATION.findOne({
      where: {
        ID_MOBILE: ID_2,  // Usamos ID_2 que es la relación con CLS_LOCATION
        DATE: {
          [Op.gte]: fechaZarpe
        }
      }
    });

    if (!location) {
      return res.status(404).json({ error: 'No se encontró ubicación para esta embarcación en la fecha solicitada' });
    }

    // Paso 4: Retornar el Código de Orden
    res.json({ codigo_orden: codigoOrden });

  } catch (error) {
    console.error('Error al obtener el código de operación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

  
  export const obtenerCodigosOperacion = async (req, res) => {
    try {
        const codigoOperaciones = await CodigoOperacionEmbarcacion.findAll({
        });
        res.json(codigoOperaciones);
    } catch (error) {
        console.error('Error al obtener el código de operación:', error);
        res.status(500).json({ error: 'Error al obtener el código de operación' });
    }
}

// export const obtenerCodigoOperacionPorFechaYEmbarcacion = async (req, res) => {
//     try {
//       const { Embarcación } = req.params;
//       console.log('Embarcación:', Embarcación);
  
//       const operacion = await CodigoOperacionEmbarcacion.findOne({
//         where: { Embarcación },
//         order: [['Fecha Zarpe', 'ASC']],
//         offset: 0,
//         limit: 1,
//         attributes: [
//           ['Código Orden', 'codigo_operacion'],
//         ],
//       });
  
//       console.log('Operacion encontrada:', operacion);
  
//       if (!operacion) {
//         return res.status(404).json({ error: 'No se encontró código de operación para esta embarcación' });
//       }
  
//       res.json({ codigo_operacion: operacion.dataValues.codigo_operacion });
//     } catch (error) {
//       console.error('Error al obtener el código de operación:', error);
//       res.status(500).json({ error: 'Error interno del servidor' });
//     }
//   };