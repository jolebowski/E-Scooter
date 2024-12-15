import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; // Masquer les liens de navigation par défaut sur mobile
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; // Afficher le menu hamburger sur mobile
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px; // Positionner le menu sous l'en-tête
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Afficher ou masquer le menu
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">E-Scooter</Logo>
        <NavLinks>
          <Link to="/products">Trottinettes</Link>
          <Link to="/cart">Panier ({cartItems.length})</Link>
          {user ? (
            <Link to="/profile">Mon Compte</Link>
          ) : (
            <Link to="/login">Connexion</Link>
          )}
        </NavLinks>
        <Hamburger onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
      </Nav>
      <MobileNav isOpen={isOpen}>
        <Link to="/products" onClick={toggleMenu}>Trottinettes</Link>
        <Link to="/cart" onClick={toggleMenu}>Panier ({cartItems.length})</Link>
        {user ? (
          <Link to="/profile" onClick={toggleMenu}>Mon Compte</Link>
        ) : (
          <Link to="/login" onClick={toggleMenu}>Connexion</Link>
        )}
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
