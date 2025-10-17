import React from 'react';


interface CategoryCardProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl }) => {
  
  return (
    <div className="category-card">
      <img src={imageUrl} alt={name} className="category-image" />
      <div className="category-name-box">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;