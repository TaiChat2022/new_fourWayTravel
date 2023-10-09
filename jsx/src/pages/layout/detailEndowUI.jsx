import React from 'react';
import '../../assets/css/detail_endow.css';
import { Link } from 'react-router-dom';
import Menu from '../menu';

const DetailEndowUI = ({ data }) => {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="deals">
                    <h1 className="deals-title">Các Ưu Đãi Cuối Năm</h1>
                    <div className="boxs">
                        {data?.map((item) => (
                            <div className="box-deals" key={item.id}>
                                <div className="box-image">
                                    <img
                                        className="picture"
                                        src={item.image}
                                        alt=""
                                    />
                                    <img
                                        className="sales"
                                        src="https://cdn-icons-png.flaticon.com/512/9568/9568024.png"
                                        alt=""
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="evaluate">
                                        <div className="number-of-stars">
                                            <p>{item.star} sao</p>
                                        </div>
                                        <div className="level">
                                            <p className={item.star >= 4 ? "premium" : item.star >= 3 ? "normal" : "cheap"}>
                                                {item.star >= 4 ? "(Cao cấp)" : item.star >= 3 ? "(Bình thường)" : "(Giá rẻ)"}
                                            </p>
                                        </div>

                                        <div className="dot-endow"></div>
                                        <div className="location">
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                    <div className="tourist-name">
                                        <Link to="">{item.name}</Link>
                                    </div>
                                    <div className="amount-of-money">
                                        <p className="light">Từ</p>
                                        <p className="money">{item.price} đ</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailEndowUI;
