import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui_slice";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const quantity = useSelector((state) => state.cart.totalQuantity);
	const { toggle } = uiActions;
	console.log(toggle);

	return (
		<button className={classes.button} onClick={() => dispatch(toggle())}>
			<span>My Cart</span>
			<span className={classes.badge}>{quantity}</span>
		</button>
	);
};

export default CartButton;
