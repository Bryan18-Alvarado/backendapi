import { Link } from "react-router-dom";
function SellerSidebar(){
    return(
        <div className="list-group">
        <Link to="/seller/dashboard" className="list-group-item list-group-item-action active">Panel de Control</Link>
        <Link to="/seller/products" className="list-group-item list-group-item-action ">Productos</Link>
        <Link to="/seller/add-product" className="list-group-item list-group-item-action">Agregar Productos</Link>
        <Link to="/seller/orders" className="list-group-item list-group-item-action">Ordenes</Link>
        <Link to="/seller/customers" className="list-group-item list-group-item-action">Clientes</Link>
        <Link to="/seller/report" className="list-group-item list-group-item-action">Reportes</Link>
        <Link to="/seller/profile" className="list-group-item list-group-item-action">Perfil</Link>
        <Link to="/seller/change-password" className="list-group-item list-group-item-action">Cambiar Contraseña</Link>
        <Link className="list-group-item list-group-item-action text-danger">Salir</Link>
    </div>
    )
}
export default SellerSidebar;