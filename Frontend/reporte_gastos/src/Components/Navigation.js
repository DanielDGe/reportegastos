import { Link } from 'react-router-dom'

export const Navigation = props => {


    return (



        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    <i className="material-icons">
                    </i> Hyper Nova Labs
                    </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/readreports" className="nav-link">Consultar gastos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/formreport" className="nav-link">Registrar gasto</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    );

};