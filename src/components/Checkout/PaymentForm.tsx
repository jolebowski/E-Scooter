import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { confirmOrder } from '../../store/orderSlice';
import { clearCart } from '../../store/cartSlice';

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
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

const Button = styled.button`
  padding: 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #f44336;
  margin-top: 0.5rem;
`;

interface PaymentFormProps {
  onSuccess: () => void;
}

const PaymentForm = ({ onSuccess }: PaymentFormProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentOrder = useSelector((state: RootState) => state.order.currentOrder);

  const validateCard = () => {
    // Simulation de validation de carte
    if (cardNumber.length !== 16) {
      return 'Numéro de carte invalide';
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      return 'Date d\'expiration invalide (MM/YY)';
    }
    if (cvv.length !== 3) {
      return 'CVV invalide';
    }
    if (cardHolder.length < 3) {
      return 'Nom du titulaire invalide';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateCard();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    // Simulation du processus de paiement
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      dispatch(confirmOrder());
      dispatch(clearCart());
      onSuccess();
      navigate('/profile');
    } catch (err) {
      setError('Erreur lors du paiement. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (!currentOrder) {
    return null;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Numéro de carte"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
        required
      />
      <Input
        type="text"
        placeholder="Nom du titulaire"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
        required
      />
      <CardGrid>
        <Input
          type="text"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
              value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            setExpiryDate(value);
          }}
          maxLength={5}
          required
        />
        <Input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
          required
        />
      </CardGrid>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Traitement en cours...' : `Payer ${currentOrder.total.toFixed(2)} €`}
      </Button>
    </Form>
  );
};

export default PaymentForm;
