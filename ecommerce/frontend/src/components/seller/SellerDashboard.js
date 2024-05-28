import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import SellerSidebar from "./SellerSidebar";

function SellerDashboard (props) {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 col-12 mb-2">
                    <SellerSidebar/>
                </div>
                <div className="col-md-8 col-12 mb-2">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Productos</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Ordenes</h4>
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Cliente</h4>
                                    <h4><a href="#">10</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SellerDashboard;