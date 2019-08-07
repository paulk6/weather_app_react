import React from 'react';
import './index.css';

// {} in import is for non-default imports

function ProductsCart(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table-dark table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Remove Product</th>
            </tr>
          </thead>

          <tbody>
            {
              props.cart &&
              props.cart.map( (product, index) =>
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                    className="btn btn-danger" onClick={() => props.removeItem(product.id)}>Remove from Cart</button>
                  </td>
                </tr>
              )
          }
          </tbody>
        </table>
      </div>
    </div>


  );
}



export default ProductsCart;
