import React, { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'

export const Reports = props => {

    const [reports, setReports] = useState([]);

    useEffect(() => {

        getReports();

    }, []);


    const getReports = async () => {
        const res = await axios.get('http://localhost:4000/api/reports')
        setReports(res.data)

        console.log(res.data)
    }

    const deleteReport = async (reportId) => {
        await axios.delete('http://localhost:4000/api/reports/' + reportId)
        getReports();
    }

    return (

        <>

            <h1 className="my-4 text-center">Reportes de gastos</h1>

            <div className="row">
                {
                    reports.map(report => (

                        <div className="col-md-4 p-2" key={report._id}>

                            <div className="card">

                                <div className="card-header d-flex justify-content-between">
                                    <h5><strong>Concepto: {report.concepto}.</strong></h5>
                                </div>

                                <div className="card-body">
                                    <p>
                                        Nombre: {report.nombre}
                                    </p>
                                    <p>
                                        Posición: {report.posicion}
                                    </p>
                                    <p>
                                        Fecha: {moment(report.fecha).format('MMMM Do YYYY')}

                                    </p>
                                </div>

                                <div className="card-footer">
                                    <Link to={"/edit/" + report._id} className="btn btn-primary mr-2">
                                        <i className="material-icons">
                                            Ver</i>
                                    </Link>

                                    <button className="btn btn-danger" onClick={() => deleteReport(report._id)}>
                                        Eliminar
                                    </button>
                                </div>

                            </div>



                        </div>
                    ))
                }

            </div>

        </>

    );

};