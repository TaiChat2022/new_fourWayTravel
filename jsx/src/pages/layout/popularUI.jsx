import React from 'react';

const PopularUI = ({ fightDM_list, fight_list, groupedProducts }) => {
  return (
    <>
      <div className="pt-12">
        <div className="text-center">
          <span className="text-3xl font-semibold mb-5">CHUYẾN BAY PHỔ BIẾN </span> <br />
          <span className="text-0.25xl text-gray-500 font-light mb-20">Được khách hàng tin tưởng và lựa chọn</span>
        </div>

        
          <div  className="grid grid-cols-3 gap-x-6 max-w-5x1 mx-12 my-12">
          {Object.keys(groupedProducts).map((category) => (
            <div key={category} className="border border-rgba(68, 117, 243, 1) border-solid border-1 rounded-lg relative">
              <div className="relative">
                <img src="https://media.truyenhinhdulich.vn/upload/news/48_tp_ho_chi_minh.jpg" alt="TPHCM_DARK" className="brightness-1000 w-full h-full rounded-lg object-cover " />
                <div className="absolute top-0 left-5 bottom-20 flex flex-col justify-center items-center">
                  <span className="text-white text-xl ">Chuyến bay từ  <i className="text-blue-500 font-bold text-3xl fa-solid fa-plane fa-rotate-270" /> </span>
                  <span className="text-white text-2xl font-bold">{category}</span>
                </div>
                
                {groupedProducts[category].slice(0, 3).map((item) => (
                  <div key={item.id} className="got">
                    <div className="flex items-center justify-between mx-2 my-2">
                      <div className="mr-2">
                        <span className="text-xl text-blue-900 font-bold">{item.name}</span>
                      </div>
                      <div className="mr-2">
                        <span className="text-lg">{item.price.toLocaleString('vi')}đ</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm mx-2"> {item.sokm}KM - {item.time}h - {item.ngay} </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default PopularUI;
