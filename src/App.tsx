import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyles } from './styles/GlobalStyles';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Compare from './pages/Compare';
import { useScrollToTop } from './hooks/useScrollToTop';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <GlobalStyles />
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
