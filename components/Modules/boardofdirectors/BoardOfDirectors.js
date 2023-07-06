import Image from "next/image";
import Row from "react-bootstrap/Row";
import Directors from "../../../public/bod/Banner.png";
import Chairman from "../../../public/bod/chairman.jpg";
import Chairman2 from "../../../public/bod/chairman2.png";
import Chairman3 from "../../../public/bod/chairman3.png";
import Chairman4 from "../../../public/bod/chairman4.jpg";
import Chairman5 from "../../../public/bod/chairman5.png";
import Leader from "../../../public/bod/leader.jpg";
import TeamOne from "../../../public/bod/teamone.jpg";
import TeamTwo from "../../../public/bod/teamtwo.jpg";
import TeamThree from "../../../public/bod/teamthree.jpg";
import TeamFour from "../../../public/bod/teamfour.jpg";
import TeamFive from "../../../public/bod/teamfive.jpg";
import TeamSix from "../../../public/bod/teamsix.png";
import TeamSeven from "../../../public/bod/teamseven.jpg";
import TeamEight from "../../../public/bod/teameight.jpg";

const BoardOfDirectors = () => {
	return (
		<>
			<section>
				<div className="">
					<Image src={Directors} alt="" className="bod-img" />
				</div>
				<div className="container">
					<h1 className="bod-page-title text-capitalize font-40 fw-bold text-center py-4 font-inter">board of directors</h1>
					{/* Chirman */}
					<div className="">
						<Row className="d-flex justify-content-evenly">
							<div className="col-lg-4 col-md-4 mb-4">
								<div className="text-center">
									<Image src={Chairman} alt="" className="rounded-pill chairman-img" />
									<h2 className="font-20 fw-bold pt-2 pb-2">Iftekhar Ahmed Tipu</h2>
									<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 mb-4">
								<div className="text-center">
									<Image src={Chairman2} alt="" className="rounded-pill chairman-img" />
									<h2 className="font-20 fw-bold pt-2 pb-2">Mrs. Nilufar Ahmed</h2>
									<p className="about_titledesign position-relative pt-2">Chairman, IFAD Group</p>
								</div>
							</div>
						</Row>
					</div>
					<div className="row d-flex justify-content-evenly">
						<div className="col-lg-4 col-md-4 mb-4">
							<div className="text-center">
									<Image src={Chairman3} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Tanveer Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Group Vice Chairman (i)</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 mb-4">
							<div className="text-center">
									<Image src={Chairman4} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Taskeen Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Group Vice Chairman (ii)</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 mb-4">
							<div className="text-center">
									<Image src={Chairman5} alt="" className="rounded-pill chairman-img" />
								<h2 className="font-20 fw-bold pt-2 pb-2">Tashfeen Ahmed</h2>
								<p className="about_titledesign position-relative pt-2">Group Vice Chairman (iii)</p>
							</div>
						</div>
					</div>

					<h1 className="text-capitalize font-40 fw-bold text-center py-4 font-inter">leadership team</h1>
					<div className="d-flex justify-content-center">
						<div className="col-lg-4 col-md-4 mb-4">
							<div className="text-center">
								<Image src={Leader} alt="" className="rounded leadership-team" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Reazul Haque Chowdhury</h2>
								<p className="position-relative pt-1">Group Managing Director</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamOne} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shejuti A. Ahmed</h2>
								<p className="position-relative pt-1">Group Human Resource Director</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamTwo} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mahbub Baset</h2>
								<p className=" position-relative pt-1">Chief Operating Officer</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamThree} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Syed Mohammed Sibgat Ullah</h2>
								<p className="pt-1">Group Head of Supply Chain Management</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamFour} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Shah Jalal Chowdhury FCA</h2>
								<p className=" pt-1">Chief Financial Office</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamFive} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Saiful Alam Bappy</h2>
								<p className="pt-1">Head of Sales</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamSix} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Mohammed Saleh Uddin Bhuyan</h2>
								<p className="pt-1">Head of Marketing</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamSeven} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Md. Zakir Hossain Mondal</h2>
								<p className="pt-1">Head of Plant</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 mb-4">
							<div className="text-center">
								<Image src={TeamEight} alt="" className="rounded new-team-member" />
								<h2 className="font-20 fw-bold pt-2 pb-1">Md. Habibur Rahman</h2>
								<p className="pt-1">Group Head of Information Technology</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BoardOfDirectors;
