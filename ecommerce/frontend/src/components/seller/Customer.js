import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import SellerSidebar from './SellerSidebar';

function Customer(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Mobil</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Katia Silva</td>
                                        <td>katyhsilva@gmail.com</td>
                                        <td>85178527</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'>Ordenes</button>
                                            <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                            <td>July Reyes</td>
                                            <td>julireyes@gmail.com</td>
                                            <td>88279570</td>
                                            <td>
                                                <button className='btn btn-primary btn-sm'>Ordenes</button>
                                                <button className='btn btn-danger btn-sm ms-1'>Eliminar de la lista</button>

                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Customer;