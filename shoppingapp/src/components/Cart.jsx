import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({ type: 'cart/removeItem', payload: id });
  };
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.title} - ${item.price}
          <button onClick={() =>  handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}