import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToCompare, removeFromCompare } from '../../store/compareSlice';
import { Product } from '../../types';

const Button = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#ff4d4d' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.active ? '#ff3333' : '#e0e0e0'};
  }
`;

interface CompareButtonProps {
  product: Product;
}

const CompareButton = ({ product }: CompareButtonProps) => {
  const dispatch = useDispatch();
  const compareItems = useSelector((state: RootState) => state.compare.items);
  const isInCompare = compareItems.some(item => item.id === product.id);

  const toggleCompare = () => {
    if (isInCompare) {
      dispatch(removeFromCompare(product.id));
    } else {
      dispatch(addToCompare(product));
    }
  };

  return (
    <Button active={isInCompare} onClick={toggleCompare}>
      {isInCompare ? 'Retirer' : 'Comparer'}
    </Button>
  );
};

export default CompareButton;
