import React from 'react';
import '../../assets/css/custom_color.css';
const List_luuTruUI = ({
    data,
    renderStars,
    Link,
    windowWidth
}) => {
    return (
        <>
            {windowWidth < 760 ?
                (
                    <>
                        <div className='flex flex-wrap flex-row mx-auto px-4 mt-10 gap-4'>
                            <div className='flex flex-col items-start w-full'>
                                <h2 className='text-3xl font-bold mb-2'>{data.title}</h2>
                                <img className='w-96 h-96' src={data.img} alt={data.title} />
                            </div>
                            <div className='flex flex-col items-start mt-2 w-full'>
                                <p className='flex items-center text-lg'>
                                    <i class="bi bi-geo-alt-fill mb-1"></i>
                                    {data.diaChi}
                                </p>
                                <p className='flex items-center text-lg font-bold py-2'>
                                    Thông tin chi tiết:
                                </p>
                                <p className='flex items-center text-lg'>
                                    {data.detail}
                                </p>
                                <p className='flex items-center text-lg font-bold pt-2'>
                                    Mức đánh giá:
                                    <div className='ml-1 mb-1'>
                                        {renderStars()}
                                    </div>
                                </p>
                                <p className='flex items-end  text-lg font-bold py-2'>
                                    <p >Mức giá đặt phòng:</p>
                                    <p className='text-red-500 ml-2'>{(data.price).toLocaleString('vi')} VND</p>
                                </p>
                                <Link to='/khachSan'>
                                    <button className='middle none center mr-4 rounded-lg custom_bg_color__300 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                                        Đặt ngay
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col mx-auto px-4 mt-10 gap-4'>
                            <h1 className='text-3xl font-bold'>Mục bình luận</h1>
                            <p>
                                {data.feetback}
                            </p>
                        </div>
                    </>
                ) :
                (
                    <>
                        <div className='flex flex-row mx-auto px-4 mt-10 gap-4'>
                            <div className='flex flex-col items-start w-1/3'>
                                <h2 className='text-3xl font-bold mb-2'>{data.title}</h2>
                                <img className='w-96 h-96' src={data.img} alt={data.title} />
                            </div>
                            <div className='flex flex-col items-start mt-2 w-2/3'>
                                <p className='flex items-center text-lg'>
                                    <i class="bi bi-geo-alt-fill mb-1"></i>
                                    {data.diaChi}
                                </p>
                                <p className='flex items-center text-lg font-bold py-2'>
                                    Thông tin chi tiết:
                                </p>
                                <p className='flex items-center text-lg'>
                                    {data.detail}
                                </p>
                                <p className='flex items-center text-lg font-bold pt-2'>
                                    Mức đánh giá:
                                    <div className='ml-1 mb-1'>
                                        {renderStars()}
                                    </div>
                                </p>
                                <p className='flex items-end  text-lg font-bold py-2'>
                                    <p >Mức giá đặt phòng:</p>
                                    <p className='text-red-500 ml-2'>{(data.price).toLocaleString('vi')} VND</p>
                                </p>
                                <Link to='/luuTru'>
                                    <button className='middle none center mr-4 rounded-lg custom_bg_color__300 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                                        Đặt ngay
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col mx-auto px-4 mt-10 gap-4'>
                            <h1 className='text-3xl font-bold'>Mục bình luận</h1>
                            <p>
                                {data.feetback}
                            </p>
                        </div>
                    </>
                )
            }

        </>
    );
};

export default List_luuTruUI;