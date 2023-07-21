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
				<Card title = {"Card Number One"} img = {"https://g.petango.com/photos/619/582b46c3-b1dc-4b1e-b55a-686d5e479875.jpg"}/>
				<Card title = {"Card Number Two"} img = {"https://g.petango.com/photos/619/bfb8cef6-22c5-4c5b-bd4c-e8d8e299266f.jpg"}/>
				<Card title = {"Card Number Three"} img = {"https://g.petango.com/photos/619/a0cd4bfe-68a9-448f-8efb-137a2f23d8d0.jpg"}/>/>
				<Card title = {"Card Number Four"} img = {"https://g.petango.com/photos/619/0b70f24d-fcde-4796-b3c5-a55dea71b636.jpg"}/>/>
			</div>
				<Footer/>
		</div>
	);
};

export default Home;
