import { Link } from "react-router-dom";

import logo from '../logo.svg'
function Categories(){
    return (
        <section className="container">
            {/* latest category section */}
            <h3 className="mt-4">Todas las categorias
            </h3>
            {/* end latest category section */}
            <div className="row mb-3">

                {/* product box */}
                <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                        <img src={logo} class="card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title"><Link to='/category/python/1'>Python</Link></h4>
                            </div>
                        <div className="card-footer">Products downloads: 202555</div>
                    </div>
                </div>
                {/* product box end */}

                {/* product box */}
                <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                        <img src={logo} class="card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title"><Link to="/category/java/2">Java</Link></h4>
                            </div>
                        <div className="card-footer">Products downloads: 202555</div>
                    </div>
                </div>
                {/* product box end */}

                {/* product box */}
                <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                        <img src={logo} class="card-img-top" alt="..." />
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
                        <img src={logo} class="card-img-top" alt="..." />
                            <div className="card-body">
                            <h4 className="card-title">Nombre categoria</h4>
                            </div>
                        <div className="card-footer">Products downloads: 202555</div>
                    </div>
                </div>
                {/* product box end */}

         
            </div>
            {/* end product section */}

            {/* pagiantion */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>

            {/* end pagiantion */}
                
        </section>
    );
}
export default Categories;