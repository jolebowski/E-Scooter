import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PromotionContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
`

const PromotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PromotionCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`

const PromotionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PromotionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 80%;
`

const PromotionButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #ff4d4d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #ff3333;
  }
`

const PromotionSection = () => {
  return (
    <PromotionContainer>
      <SectionTitle>Promotions Exceptionnelles</SectionTitle>
      <SectionSubtitle>Ne manquez pas nos offres exclusives sur les trottinettes !</SectionSubtitle>
      <PromotionGrid>
        <PromotionCard>
          <PromotionImage
            src="https://images.unsplash.com/photo-1512106374988-c95f566d39ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Promotion été"
          />
          <PromotionContent>
            <h3>Offre Spéciale Été</h3>
            <p>Jusqu'à -30% sur une sélection de trottinettes</p>
            <PromotionButton to="/products">En profiter</PromotionButton>
          </PromotionContent>
        </PromotionCard>
        <PromotionCard>
          <PromotionImage
            src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nouveautés"
          />
          <PromotionContent>
            <h3>Nouveautés 2023</h3>
            <p>Découvrez notre nouvelle gamme</p>
            <PromotionButton to="/products">Découvrir</PromotionButton>
          </PromotionContent>
        </PromotionCard>
      </PromotionGrid>
    </PromotionContainer>
  )
}

export default PromotionSection
