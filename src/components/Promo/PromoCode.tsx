import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { applyPromoCode, removePromoCode } from '../../store/promoSlice';

const PromoContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const PromoForm = styled.form`
  display: flex;
  gap: 1rem;
`;

const PromoInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const PromoButton = styled.button`
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

const AppliedPromo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const PromoCode = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const appliedCode = useSelector((state: RootState) => state.promo.appliedCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(applyPromoCode(code.toUpperCase()));
    setCode('');
  };

  return (
    <PromoContainer>
      <h3>Code promo</h3>
      {appliedCode ? (
        <AppliedPromo>
          <div>
            <strong>{appliedCode.code}</strong> (-{appliedCode.discount}%)
          </div>
          <button onClick={() => dispatch(removePromoCode())}>Retirer</button>
        </AppliedPromo>
      ) : (
        <PromoForm onSubmit={handleSubmit}>
          <PromoInput
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Entrez votre code promo"
          />
          <PromoButton type="submit">Appliquer</PromoButton>
        </PromoForm>
      )}
    </PromoContainer>
  );
};

export default PromoCode;
