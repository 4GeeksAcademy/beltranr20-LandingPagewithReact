import React from "react";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Card from "../component/card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-center">
				<Card title = {"Card Number One"} img = {"https://youdidwhatwithyourweiner.com/wp-content/uploads/2023/03/Dachshund-Puppy-Checklist.jpg"}/>
				<Card/>
				<Card/>
				<Card/>
			</div>
				<Footer/>
		</div>
	);
};

export default Home;
