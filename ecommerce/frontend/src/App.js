import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Ecommerce</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorias</a>
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
            <main className="mt-4">
              <div className="container">
                {/* latest product section */}
                <h3 className="mt-4">Ultimos Productos<a href="#" className="float-end btn btn-dark">Ver todos los productos <i className="fa-solid fa-arrow-right-long"></i></a></h3>


                
                <div className="row mb-4">
                  {/* product box */}
                  <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                      <img src={logo} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Nombre producto</h4>
                        <h5 className="card-title text-muted">Precio: c$500.00</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                  <div className="card-footer">
                    <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* product box end */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                      <img src={logo} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Nombre producto</h4>
                        <h5 className="card-title text-muted">Precio: c$500.00</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                  <div className="card-footer">
                    <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* product box end */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                      <img src={logo} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Nombre producto</h4>
                        <h5 className="card-title text-muted">Precio: c$500.00</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                  <div className="card-footer">
                    <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* product box end */}

              {/* product box */}
              <div className="col-12 col-md-3 mb-2">
                    <div className="card">
                      <img src={logo} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Nombre producto</h4>
                        <h5 className="card-title text-muted">Precio: c$500.00</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                  <div className="card-footer">
                    <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
                  </div>
                </div>
              </div>
              {/* product box end */}
            </div>
            {/* end product section */}

            {/* latest category section */}
            <h3 className="mt-4">categorias populares<a href="#" className="float-end btn btn-dark">Ver categorias <i className="fa-solid fa-arrow-right-long"></i></a></h3>


                
          <div className="row mb-4">
            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
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
                <img src={logo} class="card-img-top" alt="..."/>
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
                <img src={logo} class="card-img-top" alt="..."/>
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
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre categoria</h4>
            </div>
            <div className="card-footer">Products downloads: 202555</div>
          </div>
          </div>
          {/* product box end */}
          </div>
          {/* end product section */}

          {/* popular category section */}
          <h3 className="mt-4">productos populares<a href="#" className="float-end btn btn-dark">Ver productos populares <i className="fa-solid fa-arrow-right-long"></i></a></h3>


                
          <div className="row mb-4">
            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre producto</h4>
                  <h5 className="card-title text-muted">Precio: c$500.00</h5>

            </div>
            <div className="card-footer">
              <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
              <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
            </div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre producto</h4>
                  <h5 className="card-title text-muted">Precio: c$500.00</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer">
              <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
              <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
            </div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre producto</h4>
                  <h5 className="card-title text-muted">Precio: c$500.00</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer">
              <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
              <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
            </div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre producto</h4>
                  <h5 className="card-title text-muted">Precio: c$500.00</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer">
              <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
              <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
            </div>
          </div>
          </div>
          {/* product box end */}
          </div>
          {/* end popular category section */}

          {/* latest product section */}
          <h3 className="mt-4">Vendedores populares<a href="#" className="float-end btn btn-dark">Ver vendedores <i className="fa-solid fa-arrow-right-long"></i></a></h3>


                
          <div className="row mb-4">
            {/* product box */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre vendedor</h4>
            </div>
            <div className="card-footer">
            <div className="card-footer">categorias: <a href="#">python</a> , <a href="#">Django</a></div>
          </div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre vendedor</h4>
            </div>
            <div className="card-footer">categorias: <a href="#">python</a> , <a href="#">Django</a></div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre vendedor</h4>
            </div>
            <div className="card-footer">
            <div className="card-footer">categorias: <a href="#">python</a> , <a href="#">Django</a></div>
          </div>
          </div>
          </div>
          {/* product box end */}

          {/* product box */}
          <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={logo} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title">Nombre vendedor</h4>
                  
            </div>
            <div className="card-footer">
            <div className="card-footer">categorias: <a href="#">python</a> , <a href="#">Django</a></div>
          </div>
          </div>
          </div>
          {/* product box end */}
          </div>
          {/* end product section */}


    </div>

  </main>
</>
  );
}
export default App;
