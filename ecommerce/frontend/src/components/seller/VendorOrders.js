import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function VendorOrders (props) {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar/>
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link>
                                                <img src={logo} className="img-thumbnail" width="80" alt="..." />
                                                </Link>
                                                <p>
                                                    <Link>Django</Link>
                                                </p>
                                            </td>
                                            <td>C$. 500.00</td>
                                            <td>
                                                <span className="text-success"> 
                                                <i className="fa fa-check-circle"></i>Completado
                                                </span>
                                            </td>
                                            <td>
                                                <div className="dropdown"> 
                                                    <button className="btn btn-secondary dropdown-toggle" 
                                                        type="button" data-bs-toggle="dropdown" aria-expanded="false"> Cambiar Estado 
                                                        </button> 
                                                        <ul class="dropdown-menu"> 
                                                            <li>
                                                                <a className="dropdown-item" href="#">Aprovado</a>
                                                            </li> 
                                                                <li><a className="dropdown-item" href="#">Enviado</a>
                                                                </li>
                                                                    <li>
                                                                        <a className="dropdown-item" href="#">Completado</a>
                                                                    </li> 
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </div> 
                        </div> 
            </div>
        </div>
    );
}
export default VendorOrders;