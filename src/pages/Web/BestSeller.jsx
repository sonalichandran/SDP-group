import React, { useEffect, useRef } from 'react';
import '../../assets/css/BestSeller.css';
import Navbar from './Productlist/Navbar';
import Exoticfruits from './Productlist/Exoticfruits';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="flex-none w-80 p-4 ">
      <div className="card text-center product p-4 pt-5 border-0 h-96 rounded-0 bg-white shadow-md flex flex-col justify-between">
        <div className="flex justify-center items-center h-60 w-full overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="card-body p-4 py-0">
          <h3 className="text-l font-bold my-2">{title}</h3>
          <p className="text-gray-700 my-2">Rs. {price}</p>
        </div>
        <button className="btn w-full px-4 py-2 text-center mx-auto bg-cyan-900 text-white rounded-md hover:bg-cyan-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const BestSeller = () => {
  const products = [
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F5%2F159449011-A_1_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Pringles ', price: '115' },
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fl%2Fi%2Flipton-honey-lemon-green-tea-50-pcs-product-images-o492390943-p590942544-0-202203252313_1_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Lipton Honey Lemon Green Tea', price: '360' },
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F3%2F0%2F30002281_5-fresho-tiger-prawns-large-unpeeled-40-50-pcs_2_11.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Indian Prawns Count Whole 70 Plus 1 KG', price: '500' },
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fa%2Fbase-camp-cologne_image-1_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Ustraa Cologne Base Camp Perfume(100g)', price: '674'},
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fu%2Fmusk-melon-1-pc-approx-600-g-900-g-product-images-o590001887-p591217775-0-202204111800_1_2_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Muskmelon Thai', price: '62' },
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F8%2F1%2F81fvalXHGCL__SL1500__1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=640&q=100', title: 'Karachi Bakery Besan Ladoo 200G', price: '100' },
    { image: 'https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2F%2Fwysiwyg%2Fjune-theme%2Fgroceryandkitchen3X%2FFruits_Vegetables.png&w=1920&q=75', title: 'Fruits & Veggies combo', price: '' },
    // { image: 'https://via.placeholder.com/150', title: 'Product 8', price: '89.99' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 1; // Adjust this value to control the scroll speed

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // Adjust this value to control the scroll interval (smaller value = faster scroll)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      <div ref={scrollRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar ">
        <div className="flex flex-nowrap space-x-4 ">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image }
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <hr/>
      
    <div className="flex justify-center items-center mx-2 mt-6 mb-4">
  <div className="flex justify-between w-full max-w-[1200px] space-x-4">
    <img
      src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg"
      alt="Image 1"
      className="w-1/3 rounded-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src="https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2F%2Fwysiwyg%2Fjune-theme%2Fmobile%2FOPSfree_3x_1_.png&w=1920&q=100"
      alt="Image 2"
      className="w-1/3 rounded-lg transition-transform duration-300 hover:scale-105"
    />
    <img
      src="https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2F%2Fwysiwyg%2Fjune-theme%2Fmobile%2FSugar_3x.png&w=1920&q=100"
      alt="Image 3"
      className="w-1/3 rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>

    <hr/>
    {/* <div className='flex'>
      <Navbar/>
      <Exoticfruits/>
    </div> */}
    </div>
  );
};

export default BestSeller;
