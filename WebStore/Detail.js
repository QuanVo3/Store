import Product from './Product';
import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const { products } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 ProductDImage">
                        <h3 className="name">{products.name}</h3>
                        <img src={products.img} className="category"></img>
                    </div>
                    <div className="col-md-9">
                        <h3>Thông số kỹ thuật</h3>

                        <div className="row">
                            <div className="col-md-6">Màn hình</div>
                            <div className="col-md-6">{products.info.screen}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Hệ điều hành</div>
                            <div className="col-md-6">{products.info.os}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Camera trước</div>
                            <div className="col-md-6">{products.info.frontCamera}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Camera sau</div>
                            <div className="col-md-6">{products.info.backCamera}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">RAM</div>
                            <div className="col-md-6">{products.ram}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">ROM</div>
                            <div className="col-md-6">{products.rom}</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;

