import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/endow_search_by_type.css'

const EndowUI = () => {
    return (
        <div className="endow">
            <div className="box-endow">
                <div className="endow-title">
                    <h1 className="header-endow">Ưu đãi</h1>
                    <p className="text-endow">Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</p>
                </div>

                <div className="box">
                    {/* Start left endow */}
                    <div className="box-endow_left">
                        <div className="box-endow_left-text">
                            <div className="box-endow_left-text left-text_header">
                                <h3>Làm việc, thư giãn hay cả hai</h3>
                            </div>
                            <div className="box-endow_left-text left-text_text">
                                <p>Khám phá các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng tiết kiệm hơn</p>
                            </div>
                            <div className="btn btn-endow_left">
                                <button className="btn-left">Tìm chỗ nghỉ</button>
                            </div>
                        </div>
                        <div className="box-endow_left-img">
                            <div className="box-endow_left-img left-img-image">
                                <img
                                    className="image-endow_left"
                                    src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* End left endow */}

                    {/* Start right endow */}
                    <div className="box-endow_right">
                        <div className="box-endow_right-img">
                            <div className="box-endow_right-img right-img-image">
                                <img
                                    className="image-endow_right"
                                    src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/261387541.jpeg?k=80d1571cedd0a363b9d9b78207914af9b1490c6a859cacd8dc090c866d1bbc94&o="
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="box-endow_right-text">
                            <div className="box-endow_right-text right-text_header">
                                <h3>Tiết kiệm 15% với Ưu Đãi Cuối Năm</h3>
                            </div>
                            <div className="box-endow_right-text right-text_text">
                                <p>Khám phá hàng nghìn điểm đến khắp thế giới và tiết kiệm từ 15%</p>
                            </div>
                            <div className="btn btn-endow_right">
                                <button className="btn-right"><Link to="/detailendow" className="btn-right">
                    Tìm Ưu Đãi Cuối Năm
                </Link></button>
                            </div>
                        </div>
                    </div>
                    {/* End right endow */}
                    <div className="dot">
                        <div className="dot-next next-active"></div>
                        <div className="dot-next"></div>
                    </div>
                    <div className="next">
                        <div className="next-element"><i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndowUI;
