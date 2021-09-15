
import React, { Component } from 'react';
import Cart from '../Cart';


import Detail from './Detail';
import Item from './Item';


export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          name: "Samsung Galaxy A10",
          price: "40906000",
          img: "../Img/samsung-galaxy.jpg",
          info: {
            screen: "AMOLED Full HD 9.0",
            os: "Android 9.0",
            frontCamera: "20MP",
            backCamera: "Chính 48MB, phụ 30MP",
          },
          ram: "4 GB",
          rom: "64 GB",
        },
        {
          id: 1,
          name: "IPhone12",
          price: "200306000",
          img: "../Img/iphone-12.jpg",
          info: {
            screen: "Full HD 12.0",
            os: "IOS 14",
            frontCamera: "20MP",
            backCamera: "Chính 100MB, phụ 30MP",
          },
          ram: "16 GB",
          rom: "32 GB",
        },
        {
          id: 2,
          name: "Xiaomi Note 10",
          price: "10005000",
          img: "../Img/xiaomi-redmi-note-10-5g.jpg",
          info: {
            screen: "OLED 10.0",
            os: "Android 8.0",
            frontCamera: "69MP",
            backCamera: "Chính 96MB, phụ 30MP",
          },
          ram: "10 GB",
          rom: "64 GB",
        },
      ],
      Selected: 1,
      Cart: [],
    }
    
  }
  select = (index) => {
    this.setState({ Selected: index });
  }
  addCart = (index) => {
    if (this.state.Cart.includes(this.state.products[index])) {
      this.state.Cart.map((cItem) =>
      (
        console.log("already exist!")
      )
      )
    }
    else {
      this.state.Cart.push(this.state.products[index]);
      console.log(this.state.Cart);
    }
  }
  

  render() {
    return (
      <div className="Wrapper">
        <div className="row">
          <div className="col-md-12">
            <h3 className="Banner">Bài tập giỏ hàng</h3>
          </div>
        </div>
        <div className="row buttonWrapper">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Giỏ hàng({this.state.Cart.length})
          </button>


        </div>
        <div className="row rowItem">
          {
            this.state.products.map((item) => (
              <Item products={item}
                select={this.select}
                addCart={this.addCart}
              />
            )
            )
          }
        </div>
        <div className="row ItemDetail">
          {<Detail products={this.state.products[this.state.Selected]} />}
        </div>
        <div>
          {
            this.state.Cart.map((CItem) => (
              <Cart CItem={CItem}
              />
            )
            )
          }
        </div>
      </div>

    )
  }
}
