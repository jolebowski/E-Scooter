import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductFilters from '../components/Products/ProductFilters';
import SearchBar from '../components/Search/SearchBar';
import { Product, Filter } from '../types';
import { products as allProducts } from '../data/products';

const ProductsLayout = styled.div`
  max-width: 1200px;
  margin: 80px auto 2rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SearchSection = styled.div`
  margin-bottom: 2rem;
`;

const SortSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  grid-column: 1 / -1;
`;

const Products = () => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [sortBy, setSortBy] = useState('featured');
  const location = useLocation();

  useEffect(() => {
    // Récupérer la catégorie depuis l'URL si elle existe
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    
    if (category) {
      setProducts(allProducts.filter(product => product.category === category));
    } else {
      setProducts(allProducts);
    }
  }, [location]);

  const handleFilterChange = (filters: Filter) => {
    let filtered = [...allProducts];

    // Filtrage par catégorie
    if (filters.category.length > 0) {
      filtered = filtered.filter(product => 
        filters.category.includes(product.category)
      );
    }

    // Filtrage par prix
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Filtrage par note
    if (filters.rating > 0) {
      filtered = filtered.filter(product => 
        product.rating >= filters.rating
      );
    }

    // Filtrage par stock
    if (filters.inStock) {
      filtered = filtered.filter(product => product.stock > 0);
    }

    setProducts(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...products];

    switch (value) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted = [...allProducts];
    }

    setProducts(sorted);
  };

  return (
    <ProductsLayout>
      <aside>
        <ProductFilters onFilterChange={handleFilterChange} />
      </aside>
      
      <main>
        <SearchSection>
          <SearchBar onSearch={(query) => {
            const filtered = allProducts.filter(product => 
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filtered);
          }} />
        </SearchSection>

        <SortSelect value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="featured">Les plus populaires</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="rating">Meilleures notes</option>
        </SortSelect>

        <ProductsGrid>
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <NoResults>
              <h3>Aucun produit ne correspond à vos critères</h3>
              <p>Essayez de modifier vos filtres</p>
            </NoResults>
          )}
        </ProductsGrid>
      </main>
    </ProductsLayout>
  );
};

export default Products;
