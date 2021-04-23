import React, { useState, useEffect } from "react";
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const Reportform = props => {

    const [concepto, setConcepto] = useState("");
    const [fecha_inicio, setFecha_inicio] = useState(new Date());
    const [fecha_fin, setFecha_fin] = useState(new Date());

    const [nombre, setNombre] = useState("");
    const [posicion, setPosicion] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [supervisor, setSupervisor] = useState("");

    const [fecha, setFecha] = useState(new Date());
    const [cuenta, setCuenta] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [total, setTotal] = useState("");
    const [monto_final, setMonto_final] = useState("");
    const [aprobado, setAprobado] = useState("");

    const [_id, setId] = useState("");
    const [editing, setEditing] = useState(false);


    useEffect(() => {

        checkProps();

    }, []);


    const checkProps = async () => {

        if (props.match.params.id) {

            const res = await axios.get('http://localhost:4000/api/reports/' + props.match.params.id);

            setConcepto(res.data.concepto)
            setFecha_inicio(new Date(res.data.fecha_inicio))
            setFecha_fin(new Date(res.data.fecha_fin))

            setNombre(res.data.nombre)
            setPosicion(res.data.posicion)
            setDepartamento(res.data.departamento)
            setSupervisor(res.data.supervisor)

            setFecha(new Date(res.data.fecha))
            setCuenta(res.data.cuenta)
            setDescripcion(res.data.descripcion)
            setTotal(res.data.total)
            setMonto_final(res.data.monto_final)
            setAprobado(res.data.aprobado)

            setId(res.data._id);
            setEditing(true);

        }

    }

    const onSubmit = async (e) => {

        e.preventDefault();

        if (editing) {
            
            const updateReport = {
                concepto: concepto,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                nombre: nombre,
                posicion: posicion,
                departamento: departamento,
                supervisor: supervisor,
                fecha: fecha,
                cuenta: cuenta,
                descripcion: descripcion,
                total: total,
                monto_final: monto_final,
                aprobado: aprobado
            };

            await axios.put('http://localhost:4000/api/reports/' + _id, updateReport);

            console.log(updateReport)

        } else {

            const newReport = {
                concepto: concepto,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                nombre: nombre,
                posicion: posicion,
                departamento: departamento,
                supervisor: supervisor,
                fecha: fecha,
                cuenta: cuenta,
                descripcion: descripcion,
                total: total,
                monto_final: monto_final,
                aprobado: aprobado
            };

            axios.post('http://localhost:4000/api/reports', newReport);

        }

        window.location.href = '/';
    }


    const onInputChange = (e) => {

        if (e.target.name === "concepto") {
            setConcepto(e.target.value)
        } else if (e.target.name === "nombre") {
            setNombre(e.target.value)
        } else if (e.target.name === "posicion") {
            setPosicion(e.target.value)
        } else if (e.target.name === "departamento") {
            setDepartamento(e.target.value)
        } else if (e.target.name === "supervisor") {
            setSupervisor(e.target.value)
        } else if (e.target.name === "cuenta") {
            setCuenta(e.target.value)
        } else if (e.target.name === "descripcion") {
            setDescripcion(e.target.value)
        } else if (e.target.name === "total") {
            setTotal(e.target.value)
        } else if (e.target.name === "monto_final") {
            setMonto_final(e.target.value)
        } else if (e.target.name === "aprobado") {
            setAprobado(e.target.value)
        }

        console.log("change: " + e.target.name)
    }


    const onChangeDate = date => {
        setFecha(date);
    }

    const onChangeDateIni = date => {
        setFecha_inicio(date);
    }

    const onChangeDateFin = date => {
        setFecha_fin(date);
    }

    return (

        <>

            <h1 className="my-4 text-center">{editing === true ? "Actualizar reporte de gasto" : "Formulario registro de gasto"}</h1>

            <form onSubmit={onSubmit}>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Concepto:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="concepto"
                            value={concepto}
                            required />
                        <p className="help-block"></p>
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Fecha de inicio:</label>
                        <br></br>
                        <DatePicker className="form-control"
                            selected={fecha_inicio}
                            onChange={onChangeDateIni} />
                    </div>
                </div>
                <div className="control-group form-group">
                    <div className="controls">
                        <label>Fecha de fin:</label>
                        <br></br>
                        <DatePicker className="form-control"
                            selected={fecha_fin}
                            onChange={onChangeDateFin} />
                    </div>
                </div>

                <br></br>
                <hr></hr>
                <h3>Información del empleado</h3>
                <br></br>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="nombre"
                            value={nombre}
                            required />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Posición:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="posicion"
                            value={posicion}
                            required />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Departamento:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="departamento"
                            value={departamento}
                            required />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Supervisor:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="supervisor"
                            value={supervisor}
                            required />
                    </div>
                </div>

                <br></br>
                <hr></hr>
                <br></br>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Fecha:</label>
                        <br></br>
                        <DatePicker className="form-control"
                            selected={fecha}
                            onChange={onChangeDate} />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Cuenta:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="cuenta"
                            value={cuenta}
                            required />
                    </div>
                </div>


                <div className="control-group form-group">
                    <div className="controls">
                        <label>Descripción:</label>
                        <textarea
                            rows="5"
                            cols="10"
                            className="form-control"
                            onChange={onInputChange}
                            name="descripcion"
                            value={descripcion}
                            required
                            style={{}}>
                        </textarea>
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Total:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="total"
                            value={total}
                            required />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Monto final:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="monto_final"
                            value={monto_final}
                            required />
                    </div>
                </div>

                <div className="control-group form-group">
                    <div className="controls">
                        <label>Aprobado por:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={onInputChange}
                            name="aprobado"
                            value={aprobado}
                            required />
                    </div>
                </div>

                <br></br>

                <button className="btn btn-primary mb-5">
                    {editing === true ? "Actualizar reporte" : "Enviar reporte"}
                </button>

            </form>

        </>

    );

};