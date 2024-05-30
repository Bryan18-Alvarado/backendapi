import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../Context";


function Checkout(props) {
    const { cartData, setCartData } = useContext(CartContext);
    const { cartbuttonClickStatus, setcartButtonClickStatus } = useState(false);
    const { productData, setProductData } = useState()

    if(cartData.length == null || cartData.length ===0){
        var cartItems = 0
    } else {
        var cartItems = cartData.length
    }

    var sum =0;
    cartData.map((item, index) => {
        sum += item.product.price;
        return null;
    }, 0);
    const cartRemoveButtonHandler = (product_id) => {
        var previousCart = localStorage.getItem("cartData");
        var cartJson = JSON.parse(previousCart);
        cartJson.map((cart, index) => { // Add parentheses around cart, index
            if (cart != null && cart.product.id == product_id) {
                // delete cartJson[index];
                cartJson.splice(index, 1);
            }
        });
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem("cartData", cartString);
        console.log("Removido del carrito");
        setcartButtonClickStatus(false);
        setCartData(cartJson);

    }
    return (
        <div className="container mt4">
            <h3 className="mb-4">Todos los articulos ({cartItems})</h3>
            {cartItems !==0 &&

                <div className="row">
                    <div className="col-md-8 col-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Precio</th>
                                    <th>accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems &&
                                    cartData.map((item, index) => {
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link><image src={item.product.image} className="image-Thumbnail" with='80' alt="..." /></Link>
                                                <p><Link>{item.product.title}</Link></p>
                                            </td>
                                            <td>C$. {item.product.price}</td>
                                            <td>
                                                <button title="Eliminar del carrito" type="button" onClick={()=>cartRemoveButtonHandler(item.product.id)} target="_blank" className="btn btn-warning ms-1">
                                                    <i className="fa-solid fa-trash"></i> Eliminar del carrito
                                                </button>
                                            </td>
                                        </tr>

                                    })
                                }

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>{sum}</th>
                                </tr>
                                <tr colSpan="3" align="center">
                                    <Link to="/categories" class="btn btn-success">Continuar Comprando</Link>
                                    <Link className="btn btn-primary ms-1">proceder a pagar</Link>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            }
            {!cartItems ===0 &&
            <>
                <h3 className="mb-4">No hay productos en el carrito</h3>
                <Link to='/' className='btn btn-success'>Home</Link>
            </>
            }
        </div>
    );
}
export default Checkout;