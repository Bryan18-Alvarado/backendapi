import { Link } from "react-router-dom";
import logo from '../../logo.svg';

function SellerRegister (props) {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <h4 className="card-header">Registrate</h4>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="firstName" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="firstName"></input>
                            </div>

                            <div className="mb-3">
                                <label for="lastName" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="lastName"></input>
                            </div>

                            <div className="mb-3">
                                <label for="userName" className="form-label">Nombre Usuario</label>
                                <input type="text" className="form-control" id="username"></input>
                            </div>

                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email"></input>
                            </div>

                            <div className="mb-3">
                                <label for="pwd" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="pwd"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SellerRegister;