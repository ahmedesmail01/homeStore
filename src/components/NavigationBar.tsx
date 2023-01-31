import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { motion } from "framer-motion";

//
const NavigationBar = () => {
	const { openCart, cartQuantity } = useShoppingCart();
	return (
		<Navbar sticky="top" className="shadow-sm bg-white">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to="/" as={NavLink}>
						<motion.p
							animate={{
								y: 0,
								opacity: 1,
							}}
							initial={{
								y: 10,
								opacity: 0,
							}}
							transition={{
								duration: 1.5,
								type: "spring",
								stiffness: 120,
							}}
						>
							Home
						</motion.p>
					</Nav.Link>
					<Nav.Link to="/store" as={NavLink}>
						<motion.p
							animate={{
								y: 0,
								opacity: 1,
							}}
							initial={{
								y: 10,
								opacity: 0,
							}}
							transition={{
								duration: 1.5,
								delay: 0.25,
								type: "spring",
								stiffness: 120,
							}}
						>
							Store
						</motion.p>
					</Nav.Link>
					<Nav.Link to="/about" as={NavLink}>
						<motion.p
							animate={{
								y: 0,
								opacity: 1,
							}}
							initial={{
								y: 10,
								opacity: 0,
							}}
							transition={{
								duration: 1.5,
								delay: 0.5,
								type: "spring",
								stiffness: 120,
							}}
						>
							About
						</motion.p>
					</Nav.Link>
				</Nav>
				{cartQuantity > 0 && (
					<motion.div
						initial={{ x: "100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 50 }}
					>
						<Button
							onClick={openCart}
							className="rounded-circle"
							variant="outline-primary"
							style={{ width: "3rem", height: "3rem", position: "relative" }}
						>
							<svg
								style={{ color: "blue" }}
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="bi bi-cart-check-fill"
								viewBox="0 0 16 16"
							>
								{" "}
								<path
									d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
									fill="blue"
								></path>{" "}
							</svg>

							<div
								className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
								style={{
									width: "1.1rem",
									height: "1.1rem",
									color: "white",
									position: "absolute",
									bottom: 0,
									right: 0,
									transform: "translate (25% , 25%)",
								}}
							>
								{cartQuantity}
							</div>
						</Button>
					</motion.div>
				)}
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
