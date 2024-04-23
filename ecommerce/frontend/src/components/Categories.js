import logo from '../logo.svg';
import { Link } from "react-router-dom"
function Categories(){
    return(
       <section className="container">
        {/* latest category section */}
         <h3 className="mt-4" href="/">categorias populares</h3>          
            <div className="row mb-4">
            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title"><Link to="/category/python/1">Python</Link></h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            <div className="col-12 col-md-3 mb-2">
                <div className="card">
                <img src={logo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
            </div>
            </div>
            {/* product box end */}

            </div>
            {/* end category section */}

            {/* PAGINATION */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            {/* END PAGINATION */}
        </section>
    );
}
export default Categories
