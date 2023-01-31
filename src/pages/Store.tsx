import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import StoreItems from "../data/items.json";
import { motion } from "framer-motion";

const Store = () => {
	return (
		<Container className="mb-4">
			<motion.h1
				initial={{
					y: -20,
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
				className="my-4 text-center"
			>
				Store
			</motion.h1>
			<Row md={2} xs={1} lg={3}>
				{StoreItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Store;
