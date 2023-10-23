const ChiTietLayout = ({
    data, getRatingText, renderStars
}) => {
    return (
        <>
            <div className="w-3/4 mx-auto mt-2">
                <img className="w-24 h-24" src={data.img} alt={data.title} />
                <h1>{data.title}</h1>
                <p className="render text-xx text-gray-300 flex items-center">
                    {renderStars(data.star)}
                    <span className="text-xm ml-2 font-light text-slate-950">
                        Khách sạn
                    </span>
                </p>
                <div className="flex items-center justify-start mt-2 text-sm">
                    <span className="font-semibold text-sm mr-1">
                        <i className="fa-solid fa-star mb-1 mr-1 text-gray-300"></i>
                        {data.star} - {getRatingText(data.star)}
                    </span>
                    <p className="text-sm">(30 đánh giá)</p>
                </div>
            </div>
        </>
    );
};

export default ChiTietLayout;