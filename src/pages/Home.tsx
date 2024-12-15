import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewsletterSection from '../components/Home/NewsletterSection'
import PromotionSection from '../components/Home/PromotionSection'
import TestimonialSection from '../components/Home/TestimonialSection'
import { products } from '../data/products'

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1593003706788-793bac85ff36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-top: 60px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CTAButton = styled(Link)`
  background-color: #ff4d4d;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, background-color 0.2s;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    background-color: #e63939;
  }
`

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;
`

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #ff4d4d;
  font-weight: bold;
`

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const CategorySection = styled.section`
  padding: 4rem 2rem;
  background: white;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const CategoryCard = styled(Link)`
  position: relative;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CategoryTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  font-size: 1.5rem;
`

const Home = () => {
  const featuredProducts = products.slice(0, 3)

  return (
    <main>
      <HeroSection>
        <HeroContent>
          <Title>Découvrez notre gamme de trottinettes électriques</Title>
          <Subtitle>Mobilité urbaine innovante, écologique et stylée</Subtitle>
          <CTAButton to="/products">Voir nos produits</CTAButton>
        </HeroContent>
      </HeroSection>

      <PromotionSection />

      <Section>
        <SectionTitle>Nos Meilleures Ventes</SectionTitle>
        <SectionSubtitle>
          Découvrez nos produits les plus populaires, choisis par nos clients !
        </SectionSubtitle>
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={`/product/${product.id}`}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <ProductPrice>{product.price.toFixed(2)} €</ProductPrice>
                </ProductInfo>
              </Link>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <FeaturesSection>
        <SectionTitle>Pourquoi nous choisir ?</SectionTitle>
        <SectionSubtitle>Découvrez les avantages de nos produits et services.</SectionSubtitle>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Livraison Gratuite</h3>
            <p>Sur toutes vos commandes en France métropolitaine</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Garantie 2 Ans</h3>
            <p>Tous nos produits sont garantis pendant 2 ans</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Service Client 24/7</h3>
            <p>Une équipe à votre écoute pour vous accompagner</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <CategorySection>
        <SectionTitle>Nos Catégories</SectionTitle>
        <SectionSubtitle>
          Explorez notre large gamme de produits adaptés à vos besoins.
        </SectionSubtitle>
        <CategoryGrid>
          <CategoryCard to="/products?category=Premium">
            <CategoryImage
              src="https://plus.unsplash.com/premium_photo-1669077046819-49779c064034?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premium"
            />
            <CategoryTitle>Premium</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/products?category=Urbaine">
            <CategoryImage
              src="https://images.unsplash.com/photo-1487452066049-a710f7296400?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Urbaine"
            />
            <CategoryTitle>Urbaine</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/products?category=Sport">
            <CategoryImage
              src="https://images.unsplash.com/photo-1602790227331-955c06a7c44b?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sport"
            />
            <CategoryTitle>Sport</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/products?category=Tout-terrain">
            <CategoryImage
              src="https://images.unsplash.com/photo-1517768692594-b4295586b7d6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tout-terrain"
            />
            <CategoryTitle>Tout-terrain</CategoryTitle>
          </CategoryCard>
        </CategoryGrid>
      </CategorySection>

      <TestimonialSection />
      <NewsletterSection />
    </main>
  )
}

export default Home
