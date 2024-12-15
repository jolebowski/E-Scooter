import styled from 'styled-components';
import { Product } from '../../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4d4d;
  margin: 0.5rem 0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ff3333;
  }
`;

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <p>{product.description}</p>
        <ProductPrice>{product.price.toFixed(2)} €</ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>
          Ajouter au panier
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
