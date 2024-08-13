import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Carrot',
    description: 'Health--',
    price: "Rs.20",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40022639_6-fresho-cucumber-organically-grown.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Tomato',
    description: 'Freshly...',
    price: "Rs.30",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000279_11-fresho-knol-khol.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'Ladysfinger',
    description: 'Grown organically',
    price: "Rs.34",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Ginger',
    description: 'Underground nutrient',
    price: "Rs.90",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000510_4-fresho-ginger-organically-grown.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Parwal',
    description: '...',
    price: "Rs.122",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000365_12-fresho-parwal.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000508_4-fresho-garlic-organically-grown.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000508_4-fresho-garlic-organically-grown.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000508_4-fresho-garlic-organically-grown.jpg?tr=w-1920,q=80',
  },
  

];

const VegetableList = () => {
  return (
   
    <>
    <div className="dgcont pt-28 pl-10">
<div class="dcard">
    <img className="sizereduce " src="https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.webp?b=1&s=170667a&w=0&k=20&c=tlOo0x-fKU2H1tz58_11VC2tiZwlDYf-icMR5dZviDU=" alt="not"/>
    <p>Approx 500g-1 Pack</p>
    <h4>Carrot</h4>
    <h3>₹181</h3>
    
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5OpcSr129om9t6RbZtcdD_rhlKdxF50vug&s"alt="not"/>
    <p>1 pc-(Approx. 300g- 400g)</p>
    <h4>Onion</h4>
    <h3>₹91</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VY-wu7nrz_fQVCZtuLi4-k1BIhG4zO6nCA&s"alt="not"/>
    <p>1 kg</p>
    <h4>Potato</h4>
    <h3>₹94</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>

</div>
    <div className="dgcont pt-10 pl-10">
<div class="dcard">
    <img className="sizereduce" src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=pexels-pixabay-533280.jpg&fm=jpg"alt="not"/>
    <p>3 pcs-Approx. 220g-300g</p>
    <h4>Tomato</h4>
    <h3>₹248</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://media.istockphoto.com/id/480931380/photo/bell-pepper.webp?b=1&s=170667a&w=0&k=20&c=mxUBleytL6RYMAb8-RLmWV0HkJDpe1cBWxQn5xde6wA="alt="not"/>
    <p>500g</p>
    <h4>Capsicum</h4>
    <h3>₹65.24</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://t3.ftcdn.net/jpg/06/19/03/06/360_F_619030676_i9qhkte7Z9G9BFm1LG7WGLwLK6Z9tzBu.jpg"alt="not"/>
    <p>1 kg</p>
    <h4>Beetroot</h4>
    <h3>₹384.25</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
</div>
    
    </>
  );
};

export default VegetableList;