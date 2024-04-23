import logo from '../logo.svg';

function SingleProduct(props){
    return(
        <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <img src={logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
              <h5 className="card-title text-muted">Precio: c$500.00</h5>
               <div className="card-footer">
                <button title='Agregar al carrito' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
                <button title='Agregar a la lista' className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart"></i></button>
              </div>
            </div>
          </div>
    </div>
    );
}

export default SingleProduct