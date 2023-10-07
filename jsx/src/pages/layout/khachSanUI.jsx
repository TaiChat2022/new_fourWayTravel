import React from 'react';
import '../../assets/css/custom_duycong.css';

const KhachSanUI = ({
    khachSan_list,
    getRatingText,
    Link
}) => {
    return (
        <>
            <div className="container">
                <div className="action1">
                    <h5>Khách sạn tại các chỗ nghĩ hàng đầu</h5>
                    <p>
                        Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chùng tôi đều
                        có hết
                    </p>
                    <div className="box_container">
                        <div className="selection">
                            {khachSan_list ?
                                (
                                    <>
                                        <div className='grid grid-cols-4 gap-4 sm:grid-auto'>
                                            {khachSan_list.map((khachSan) => {
                                                return (
                                                    <>
                                                        <Link to={{
                                                            pathname: `/khachSan/${khachSan.id}`,
                                                            state: { selectedItem: khachSan }
                                                        }}>
                                                            <div className="product relative pb-2">
                                                                <div className="img">
                                                                    <img src={khachSan.img} alt={khachSan.img} />
                                                                </div>
                                                                <div className='title flex justify-between flex-wrap'>
                                                                    <div className="relative flex h-14">
                                                                        <h5 className=' overflow-hidden'>
                                                                            {khachSan.title}
                                                                        </h5>
                                                                    </div>
                                                                    <div className="relative flex h-14">
                                                                        <h5 className=' overflow-hidden'>
                                                                            {(khachSan.price).toLocaleString('vi')} VND
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="from">{khachSan.diaChi}</div>
                                                                <div className="feetback">
                                                                    <div className="feetback_box">
                                                                        <p>{khachSan.star}</p>
                                                                    </div>
                                                                    <p className='mucDanhGia'>{getRatingText(khachSan.star)}</p>
                                                                    <p>288 đánh giá</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div className="product">
                                            Loading...
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* action2 */}
            <div className="container">
                <div className="action1">
                    <h5>Chỗ ở mà khách yêu thích</h5>
                    <p>
                        Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chùng tôi đều
                        có hết
                    </p>
                    <div className="box_container">
                        <div className="selection">
                            {khachSan_list ?
                                (
                                    <>
                                        <div className='grid grid-cols-4 gap-4 sm:grid-auto'>
                                            {khachSan_list.map((khachSan) => {
                                                return (
                                                    <>
                                                        <Link to={`/khachSan/${khachSan.id}`}>
                                                            <div className="product relative pb-2">
                                                                <div className="img">
                                                                    <img src={khachSan.img} alt={khachSan.img} />
                                                                </div>
                                                                <div className='title flex justify-between flex-wrap'>
                                                                    <div className="relative flex h-14">
                                                                        <h5 className=' overflow-hidden'>
                                                                            {khachSan.title}
                                                                        </h5>
                                                                    </div>
                                                                    <div className="relative flex h-14">
                                                                        <h5 className=' overflow-hidden'>
                                                                            {(khachSan.price).toLocaleString('vi')} VND
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="from">{khachSan.diaChi}</div>
                                                                <div className="feetback">
                                                                    <div className="feetback_box">
                                                                        <p>{khachSan.star}</p>
                                                                    </div>
                                                                    <p className='mucDanhGia'>{getRatingText(khachSan.star)}</p>
                                                                    <p>288 đánh giá</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div className="product">
                                            Loading...
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KhachSanUI;