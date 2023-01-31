import React from "react";
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "../utilities/FormatCurrency";
import { motion } from "framer-motion";

type StoreItemsTypes = {
	id: number;
	name: string;
	price: number;
	imgURL: string;
};

const StoreItem = ({ id, name, price, imgURL }: StoreItemsTypes) => {
	const {
		getItemQuantity,
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItem,
	} = useShoppingCart();
	const quantity = getItemQuantity(id);

	return (
		<>
			<motion.div
				initial={{
					y: 20,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 2,
					type: "spring",
					stiffness: 120,
				}}
			>
				<Card className="mb-4">
					<Card.Img
						variant="top"
						src={imgURL}
						height="200px"
						style={{ objectFit: "cover" }}
					/>
					<Card.Body className="d-flex flex-column">
						<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
							<span className="fs-3">{name}</span>
							<span className="text-muted ms-2">{FormatCurrency(price)}</span>
						</Card.Title>
						<div className="mt-auto">
							{quantity === 0 ? (
								<Button
									className="w-100 "
									onClick={() => increaseItemQuantity(id)}
								>
									Add To Cart
								</Button>
							) : (
								<div
									className="d-flex align-items-center flex-column"
									style={{ gap: "0.5rem" }}
								>
									<div
										className="d-flex justify-content-center align-items-center"
										style={{ gap: "0.5rem" }}
									>
										<Button onClick={() => decreaseItemQuantity(id)}>-</Button>
										<div>
											<span>{quantity}</span> in Cart
										</div>
										<Button onClick={() => increaseItemQuantity(id)}>+</Button>
									</div>
									<Button variant="danger" onClick={() => removeItem(id)}>
										Remove
									</Button>
								</div>
							)}
						</div>
					</Card.Body>
				</Card>
			</motion.div>
		</>
	);
};

export default StoreItem;
