//

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./actions";
import cartItems from "../cartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
	const amount = useSelector((state) => state.total);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	const handleAddToCart = (item) => {
		dispatch(addToCart(item));
	};

	const handleRemoveFromCart = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} onAddToCart={() => handleAddToCart(item)} onRemoveFromCart={() => handleRemoveFromCart(item.id)} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${amount}</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={handleClearCart}>
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
