import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Fresh Apple',
    description: 'Crisp and delicious apples.',
    price: "Rs.260",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40134281_18-fresho-baby-apple-shimla.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Fresh Banana',
    description: 'Sweet and ripe bananas.',
    price: "Rs.200",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000582_12-fresho-banana-red.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'kiwi',
    description: 'Kiwi-Green',
    price: "Rs.125",
    image: 'https://www.bigbasket.com/media/uploads/p/m/20000911_35-fresho-kiwi-green.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Orange',
    description: 'Kinow organically grown',
    price: "Rs.250",
    image: 'https://www.bigbasket.com/media/uploads/p/m/20000909_18-fresho-orange-imported.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Jamun',
    description: '',
    price: "Rs.260",
    image: 'https://www.bigbasket.com/media/uploads/p/m/30000990_9-fresho-jamun.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Dragon fruit',
    description: 'Red-flush',
    price: "Rs.74",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40113536_5-fresho-dragon-fruit-red-flesh.jpg?tr=w-1920,q=80',
  },
  

];

const FruitList = () => {
  return (
    <div className="container mx-auto pt-48 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FruitList;
