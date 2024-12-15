import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { loginSuccess } from '../store/authSlice';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #ff3333;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: underline;
`;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const redirectTo = searchParams.get('redirect');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simuler une connexion réussie
    const user = {
      id: 1,
      email,
      firstName: name.split(' ')[0] || 'User',
      lastName: name.split(' ')[1] || '',
      address: ''
    };

    dispatch(loginSuccess(user));

    // Redirection après connexion
    if (redirectTo === 'checkout') {
      navigate('/checkout');
    } else {
      navigate('/profile');
    }
  };

  return (
    <LoginContainer>
      <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
      <Form onSubmit={handleSubmit}>
        {!isLogin && (
          <Input
            type="text"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">
          {isLogin ? 'Se connecter' : "S'inscrire"}
        </Button>
      </Form>
      <ToggleButton onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
      </ToggleButton>
    </LoginContainer>
  );
};

export default Login;
