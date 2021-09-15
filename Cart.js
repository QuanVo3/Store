import React, { Component } from 'react';

class Cart extends Component {
    
    render() {
        const {CItem} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-2"><b>Mã sản phẩm</b></div>
                                <div className="col-md-2"><b>Hình ảnh</b></div>
                                <div className="col-md-2"><b>Tên sản phẩm</b></div>
                                <div className="col-md-2"><b>Số lượng</b></div>
                                <div className="col-md-2"><b>Đơn giá</b></div>
                                <div className="col-md-2"><b>Thành tiền</b></div>
                            </div>

                            {this.state.Cart.map((CItem) => {
                                <div className="row">
                                    <div className="col-md-2">{CItem.id}</div>
                                    <div className="col-md-2">{CItem.img}</div>
                                    <div className="col-md-2">{CItem.name}</div>
                                    <div className="col-md-2">1</div>
                                    <div className="col-md-2">{CItem.price}</div>
                                    <div className="col-md-2">{CItem.price}</div>
                                </div>
                            })}

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;