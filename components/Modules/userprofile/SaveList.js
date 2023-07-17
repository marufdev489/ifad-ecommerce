import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { token } from "../../../utils/auth";
// import { BACKEND_URL } from "../../../utils/constants";

const SaveList = () => {
	const [myWishlist, setMyWishList] = useState([]);

	const fetchData = async() =>{
		const BASE_URL = "http://192.168.11.93:8000/ecom"
		const headers = {
			"Authorization": token(),
			"Content-Type": "application/json",
		  };
	try{
		await axios.get(`${BASE_URL}/wishlist`, {headers})
		.then((res)=>{ 
			setMyWishList(res.data.data);
			// console.log(myWishlist); 
		})
	}catch(err){
		console.log(err.message);
	}
	};
	useEffect(()=>{
		fetchData(); 
	},[]);

	return (
		<>
			<Row>
				<h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Wish list</h1>
				{
					myWishlist.map((item)=>{
						{
							if(item.inventory != null){
								return (<div className="col-lg-3 col-md-6 text-center">
								<div className="card-border mb-4">
									<div className="">
										<Link href="/singleproduct/SingleProduct" className="">
											<Image src="https://i.postimg.cc/hjwzF1cM/product1.png" alt="" className="img-fluid product-img mt-3 pb-3 mx-auto d-block" />
										</Link>
									</div>
									<h4 className="text-capitalize font-lato producttitle mt-1 font-16">{item.inventory.title}</h4> 
									<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
									<p className="text-capitalize font-lato pb-2 font-14">{item.inventory.sale_price}</p>
									<div className="d-flex justify-content-center mb-3">
										<Link href="/payments/Payments"
											className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
										>
											buy now
										</Link>
										<button
											type="button"
											className="btn btn-success buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
										>
											<div className="d-flex justify-content-between text-center font-14 pe-0">
												<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
												<span className="fw-normal font-lato ad-card-btn">add to cart</span>
											</div>
										</button>
									</div>
								</div>
								</div>)
							}else{
								return(
									<div className="col-lg-3 col-md-6 text-center">
								<div className="card-border mb-4">
									<div className="">
										<Link href="/singleproduct/SingleProduct" className="">
											<Image src="https://i.postimg.cc/hjwzF1cM/product1.png" alt="" className="img-fluid product-img mt-3 pb-3 mx-auto d-block" />
										</Link>
									</div>
									<h4 className="text-capitalize font-lato producttitle mt-1 font-16">{item.combo.title}</h4> 
									<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
									<p className="text-capitalize font-lato pb-2 font-14">{item.combo.sale_price}</p>
									<div className="d-flex justify-content-center mb-3">
										<Link href="/payments/Payments"
											className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
										>
											buy now
										</Link>
										<button
											type="button"
											className="btn btn-success buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
										>
											<div className="d-flex justify-content-between text-center font-14 pe-0">
												<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
												<span className="fw-normal font-lato ad-card-btn">add to cart</span>
											</div>
										</button>
									</div>
								</div>
								</div>
								)
							}
						}
					})
				} 	
			</Row> 
		</>
	);
};
export default SaveList;
