const { Schema, model } = require('mongoose');

const reportSchema = new Schema(
    {
        concepto: String,
        fecha_inicio: {
            type: Date,
            default: Date.now
        },
        fecha_fin: {
            type: Date,
            default: Date.now
        },
        nombre: String,
        posicion: String,
        departamento: String,
        supervisor: String,
        fecha: {
            type: Date,
            default: Date.now
        },
        cuenta: String,
        descripcion: String,
        total: String,
        monto_final: String,
        aprobado: String
    }, {
        timestamps: true
    });

module.exports = model('Report', reportSchema);