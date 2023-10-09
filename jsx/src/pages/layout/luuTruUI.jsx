import React from 'react';
import '../../assets/css/custom_duycong.css';

const LuuTruUI = ({ luuTru_list, getRatingText, Link }) => {
	return (
		<>
			<div className="container">
				<div className="action1">
					<h5>Lưu trú tại các chỗ nghĩ hàng đầu</h5>
					<p>Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chùng tôi đều có hết</p>
					<div className="box_container">
						<div className="selection">
							{luuTru_list ? (
								<>
									<div className="grid grid-cols-4 gap-4 sm:grid-auto">
										{luuTru_list.map((luuTru) => {
											return (
												<>
													<Link
														to={{
															pathname: `/luuTru/${luuTru.id}`,
															state: { selectedItem: luuTru },
														}}
													>
														<div className="product relative pb-2">
															<div className="img">
																<img
																	src={luuTru.img}
																	alt={luuTru.img}
																/>
															</div>
															<div className="title flex justify-between flex-wrap">
																<div className="relative flex h-14">
																	<h5 className=" overflow-hidden">{luuTru.title}</h5>
																</div>
																<div className="relative flex h-14">
																	<h5 className=" overflow-hidden">
																		{luuTru.price.toLocaleString('vi')} VND
																	</h5>
																</div>
															</div>
															<div className="from">{luuTru.diaChi}</div>
															<div className="feetback">
																<div className="feetback_box">
																	<p>{luuTru.star}</p>
																</div>
																<p className="mucDanhGia">
																	{getRatingText(luuTru.star)}
																</p>
																<p>288 đánh giá</p>
															</div>
														</div>
													</Link>
												</>
											);
										})}
									</div>
								</>
							) : (
								<>
									<div className="product">Loading...</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* action2 */}
			<div className="container">
				<div className="action1">
					<h5>Nhà ở mà khách yêu thích</h5>
					<p>Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chùng tôi đều có hết</p>
					<div className="box_container">
						<div className="selection">
							{luuTru_list ? (
								<>
									<div className="grid grid-cols-4 gap-4 sm:grid-auto">
										{luuTru_list.map((luuTru) => {
											return (
												<>
													<Link to={`/luuTru/${luuTru.id}`}>
														<div className="product relative pb-2">
															<div className="img">
																<img
																	src={luuTru.img}
																	alt={luuTru.img}
																/>
															</div>
															<div className="title flex justify-between flex-wrap">
																<div className="relative flex h-14">
																	<h5 className=" overflow-hidden">{luuTru.title}</h5>
																</div>
																<div className="relative flex h-14">
																	<h5 className=" overflow-hidden">
																		{luuTru.price.toLocaleString('vi')} VND
																	</h5>
																</div>
															</div>
															<div className="from">{luuTru.diaChi}</div>
															<div className="feetback">
																<div className="feetback_box">
																	<p>{luuTru.star}</p>
																</div>
																<p className="mucDanhGia">
																	{getRatingText(luuTru.star)}
																</p>
																<p>288 đánh giá</p>
															</div>
														</div>
													</Link>
												</>
											);
										})}
									</div>
								</>
							) : (
								<>
									<div className="product">Loading...</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LuuTruUI;
