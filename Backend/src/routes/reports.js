const { Router } = require('express');
const router = Router();

const { getReports, createReport, getReport, deleteReport, updateReport } = require('../controllers/reports.controller');

router.route('/')
    .get(getReports)
    .post(createReport);

router.route('/:id')
    .get(getReport)
    .delete(deleteReport)
    .put(updateReport);

module.exports = router;