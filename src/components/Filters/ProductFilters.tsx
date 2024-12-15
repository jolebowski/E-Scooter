import { useState } from 'react';
import styled from 'styled-components';
import { Filter } from '../../types';

const FiltersContainer = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const PriceRange = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? '#ffc107' : '#ddd'};
  cursor: pointer;
`;

interface ProductFiltersProps {
  onFilterChange: (filters: Filter) => void;
}

const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [filters, setFilters] = useState<Filter>({
    category: [],
    priceRange: [0, 2000],
    rating: 0,
    inStock: false
  });

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    
    const newFilters = { ...filters, category: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (min: number, max: number) => {
    const newFilters = { ...filters, priceRange: [min, max] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterTitle>Catégories</FilterTitle>
        <CheckboxGroup>
          {['Électrique', 'Urbaine', 'Sport', 'Enfant'].map(category => (
            <Checkbox key={category}>
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Prix</FilterTitle>
        <PriceRange>
          <PriceInput
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
            placeholder="Min"
          />
          <span>-</span>
          <PriceInput
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
            placeholder="Max"
          />
        </PriceRange>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Note minimum</FilterTitle>
        <RatingStars>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              filled={star <= filters.rating}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </Star>
          ))}
        </RatingStars>
      </FilterSection>

      <FilterSection>
        <Checkbox>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => {
              const newFilters = { ...filters, inStock: e.target.checked };
              setFilters(newFilters);
              onFilterChange(newFilters);
            }}
          />
          En stock uniquement
        </Checkbox>
      </FilterSection>
    </FiltersContainer>
  );
};

export default ProductFilters;
