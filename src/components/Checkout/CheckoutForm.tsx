import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #45a049;
  }
`;

const OrderSummary = styled.div`
  margin-top: 2rem;
`;

const CheckoutForm = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de paiement
    alert('Commande validée ! Merci de votre achat.');
  };

  return (
    <CheckoutContainer>
      <h1>Finaliser la commande</h1>
      
      <Form onSubmit={handleSubmit}>
        <Section>
          <h2>Adresse de livraison</h2>
          <Input type="text" placeholder="Nom complet" required />
          <Input type="text" placeholder="Adresse" required />
          <Input type="text" placeholder="Ville" required />
          <Input type="text" placeholder="Code postal" required />
        </Section>

        <Section>
          <h2>Paiement</h2>
          <Input type="text" placeholder="Numéro de carte" required />
          <CardGrid>
            <Input type="text" placeholder="Titulaire de la carte" required />
            <Input type="text" placeholder="MM/AA" required />
            <Input type="text" placeholder="CVC" required />
          </CardGrid>
        </Section>

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

        <SubmitButton type="submit">Confirmer la commande</SubmitButton>
      </Form>
    </CheckoutContainer>
  );
};

export default CheckoutForm;
