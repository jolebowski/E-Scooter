import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCompare, clearCompare } from '../store/compareSlice';
import { addToCart } from '../store/cartSlice';

const CompareContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 1rem;
`;

const CompareTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const CompareHeader = styled.div`
  font-weight: bold;
  padding: 1rem;
  background: #f8f9fa;
`;

const CompareCell = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #ff3333;
  }
`;

const ClearButton = styled(ActionButton)`
  background: #666;
  
  &:hover {
    background: #555;
  }
`;

const Compare = () => {
  const dispatch = useDispatch();
  const compareItems = useSelector((state: RootState) => state.compare.items);

  const specifications = [
    'maxSpeed',
    'range',
    'weight',
    'maxLoad',
    'chargingTime',
    'motor'
  ];

  return (
    <CompareContainer>
      <h1>Comparaison des produits</h1>
      {compareItems.length === 0 ? (
        <p>Aucun produit à comparer</p>
      ) : (
        <>
          <ClearButton onClick={() => dispatch(clearCompare())}>
            Effacer la comparaison
          </ClearButton>
          
          <CompareTable>
            <CompareHeader>Produit</CompareHeader>
            {compareItems.map(item => (
              <CompareCell key={item.id}>
                <ProductImage src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price.toFixed(2)} €</p>
                <ActionButton onClick={() => dispatch(addToCart(item))}>
                  Ajouter au panier
                </ActionButton>
                <ActionButton onClick={() => dispatch(removeFromCompare(item.id))}>
                  Retirer
                </ActionButton>
              </CompareCell>
            ))}

            {specifications.map(spec => (
              <>
                <CompareHeader key={spec}>{spec}</CompareHeader>
                {compareItems.map(item => (
                  <CompareCell key={`${item.id}-${spec}`}>
                    {item.specifications[spec as keyof typeof item.specifications]}
                  </CompareCell>
                ))}
              </>
            ))}
          </CompareTable>
        </>
      )}
    </CompareContainer>
  );
};

export default Compare;
