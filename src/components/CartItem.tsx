import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";
import { motion } from "framer-motion";

type cartItemProps = {
	id: number;
	quantity: number;
};

const CartItem = ({ id, quantity }: cartItemProps) => {
	const { removeItem } = useShoppingCart();
	const item = storeItems.find((i) => i.id === id);
	if (item == null) return null;
	return (
		<motion.div
			initial={{
				x: "100vw",
			}}
			animate={{
				x: 0,
			}}
			transition={{
				delay: 0.5,
				duration: 0.2,
				type: "spring",
				stiffness: 25,
			}}
		>
			<Stack
				direction="horizontal"
				gap={3}
				className="d-flex align-items-center"
			>
				<img
					src={item.imgURL}
					alt="product"
					style={{ width: "125px", height: "75px", objectFit: "cover" }}
				/>
				<div className="me-auto">
					<div>
						{item.name}{" "}
						{quantity > 1 && (
							<span className="text-muted" style={{ fontSize: "0.8rem" }}>
								x{quantity}
							</span>
						)}
					</div>
					<div className="text-muted" style={{ fontSize: "0.75rem" }}>
						{FormatCurrency(item.price)}
					</div>
				</div>
				<div>{FormatCurrency(item.price * quantity)}</div>
				<Button className="btn-danger" onClick={() => removeItem(item.id)}>
					&times;
				</Button>
			</Stack>
		</motion.div>
	);
};

export default CartItem;
