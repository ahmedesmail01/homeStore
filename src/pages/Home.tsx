import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./images/one.jpg"
					alt="First slide"
					style={{ height: "90vh", objectFit: "cover" }}
				/>
				<Carousel.Caption
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "100%",
						justifyContent: "flex-end",
					}}
				>
					<motion.h1
						style={{
							fontSize: "3rem",
							color: "#A084DC",
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
					>
						Welcome To{" "}
						<motion.p
							animate={{
								y: 0,
								opacity: 1,
							}}
							initial={{
								y: 20,
								opacity: 0,
							}}
							transition={{
								delay: 1.8,
								duration: 2,
								type: "spring",
								stiffness: 120,
							}}
							style={{
								fontSize: "3rem",
								color: "#A084DC",
								display: "inline-block",
							}}
						>
							Home
						</motion.p>{" "}
						<motion.p
							initial={{
								y: -20,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								delay: 1.8,
								duration: 2,
								type: "spring",
								stiffness: 120,
							}}
							style={{
								fontSize: "3rem",
								color: "#A084DC",
								display: "inline-block",
							}}
						>
							Store
						</motion.p>
					</motion.h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./images/two.jpg"
					alt="Second slide"
					style={{ height: "90vh", objectFit: "cover" }}
				/>

				<Carousel.Caption
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "100%",
						justifyContent: "flex-end",
					}}
				>
					<h1
						style={{
							fontSize: "3rem",
							color: "#A084DC",
						}}
					>
						Find Your Style
					</h1>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="./images/three.jpg"
					alt="Third slide"
					style={{ height: "90vh", objectFit: "cover" }}
				/>

				<Carousel.Caption
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "100%",
						justifyContent: "flex-end",
					}}
				>
					<h1
						style={{
							fontSize: "3rem",
							color: "#A084DC",
						}}
					>
						Find Your Pleasures
					</h1>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Home;
