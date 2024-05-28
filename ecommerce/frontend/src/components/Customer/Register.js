import { useState } from "react";
import axios from "axios";

function Register(props) {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [errorMsg, seterrorMsg] = useState("");
    const [successMsg, setsuccessMsg] = useState("");
    const [registerFormData, setregisterFormData] = useState({
        first_Name: "",
        last_Name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
    });

    const inputHandler = (event) => {
        setregisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value,
        });
        // console.log(loginFormData);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("first_name", registerFormData.first_Name);
        formData.append("last_name", registerFormData.last_Name);
        formData.append("username", registerFormData.username);
        formData.append("email", registerFormData.email);
        formData.append("mobile", registerFormData.mobile);
        formData.append("password", registerFormData.password);

        axios.post(baseUrl + "customer/register/", formData)
            .then(function (response) {
                // console.log(response);
                if (response.data.bool === false) {
                    seterrorMsg(response.data.msg);
                    setsuccessMsg('');
                } else {
                    setregisterFormData({
                        first_Name: "",
                        last_Name: "",
                        username: "",
                        email: "",
                        mobile: "",
                        password: "",
                    });
                    seterrorMsg('');
                    setsuccessMsg(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log(formData);
    };

    const buttonEnabled =
        registerFormData.first_Name !== "" &&
        registerFormData.last_Name !== "" &&
        registerFormData.username !== "" &&
        registerFormData.email !== "" &&
        registerFormData.mobile !== "" &&
        registerFormData.password !== "";

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 col-12 offset-md-2">
                    <div className="card">
                        <h4 className="card-header">Registro de Usuario</h4>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Nombres</label>
                                    <input type="text" name="first_Name" onChange={inputHandler} value={registerFormData.first_Name} className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                    <input type="text" name="last_Name" onChange={inputHandler} value={registerFormData.last_Name} className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre Usuario</label>
                                    <input type="text" name="username" onChange={inputHandler} value={registerFormData.username} className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" onChange={inputHandler} value={registerFormData.email} className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Celular</label>
                                    <input type="number" name="mobile" onChange={inputHandler} value={registerFormData.mobile} className="form-control" id="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Contraseña</label>
                                    <input type="password" name="password" onChange={inputHandler} value={registerFormData.password} className="form-control" id="pwd" />
                                </div>
                                <button type="submit" disabled={!buttonEnabled} className="btn btn-primary">Enviar</button>
                            </form>
                            {errorMsg && <div className="alert alert-danger mt-3">{errorMsg}</div>}
                            {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
