const reportsCtrl = {};

const Report = require('../models/Report');

reportsCtrl.getReports = async (req, res) => {
    const reports = await Report.find();
    res.json(reports);
};

reportsCtrl.createReport = async (req, res) => {
    const { concepto, fecha_inicio, fecha_fin, nombre,
            posicion, departamento, supervisor, fecha,
            cuenta, descripcion, total, monto_final,
            aprobado} = req.body;
    const newReport = new Report({
        concepto,
        fecha_inicio,
        fecha_fin,
        nombre,
        posicion,
        departamento,
        supervisor,
        fecha,
        cuenta,
        descripcion,
        total,
        monto_final,
        aprobado
    });
    await newReport.save();
    res.json('New Report added');
};

reportsCtrl.getReport = async (req, res) => {
    const report = await Report.findById(req.params.id);
    res.json(report);
}

reportsCtrl.deleteReport = async (req, res) => {
    await Report.findByIdAndDelete(req.params.id)
    res.json('Report Deleted');
}

reportsCtrl.updateReport = async (req, res) => {
    const { concepto, fecha_inicio, fecha_fin, nombre,
        posicion, departamento, supervisor, fecha,
        cuenta, descripcion, total, monto_final,
        aprobado} = req.body;
    await Report.findOneAndUpdate({_id: req.params.id}, {
        concepto,
        fecha_inicio,
        fecha_fin,
        nombre,
        posicion,
        departamento,
        supervisor,
        fecha,
        cuenta,
        descripcion,
        total,
        monto_final,
        aprobado
    });
    res.json('Report Updated');
}

module.exports = reportsCtrl;