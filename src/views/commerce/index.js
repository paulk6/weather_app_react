import React, { Component } from 'react';
import './index.css';
import ProductsTable from '../../components/productsTable';
import ProductsCart from '../../components/productsCart';
import firebase from '../../firebase';


// let products = [
//   {
//     'id': 1,
//     'name': 'Hat',
//     'price': 19.99
//   },
//   {
//     'id': 2,
//     'name': 'Shirt',
//     'price': 10.95
//   },
//   {
//     'id': 3,
//     'name': 'Shoes',
//     'price': 110.55
//   }
// ]

// {} in import is for non-default imports


class Commerce extends Component {
constructor() {
  super();

  this.state= {
    'products': [],
    'cart': []
  }

  // upload products to firebase for reference
  // only need to do this once, to add or remove products, must create a method to do so
  // firebase.database().ref('products').set(products);
}

// set states before they render, didMount sets states after they render
componentWillMount() {
  // this.setState({ products });

  // load products from firebase and set into local state
  const db_products = firebase.database().ref('products')
  const db_cart = firebase.database().ref('cart');

  // loop through the db_cart and update local state
  db_cart.on('value', response => {
    let data = response.val();

    let cart = [];

    for (let i in data) {
      cart.push(data[i]);
    }

    this.setState({ cart })
  })

  // loop through the database response
  db_products.on('value', response => {
    let data = response.val();

    this.setState({ 'products' : data });
  })
}

  addItem = id => {
    let products = this.state.products;
    let cart = this.state.cart;
    // always assign state to local variable, don't alter state directly

    //add item with correct id to local cart variable
    for (let i in  products) {
      if (products[i].id === id) {
        cart.push(products[i]);
        break;
      }
    }

    // set the state with updated values
    this.setState({ cart })

    // update cart value on firebase
    firebase.database().ref('cart').set(cart);
  }

  removeItem = id => {
    let cart = this.state.cart;

    for (let i in  cart) {
      if (cart[i].id == id) {
        cart.splice(cart[i], 1);
        break;
      }
    }

    this.setState({ cart })

    firebase.database().ref('cart').set(cart);

  }

  render() {
    return (
      <div className="container">
        <h1>Company Products</h1>
        <ProductsTable
        products={this.state.products}
        addItem={this.addItem} />
        <h1>Shopping Cart</h1>
        <ProductsCart
        cart={this.state.cart}
        removeItem={this.removeItem}
        />
      </div>
    );
  }
}


export default Commerce;
