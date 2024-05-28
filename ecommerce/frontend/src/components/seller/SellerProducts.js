import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import SellerSidebar from './SellerSidebar';

function orders(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <td colSpan="5" align='right'>
                                        <Link to="/seller/add-product" className='btn btn-primary'>
                                            <i className='fa fa-plus-circle'></i> Agregar Producto
                                        </Link>
                                    </td>
                                </tr>
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
                                    <td>Nombre Producto</td>
                                    <td>C$. 500.00</td>
                                    <td>Publicado</td>
                                    <td>
                                        <a href='#' className='btn btn-info'>Ver</a>
                                        <a href='#' className='btn btn-primary ms-1'>Editar</a>
                                        <a href='#' className='btn btn-danger  ms-1'>Eliminar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default orders;
