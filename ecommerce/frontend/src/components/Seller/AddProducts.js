import React from 'react';
import SellerSidebar from './SellerSidebar';

function AddProduct() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Agregar Producto</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    Categoría Producto
                                </label>
                                <select className="form-control">
                                    <option>Python</option>
                                    <option>PHP</option>
                                    <option>React</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Nombre Producto
                                </label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Precio
                                </label>
                                <input type="number" className="form-control" id="price" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Descripción
                                </label>
                                <textarea className="form-control" rows="8" id="description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productImg" className="form-label">
                                    Imagen Producto
                                </label>
                                <input type="file" className="form-control" id="productImg" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;