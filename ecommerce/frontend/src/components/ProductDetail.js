import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedSingleProduct from "./RelatedSingleProduct";

function ProductDetail() {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const { product_slug, product_id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [cartbuttonClickStatus, setcartButtonClickStatus] = useState(false);

    useEffect(() => {
        fetchData(baseUrl + "/product/" + product_id);
        fetchRelatedData(baseUrl + "/related-products/" + product_id);
    }, []);

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
                setProductImgs(data.product_imgs);
                setProductTags(data.tags ? data.tags.split(',') : []);
            });
    }

    function fetchRelatedData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRelatedProducts(data.data);
            });
    }

    const tagsLinks = [];
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim();
        tagsLinks.push(
            <Link
                className="badge bg-secondary text-white me-1"
                to={`/products/${tag}`}
                key={i}
            >
                {tag}
            </Link>
        );
    }

    const cartAddButtonHandler = () => {
        var previousCart = localStorage.getItem("cartData"); //continuar desde aqui
        console.log("Agregado al carrito");
        setcartButtonClickStatus(true);
    };

    const cartRemoveButtonHandler = () => {
        console.log("Removido del carrito");
        setcartButtonClickStatus(false);
    }
    // console.log(productData.product_imgs);

    return (
        <section className="container mt-4">
            <h3 className="mb-4">Detalle del Producto</h3>
            <div className="row">
                <div className="col-4">
                    <div id="relatedThumbnailsSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {
                                productImgs.map((img, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="carousel-item active" key={index}>
                                                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="carousel-item" key={index}>
                                                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailsSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-8">
                    <h4>{productData.title}</h4>
                    <p>{productData.detail}</p>
                    <p className="text-muted">Precio:C$ {productData.price}</p>
                    <p className="mt-3">
                        <Link to={productData.demo_url} title="Demo" target="_blank" className="btn btn-dark">
                            <i className="fa-solid fa-cart-plus"></i> Demo
                        </Link>

                        {!cartbuttonClickStatus && (
                            <button title="Agregar al carrito" type="button" target="_blank" onClick={cartAddButtonHandler} className="btn btn-primary ms-1">
                                <i className="fa-solid fa-cart-plus"></i> Agregar al carrito
                            </button>
                        )}
                        {cartbuttonClickStatus && (
                            <button title="Eliminar del carrito" type="button" onClick={cartRemoveButtonHandler} target="_blank" className="btn btn-warning ms-1">
                                <i class="fa-solid fa-trash"></i> Eliminar del carrito
                            </button>
                        )}
                        <button title="Comprar ahora" target="_blank" className="btn btn-success ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Comprar ahora
                        </button>
                        <button title="Agregar a la lista" target="_blank" className="btn btn-danger ms-1">
                            <i className="fa-solid fa-cart-plus"></i> Agregar a la lista
                        </button>
                    </p>
                    <hr />
                    <div className="product-tags mt-4">
                        <h5>Tags</h5>
                        <p>
                            {tagsLinks}
                        </p>
                    </div>
                </div>
            </div>

            {/* Productos relacionados */}
            {relatedProducts.length > 0 &&
                <>
                    <h3 className="text-primary fs-1 mt-5 mb-3 text-center">Productos Relacionados</h3>
                    <div id="relatedProductSlider" className="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {
                                relatedProducts.map((product, index) => {
                                    if (index === 0) {
                                        return (
                                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="slide 1"></button>
                                        );
                                    } else {
                                        return (
                                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="slide 1"></button>
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className="carousel-inner">
                            {
                                relatedProducts.map((product, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="carousel-item active">
                                                <RelatedSingleProduct product={product} />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="carousel-item">
                                                <RelatedSingleProduct product={product} />
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
                    </div>
                </>
            }
            {/* Fin de productos relacionados */}
        </section>
    );
}

export default ProductDetail;