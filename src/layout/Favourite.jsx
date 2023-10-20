import Header from '../pages/Header';
import { useEffect, useState } from 'react';
import '../../public/css/Favourite.css';
import { Link } from 'react-router-dom';
const Favourite = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<>
			<Header windowWidth={windowWidth} />
			<>
				<main className="flex justify-start px-6 mx-auto pt-9 max-w-screen-2xl">
					<span className="self-start ml-4 mr-20">
						<Link to="/">
							<button
								type="button"
								className="flex items-center text-blue-700 text-m hover:underline"
							>
								<span className="inline-flex leading-none transform rotate-180">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="max-w-full max-h-full pointer-events-none"
										width={24}
										height={24}
										viewBox="0 0 24 24"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeMiterlimit={10}
											strokeWidth={2}
										>
											<path d="M10 17l5-5M10 7l5 5"></path>
										</g>
									</svg>
								</span>
								Trước
							</button>
						</Link>
					</span>
					{/* end */}
					<div className="w-max ">
						<div className="px-4">
							<div className="flex items-center px-3 py-3 mb-5 border rounded-lg shadow-3xl border-grey-300 ">
								<span className="inline-flex p-2 mr-2 leading-none transform bg-blue-200 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										className="max-w-full max-h-full pointer-events-none"
									>
										<path
											d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
											fill="currentColor"
										></path>
									</svg>
								</span>
								<section>
									<h2 className="font-bold text-heading-m text-grey-900">
										Theo dõi nơi lưu trú bạn thích
									</h2>
									<p className="text-m ">
										<button
											id="favorites-login"
											className="px-1 text-blue-800 cursor-pointer hover:underline "
										>
											Đăng nhập hoặc tạo tài khoản
										</button>
										để lưu nơi lưu trú bạn thích vào tài khoản và tạo danh sách riêng của mình.
									</p>
								</section>
							</div>
							<h1
								className="font-bold text-heading-xl text-grey-900"
								data-testid="favorites-page-headline"
							>
								Nơi lưu trú bạn thích
							</h1>
							<p className="mt-1 mb-3 text-m text-grey-900"> 1 danh sách</p>
						</div>
						<Link to="/listluutru">
							<section
								className="px-4 mx-auto max-w-screen-2xl"
								data-testid="favorites-page-items-list"
							>
								<ul className="grid grid-cols-1 gap-4 list-none l:grid-cols-3">
									<li
										id
										className="flex flex-col w-full gap-2 my-3"
									>
										<a href="/vi/fa/n%C6%A1i-b%E1%BA%A1n-l%C6%B0u-tr%C3%BA-ti%E1%BA%BFp-theo?listId=">
											<div className="relative l:max-w-xs">
												<img
													className="h-full rounded-sm cursor-pointer w-255 h-159 full wobject-cover hover:opacity-75"
													src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_150,q_auto,w_240/dummy.jpeg"
													loading="lazy"
													draggable="false"
													data-testid="favorite-list-item-element-image"
													alt="Nơi bạn lưu trú tiếp theo"
												/>
											</div>
											<p className="flex flex-wrap max-w-xs mt-2 font-semibold gap-x-2 FavoriteListItem_listName__zqNpN">
												Nơi bạn lưu trú tiếp theo
												<span className="font-normal">(0 kỳ lưu trú)</span>
											</p>
										</a>
									</li>
								</ul>
							</section>
						</Link>
					</div>
				</main>
			</>
		</>
	);
};

export default Favourite;
