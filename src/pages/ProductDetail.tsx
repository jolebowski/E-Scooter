import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { products } from '../data/products'
import { addToCart } from '../store/cartSlice'
import { Review } from '../types'

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 1rem;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ImageGallery = styled.div`
  position: relative;
`

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`

const Thumbnails = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const Thumbnail = styled.img<{ active: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.active ? '#ff4d4d' : 'transparent')};
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff4d4d;
`

const AddToCartButton = styled.button`
  padding: 1rem 2rem;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ff3333;
  }
`

const Specifications = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`

const SpecItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
`

const Reviews = styled.div`
  margin-top: 3rem;
`

const ReviewCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const Rating = styled.div`
  color: #ffc107;
  margin-bottom: 0.5rem;
`

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find((product) => product.id === Number(id))

  if (!product) {
    return <div>Produit non trouvé</div>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <ProductContainer>
      <ProductGrid>
        <ImageGallery>
          <MainImage src={product.images[selectedImage]} alt={product.name} />
          <Thumbnails>
            {product.images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`${product.name} - vue ${index + 1}`}
                active={index === selectedImage}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Thumbnails>
        </ImageGallery>

        <ProductInfo>
          <h1>{product.name}</h1>
          <Price>{product.price.toFixed(2)} €</Price>
          <p>{product.description}</p>

          <AddToCartButton onClick={handleAddToCart}>Ajouter au panier</AddToCartButton>

          <Specifications>
            <SpecItem>
              <strong>Vitesse max:</strong> {product.specifications.maxSpeed}
            </SpecItem>
            <SpecItem>
              <strong>Autonomie:</strong> {product.specifications.range}
            </SpecItem>
            <SpecItem>
              <strong>Poids:</strong> {product.specifications.weight}
            </SpecItem>
            <SpecItem>
              <strong>Charge max:</strong> {product.specifications.maxLoad}
            </SpecItem>
            <SpecItem>
              <strong>Temps de charge:</strong> {product.specifications.chargingTime}
            </SpecItem>
            <SpecItem>
              <strong>Moteur:</strong> {product.specifications.motor}
            </SpecItem>
          </Specifications>
        </ProductInfo>
      </ProductGrid>

      <Reviews>
        <h2>Avis clients</h2>
        {product.reviews.map((review: Review) => (
          <ReviewCard key={review.id}>
            <Rating>
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </Rating>
            <strong>{review.userName}</strong>
            <p>{review.comment}</p>
            <small>Le {new Date(review.date).toLocaleDateString()}</small>
          </ReviewCard>
        ))}
      </Reviews>
    </ProductContainer>
  )
}

export default ProductDetail
