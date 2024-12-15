import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';
import { Product } from '../../types';

const HeartButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.active ? '#ff4d4d' : '#666'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

interface WishlistButtonProps {
  product: Product;
}

const WishlistButton = ({ product }: WishlistButtonProps) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <HeartButton active={isInWishlist} onClick={toggleWishlist}>
      {isInWishlist ? '♥' : '♡'}
    </HeartButton>
  );
};

export default WishlistButton;
