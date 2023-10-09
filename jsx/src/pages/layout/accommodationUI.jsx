import React from 'react';
import '../../assets/css/endow_search_by_type.css'


const AccommodationUI = () => {
    return (
        <div className="search-by-type">
            <div className="search-by-type_box">
                <h1 className="title-type">Tìm theo loại chỗ nghỉ</h1>
            </div>
            <div className="box-flex">
                <div className="apartment-box">
                    <div className="apartment">
                        <img
                            className="image-apartment"
                            src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                            alt=""
                        />
                        <h4 className="type-name">Khách sạn</h4>
                        <p className="evaluate">200 đánh giá</p>
                    </div>
                </div>
                <div className="apartment-box">
                    <div className="apartment">
                        <img
                            className="image-apartment"
                            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
                            alt=""
                        />
                        <h4 className="type-name">Khách sạn</h4>
                        <p className="evaluate">200 đánh giá</p>
                    </div>
                </div>
                <div className="apartment-box">
                    <div className="apartment">
                        <img
                            className="image-apartment"
                            src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
                            alt=""
                        />
                        <h4 className="type-name">Khách sạn</h4>
                        <p className="evaluate">200 đánh giá</p>
                    </div>
                </div>
                <div className="apartment-box">
                    <div className="apartment">
                        <img
                            className="image-apartment"
                            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
                            alt=""
                        />
                        <h4 className="type-name">Khách sạn</h4>
                        <p className="evaluate">200 đánh giá</p>
                    </div>
                </div>
                <div className="search-by-type_next">
                    <div className="search_next-element">
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccommodationUI;
