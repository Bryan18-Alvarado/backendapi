import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react"

function AllProduct(props) {
    const [products, setProducts] = useState([])
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fechData("http://127.0.0.1:8000/api/products/")
    }, []);

    function fechData(baseurl) {

         fetch(baseurl)
        
        .then((response) => response.json())
        
        .then((data) => {
        
        setProducts(data.data)
        
        setTotalResults(data.count);   
    });
}


    return (
        <section className="container mt-4">
            <h3 className="mb-4">< span className=" text-success"></span> Python Products </h3>

            <div className="row mb-4">
                {
                    products.map((product) => (
                        <SingleProduct product={product} />
                    ))
                }
            </div>

            {/* pagination */}
            <nav aria-label="Page navigation example">
                {totalResults}
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

            {/* end pagination */}

        </section>
    )
}
export default AllProduct