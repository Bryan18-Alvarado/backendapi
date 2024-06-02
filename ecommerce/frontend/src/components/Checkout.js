import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../Context";
import { useEffect } from "react";

function Checkout() {
  const { cartData, setCartData } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0); // Separate state for cart items
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch cart data from API (replace with your actual API call)
    fetch("https://your-api-endpoint/cart-data")
      .then((response) => response.json())
      .then((data) => {
        setCartData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading to false even on error
      });
  }, []);

  useEffect(() => {
    if (cartData) {
      setCartItems(cartData.length);
    }
  }, [cartData]);

  const cartRemoveButtonHandler = (product_id) => {
    // Handle cart item removal (replace with your cart update logic)
    const updatedCartData = cartData.filter((item) => item.product.id !== product_id);
    setCartData(updatedCartData);
  };

  return (
    <div className="container mt4">
      {isLoading ? (
        <p>Cargando carrito...</p>
      ) : (
        <>
          <h3 className="mb-4">Todos los articulos ({cartItems})</h3>
          {cartItems > 0 && (
            <div className="row">
              <div className="col-md-8 col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Precio</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData &&
                      cartData.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <Link>
                              <img
                                src={item.product.image}
                                className="image-Thumbnail"
                                width="80"
                                alt="..."
                              />
                            </Link>
                            <p>
                              <Link>{item.product.title}</Link>
                            </p>
                          </td>
                          <td>C$. {item.product.price}</td>
                          <td>
                            <button
                              title="Eliminar del carrito"
                              type="button"
                              onClick={() => cartRemoveButtonHandler(item.product.id)}
                              target="_blank"
                              className="btn btn-warning ms-1"
                            >
                              <i className="fa-solid fa-trash"></i> Eliminar del
                              carrito
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>Total</th>
                      <th>{cartData.reduce((sum, item) => sum + item.product.price, 0)}</th>
                    </tr>
                    <tr colSpan="3" align="center">
                      <Link to="/categories" className="btn btn-success">
                        Continuar Comprando
                      </Link>
                      <Link className="btn btn-primary ms-1">Proceder a pagar</Link>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
          {cartItems === 0 && (
            <>
              <h3 className="mb-4">No hay productos en el carrito</h3>
              <Link to="/" className="btn btn-success">
                Home
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
