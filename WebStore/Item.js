import React, { Component } from 'react';
import Product from './Product';



export default class Item extends Component {
    render() {
        const {products,select,addCart} = this.props;
        return (
            <div className="col-md-3 productItem">
                <img src={products.img} alt={products.name} className="img category" />
                <h3 className="name">{products.name}</h3>
                <button className="col-md-6 button detailButton" onClick = {() => select(products.id)}>Xem chi tiết</button>
                <button className="col-md-6 button addButton" onClick = {() => addCart(products.id)} >Thêm giỏ hàng</button>
            </div>
        );

    }
}


