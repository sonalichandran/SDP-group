import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';



const products = [
    {
      id: 1,
      productName: 'Litchi(Approx 500g-1 Pack)',
      productcategory: 'Juicy and aromatic litchis.',
      productcost: 180,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201605/lychee-story647_052016105516.jpg?VersionId=Fwg6P2f7ItdmDsF4KgBV7RqprkKKzUWG' 
    },
    {
      id: 2,
      productName: 'Dragon Fruit(1 pc-(Approx. 300g- 400g))',
      productcategory: 'vibrant dragon fruits.',
      productcost: 200,
      image: 'https://www.bigbasket.com/media/uploads/p/m/40008982_16-fresho-dragon-fruit.jpg?tr=w-1080,q=80' 
    },
    {
      id: 3,
      productName: 'Sweet Potato(1 kg)',
      productcategory: 'Rich and hearty sweet potatoes.',
      productcost: 94,
      image: 'https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_640.jpg' 
    }
    // {
    //   id: 4,
    //   productName: 'Zespri Kiwi',
    //   productcategory: 'Refreshing Zespri kiwis.',
    //   productcost: 248,
    //   image: 'https://img.freepik.com/premium-photo/texture-kiwi-hd-8k-wallpaper-stock-photographic-image_853645-50418.jpg' 
    // },
    // {
    //   id: 5,
    //   productName: 'Grapes-green(500g)',
    //   productcategory: 'Juicy green grapes.',
    //   productcost: 65.24,
    //   image: 'https://png.pngtree.com/thumb_back/fh260/background/20210827/pngtree-grapes-green-grape-fruit-green-background-image_764524.jpg' 
    // },
    // {
    //   id: 6,
    //   productName: 'Rambutan',
    //   productcategory: 'Sweet and vibrant rambutans',
    //   productcost: 384.25,
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlElHnY1MutLdfgBD44g7ZdKDctJNm7eD6Cw&s' 
    // },
    // {
    //   id: 7,
    //   productName: 'Rambutan',
    //   productcategory: 'Sweet and vibrant rambutans',
    //   productcost: 384.25,
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlElHnY1MutLdfgBD44g7ZdKDctJNm7eD6Cw&s' 
    // },
    // {
    //   id: 8,
    //   productName: 'Rambutan',
    //   productcategory: 'Sweet and vibrant rambutans',
    //   productcost: 384.25,
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlElHnY1MutLdfgBD44g7ZdKDctJNm7eD6Cw&s' 
    // }
  ];
  
  
const FruitList = () => {
    
  return (
    <>
<div className='dgcont pt-20 pl-10'>
     <div >
     <div  className='flex gap-4'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>

    </> 
  );
};

export default FruitList;
