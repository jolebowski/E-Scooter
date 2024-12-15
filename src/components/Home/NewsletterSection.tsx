import { useState } from 'react'
import styled from 'styled-components'

const NewsletterContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://plus.unsplash.com/premium_photo-1681487591275-4c38e89b1d5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const NewsletterForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border: 2px solid #ff4d4d;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #ff3333;
    transform: scale(1.05);
  }
`

const NewsletterSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'inscription à la newsletter
    alert('Merci de votre inscription à notre newsletter !')
    setEmail('')
  }

  return (
    <NewsletterContainer>
      <SectionTitle>Restez informé de nos nouveautés</SectionTitle>
      <SectionSubtitle>
        Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
      </SectionSubtitle>
      <NewsletterForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">S'inscrire</Button>
      </NewsletterForm>
    </NewsletterContainer>
  )
}

export default NewsletterSection
