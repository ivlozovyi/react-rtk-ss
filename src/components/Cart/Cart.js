import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const isVisible = useSelector((state) => state.ui.cartIsVisible);
	const items = useSelector((state) => state.cart.items);

	items.map((item) => console.log(item));
	return (
		<div style={!isVisible ? { display: "none" } : { display: "block" }}>
			<Card className={classes.cart}>
				<h2>Your Shopping Cart</h2>
				<ul>
					{items.map((item) => (
						<CartItem
							item={{
								id: item.id,
								title: item.title,
								quantity: item.quantity,
								total: item.totalPrice,
								price: item.price,
							}}
							key={item.id}
						/>
					))}
				</ul>
			</Card>
		</div>
	);
};

export default Cart;
