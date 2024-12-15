import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 2rem;
  padding: 0 1rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 0.5rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff3333;
  }
`;

const TotalSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CheckoutButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #45a049;
  }
`;

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate('/login?redirect=checkout');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <h2>Votre panier est vide</h2>
        <p>Découvrez nos produits et ajoutez-les à votre panier</p>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <h1>Votre Panier</h1>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <ProductImage src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.price.toFixed(2)} €</p>
          </div>
          <QuantityInput
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({
              id: item.id,
              quantity: parseInt(e.target.value) || 1
            }))}
          />
          <p>{(item.price * item.quantity).toFixed(2)} €</p>
          <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
            Supprimer
          </RemoveButton>
        </CartItem>
      ))}
      
      <TotalSection>
        <h2>Total: {total.toFixed(2)} €</h2>
        <CheckoutButton onClick={handleCheckout}>
          {!user ? 'Se connecter pour commander' : 'Procéder au paiement'}
        </CheckoutButton>
      </TotalSection>
    </CartContainer>
  );
};

export default Cart;
