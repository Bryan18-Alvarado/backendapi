import React from "react";
import SideBar from "../Customer/Sidebar";

function ChangePassword() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SideBar/>
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header text-center">Cambiar Contraseña</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">
                                        Nueva Contraseña
                                    </label>
                                    <input type="password" className="form-control" id="pwd" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpwd" className="form-label">
                                        Confirmar Contraseña
                                    </label>
                                    <input type="password" className="form-control" id="cpwd" />
                                </div>
                                <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;