import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'

function App() {
  return (
    <>
       <Header/>
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
          {/* end category section */}

          {/* popular product section */}
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
          {/* end popular product section */}

          {/* popular seller section */}
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
          {/* end  popular seller */}


    </div>

  </main>
</>
  );
}
export default App;
