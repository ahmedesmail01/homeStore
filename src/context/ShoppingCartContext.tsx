import React, { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

//
type ShoppingCartProviderProps = {
	children: ReactNode;
};

type ShoppingCartContextTypes = {
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseItemQuantity: (id: number) => void;
	decreaseItemQuantity: (id: number) => void;
	removeItem: (id: number) => void;
	cartQuantity: number;
	cartItems: cartItem[];
};

type cartItem = {
	id: number;
	quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextTypes);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({
	children,
}: ShoppingCartProviderProps) => {
	const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
		"shopping cart",
		[]
	);
	const [isOpen, setIsOpen] = useState(false);
	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);
	//
	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}
	//
	function increaseItemQuantity(id: number) {
		return setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id) == null) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	//
	function decreaseItemQuantity(id: number) {
		return setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	//
	function removeItem(id: number) {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				getItemQuantity,
				increaseItemQuantity,
				decreaseItemQuantity,
				removeItem,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}
		>
			{children}
			<ShoppingCart isOpen={isOpen} />
		</ShoppingCartContext.Provider>
	);
};
