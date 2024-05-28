// import { Link } from "react-router-dom";
// import logo from '../../logo.svg';
import Sidebar from "../Customer/Sidebar";

function Profile () {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar/>
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Actualizar Perfil</h4>
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
                                    <label for="profileImg" className="form-label">Imagen Perfil</label>
                                    <input type="file" className="form-control" id="profileImg"></input>
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
export default Profile;