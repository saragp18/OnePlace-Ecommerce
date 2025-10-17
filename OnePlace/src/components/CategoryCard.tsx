
import React, { type FC } from 'react';

interface CategoryCardProps {
    id: string;
  name: string;
  imageUrl: string;
  size?: 'small' | 'large';
}

const CategoryCard: FC<CategoryCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="relative overflow-hidden group">
      
      <div className="w-full aspect-square"> 
        <img
          src={imageUrl}
          alt={name}
       
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute bottom-3 left-3 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;

