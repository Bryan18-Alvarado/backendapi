import SingleProduct from "./SingleProduct";
// import {useState, useEffect } from "react"

function AllProduct(props) {
    // const [products,setProducts]=useState([])
     const products = [
         {
             'title':"Django project 1",
             'price':100
         },
         {
             'title':"Django project 2",
             'price':500
         },
         {
             'title':"Django project 3",
             'price':200
        },
         {
             'title':"Django project 4",
             'price':10
         },
         {
            'title':"Django project 5",
                 'price':30
         },
     ]
     fetch("http://127.0.0.1:8000/api/products/") 
	  .then((response) => response.json())
	  .then((data) => console.log(data));

    // fetch("http://127.0.0.1:8000/api/products/") 
	// .then((response) => response.json())
	//  .then((data) => setProducts(data));
    return(
        <section className="container mt-4">
        <h3 className="mb-4">< span className=" text-success"></span> Python Products </h3>

    <div className="row mb-4">
        {
            products.map((product) =>(
                <SingleProduct product = {product} />
            ))
        }

      {/* <SingleProduct title="Python Product 1 "/>
      <SingleProduct title="Python Product 2 "/>
      <SingleProduct title="Python Product 3 "/>
      <SingleProduct title="Python Product 4 "/> */}




    </div>

     {/* pagination */}
      <nav aria-label="Page navigation example">
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

      {/* end pagiantion */}

  </section>
    )
}
export default AllProduct