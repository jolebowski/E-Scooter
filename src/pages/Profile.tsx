import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../store';
import { updateProfile, logout } from '../store/authSlice';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 2rem;
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
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
  transition: background 0.2s;

  &:hover {
    background: #ff3333;
  }
`;

const LogoutButton = styled(Button)`
  background: #666;
  &:hover {
    background: #555;
  }
`;

const OrderHistory = styled.div`
  margin-top: 2rem;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: Number(user?.id) || 0,
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    address: user?.address || ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const mockOrders = [
    {
      id: 1,
      date: '2023-06-20',
      total: 599.99,
      status: 'Livré'
    },
    {
      id: 2,
      date: '2023-06-15',
      total: 799.99,
      status: 'En cours'
    }
  ];

  return (
    <ProfileContainer>
      <h1>Mon Profil</h1>
      
      <Section>
        <h2>Informations personnelles</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Nom"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Adresse"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
          <Button type="submit">Mettre à jour</Button>
        </Form>
      </Section>

      <Section>
        <h2>Historique des commandes</h2>
        <OrderHistory>
          {mockOrders.map(order => (
            <OrderCard key={order.id}>
              <p>Commande #{order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: {order.total.toFixed(2)} €</p>
              <p>Statut: {order.status}</p>
            </OrderCard>
          ))}
        </OrderHistory>
      </Section>

      <LogoutButton onClick={handleLogout}>Se déconnecter</LogoutButton>
    </ProfileContainer>
  );
};

export default Profile;
