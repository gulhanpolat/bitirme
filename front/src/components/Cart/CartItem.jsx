import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
const CartItem = ({ cartItem }) => {
  const { deleteFromCart } = useContext(CartContext);
  const quantity = typeof cartItem.quantity === 'number' ? cartItem.quantity : 1;
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => deleteFromCart(cartItem.id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.toFixed(2)}</td>
      <td className="product-quantity">{quantity}</td>
      <td className="product-subtotal">
        ${(cartItem.price * quantity).toFixed(2)}
      </td>
    </tr>
  );
};
export default CartItem;
CartItem.propTypes = {
  cartItem: PropTypes.object,
};