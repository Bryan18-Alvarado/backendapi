import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TagProducts(props) {
    const baseUrl = 'http://127.0.0.1:8000/api'
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { tag } = useParams();

    useEffect(() => {
        fetchData(baseUrl + '/products/' + tag);
    }, [tag]);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data);
                setTotalResult(data.count);
            });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    var limit = 12;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(<li className="page-item">
            <Link onClick={() => changeUrl(baseUrl + '/products/' + tag + '/?page=' + i)} to={`/products/${tag}/?page=${i}`} className="page-link">
                {i}
            </Link>
        </li>);
    }

    return (
        <section className="container mt-4">
            <h3 className="mb-4">Todos los productos</h3>
            <div>
                {products.map((product) => (
                    <SingleProduct product={product} />
                ))}
                <ul className="pagination">
                    {links}
                </ul>
            </div>
        </section>
    );
}
export default TagProducts;
