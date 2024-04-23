import { Link} from 'react-router-dom';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">Ecommerce</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categorias</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    </div>
                  </div>
        </nav>
    );
}
export default Header;