import ip15 from '@/assets/img/images1.png';
import { Link } from 'react-router-dom';
const QRcode = () => {
	return (
		<>
			<div className="mt-6 2xl:mb-6 w-78 m-auto">
				<div className="fresnel-container fresnel-lessThan-l "></div>
				<div className="fresnel-container fresnel-between-l-2xl "></div>
				<div className="fresnel-container fresnel-greaterThanOrEqual-2xl ">
					<div className="mx-auto Wrapper_content__FmHBo px-7 2xs:px-8 l:px-14 2xl:px-5">
						<section
							data-testid="app-install-section"
							className="relative pt-8 bg-2 overflow-hidden px-14 rounded-sm flex h-300"
						>
							<div className="w-3/6">
								<h2 className="text-heading-l font-bold text-2xl mb-1">Trải nghiệm website</h2>
								<h3 className="text-heading-s font-semibold AppInstall_desktopHeadingVerticalSpace__YHPGw">
									Dễ dàng so sánh giá phòng để tiết kiệm mọi lúc, mọi nơi.
								</h3>
								<div className="flex mt-6">
									<div className="mr-11 mt-3">
										<Link to="https://app.appsflyer.com/com.trivago?pid=MPAGE&c=BRO_00_NOP_000_AND_MPAGE">
											<img
												loading="lazy"
												src="https://imgcy.trivago.com/hardcodedimages/google_play_button.svg"
												alt="Google play store logo"
												className="pr-4 pb-4 AppInstall_storeButton___q31Z"
											/>
										</Link>
										<Link to="https://app.appsflyer.com/id376888389?pid=MPAGE&amp;c=BRO_US_NOP_000_iOS_MPAGE">
											<img
												loading="lazy"
												src="https://imgcy.trivago.com/hardcodedimages/ios_button.svg"
												alt="Apple store logo"
												className="pr-4 AppInstall_storeButton___q31Z"
											/>
										</Link>
									</div>
									<img
										width={125}
										loading="lazy"
										src="https://imgcy.trivago.com/image/upload/q_auto/h_250,w_250/v1692111281/layoutimages/qr-code/app_install_qr_code.png"
										alt="app install QR"
									/>
								</div>
							</div>
							<div className="text-blue-700 AppInstall_desktopImageWrapper__y3pMP">
								<svg
									width="384"
									height="406"
									viewBox="0 210 384 406"
									transform="translate(0 -30)"
									xmlns="http://www.w3.org/2000/svg"
								>
									<defs>
										<clipPath
											id="app-install8"
											clipPathUnits="userSpaceOnUse"
										>
											<ellipse
												ry="201"
												rx="188"
												cy="203"
												cx="192"
											></ellipse>
										</clipPath>
									</defs>
									<ellipse
										ry="199"
										rx="188"
										cy="203"
										cx="192"
										fill="white"
									></ellipse>
									<g
										clipPath="url(#app-install8)"
										transform="translate(0 -6)"
									>
										<image
											width={258}
											height={293}
											x={75}
											y={200}
											href={ip15}
										></image>
									</g>
									<ellipse
										strokeWidth={8}
										stroke="currentColor"
										ry={199}
										rx={188}
										cy={203}
										cx={192}
										fill="none"
									></ellipse>
								</svg>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default QRcode;
