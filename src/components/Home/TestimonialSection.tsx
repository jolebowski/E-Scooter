import styled from 'styled-components';
import { reviews } from '../../data/reviews';

const TestimonialContainer = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff4d4d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Rating = styled.div`
  color: #ffc107;
  margin-bottom: 0.5rem;
`;

const TestimonialSection = () => {
  const featuredReviews = reviews.slice(0, 3);

  return (
    <TestimonialContainer>
      <SectionTitle>Ce que disent nos clients</SectionTitle>
      <TestimonialGrid>
        {featuredReviews.map(review => (
          <TestimonialCard key={review.id}>
            <UserInfo>
              <UserAvatar>{review.userName[0]}</UserAvatar>
              <div>
                <h4>{review.userName}</h4>
                <Rating>{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</Rating>
              </div>
            </UserInfo>
            <p>{review.comment}</p>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialContainer>
  );
};

export default TestimonialSection;
