import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
	return (
		<Container className="mb-4">
			<h1 className="text-center my-4">About</h1>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/about.jpg"
						alt="First slide"
						style={{ height: "90vh", objectFit: "cover" }}
					/>
					<Carousel.Caption
						className="d-flex flex-column h-100 py-5"
						style={{ justifyContent: "center" }}
					>
						<h3 className="mt-5">About Home Store</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
							consectetur voluptates soluta fuga. Culpa natus adipisci commodi
							voluptatum saepe cupiditate et quae tenetur officiis expedita!
							Dolorem nostrum dolores vitae mollitia! Obcaecati non magnam
							cupiditate velit beatae pariatur incidunt maxime, numquam, ratione
							vero ipsa impedit dolores quisquam officiis nemo architecto soluta
							debitis aliquid illum illo. A totam magni dicta adipisci
							architecto.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default About;
