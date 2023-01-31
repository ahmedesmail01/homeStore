import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "../utilities/FormatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
import { motion } from "framer-motion";

type ShoppingCartProps = {
	isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
	const { closeCart, cartItems } = useShoppingCart();

	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
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
						className="ms-auto fw-bold fs-5"
					>
						Total:{" "}
						{FormatCurrency(
							cartItems.reduce((total, cartItem) => {
								const item = storeItems.find((i) => i.id === cartItem.id);
								return total + (item?.price || 0) * cartItem.quantity;
							}, 0)
						)}
					</motion.div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default ShoppingCart;
