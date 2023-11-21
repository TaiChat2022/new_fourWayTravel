import { Link } from "react-router-dom";

const XemGanDayLayout = ({ currentUser, userXemGanDay }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl mb-6">Xem gần đây</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentUser ? (
            userXemGanDay && userXemGanDay.length ? (
              [...userXemGanDay].reverse().slice(0, 4).map((item) => {
                const formattedDate =
                  item.lastViewed && typeof item.lastViewed.toDate === "function"
                    ? item.lastViewed.toDate().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                    : "";

                return (
                  <div
                  key={item.id}
                  className="border border-gray-300 p-0 rounded-md relative "
                >
                  <p className="text-lg text-gray-900 font-bold absolute top-0 right-0">
                    {formattedDate}{" "}
                  </p>
                
                  <img
                    src={item.img}
                    alt=""
                    className="mb-2 rounded-md"
                  />
                  <p className="text-ms font-semibold absolute top-0 left-0 text-white bg-gray-700 p-2 rounded-md">
                    {item.danhMuc}
                  </p>
                  <div className="flex flex-col">
                    <Link to={`/booking/${item.id}`}>
                      <p className="text-base">{item.title}</p>
                    </Link>
                  </div>
                  <p className="mt-auto text-base text-green-600">
                    {item.price.toLocaleString("vi")} VND
                  </p>
                </div>
                
                );
              })
            ) : (
              <p>Không có mục nào trong danh sách xem gần đây.</p>
            )
          ) : (
            <p>Vui lòng đăng nhập để xem danh sách xem gần đây.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default XemGanDayLayout;
