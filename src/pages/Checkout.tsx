import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../store';
import { createOrder } from '../store/orderSlice';
import PaymentForm from '../components/Checkout/PaymentForm';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const OrderSummary = styled.div`
  margin-top: 2rem;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Step = styled.div<{ active: boolean }>`
  flex: 1;
  text-align: center;
  padding: 1rem;
  background: ${props => props.active ? '#ff4d4d' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : 'black'};
  border-radius: 4px;
  margin: 0 0.5rem;
`;

const Checkout = () => {
  const [step, setStep] = useState(1);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=checkout');
      return;
    }

    if (cartItems.length === 0) {
      navigate('/cart');
      return;
    }

    dispatch(createOrder({ items: cartItems, total }));
  }, [cartItems, dispatch, navigate, total, user]);

  const handlePaymentSuccess = () => {
    setStep(3);
  };

  return (
    <CheckoutContainer>
      <Steps>
        <Step active={step >= 1}>Panier</Step>
        <Step active={step >= 2}>Paiement</Step>
        <Step active={step >= 3}>Confirmation</Step>
      </Steps>

      <Section>
        <h2>Récapitulatif de la commande</h2>
        <OrderSummary>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.name} x {item.quantity} - {(item.price * item.quantity).toFixed(2)} €</p>
            </div>
          ))}
          <h3>Total: {total.toFixed(2)} €</h3>
        </OrderSummary>
      </Section>

      <Section>
        <h2>Paiement</h2>
        <PaymentForm onSuccess={handlePaymentSuccess} />
      </Section>
    </CheckoutContainer>
  );
};

export default Checkout;
