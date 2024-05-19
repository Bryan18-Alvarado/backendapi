import { Link } from "react-router-dom";
function OrderFailure(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className='col-md-8 offset-2'>
                    <div className="card">
                        <div className="card-body text-center">
                            <p><i className="fa fa-check-circle text-danger fa-3x"></i></p>
                            <h3 className="text-success">Oops... Ocurrrio un error !</h3>
                            <p className="mt-4">
                                <Link to='/' className="btn btn-primary">Inicio</Link>
                                <Link to='/customer/dashboard' className="btn btn-secondary ms-2">Panel de Control</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default OrderFailure;