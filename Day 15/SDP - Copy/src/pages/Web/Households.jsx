import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Carrot',
    description: 'Health--',
    price: "Rs.20",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40325617_1-tata-tea-gold-instant-liquid-tea-premix-kashmiri-kahwa.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Tomato',
    description: 'Freshly...',
    price: "Rs.30",
    image: 'https://www.bigbasket.com/media/uploads/p/m/1204491_1-taj-mahal-tea.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'Ladysfinger',
    description: 'Grown organically',
    price: "Rs.34",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40325616_1-tata-tea-gold-instant-liquid-tea-premix-lemon-honey.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Ginger',
    description: 'Underground nutrient',
    price: "Rs.90",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40314645_2-tetley-premium-black-leaf-tea-with-added-long-leaves.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Parwal',
    description: '...',
    price: "Rs.122",
    image: 'https://www.bigbasket.com/media/uploads/p/m/266596_7-3-roses-dust-tea.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40199390_2-tata-tea-premium-tea.jpg?tr=w-1920,q=80',
  },
  {
    id: 7,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/264437_2-tata-tea-kanan-devan-tea.jpg?tr=w-1920,q=80',
  },
  {
    id: 8,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000508_4-fresho-garlic-organically-grown.jpg?tr=w-1920,q=80',
  },
  

];

const Households= () => {
  return (
  
    <>
    <div className="dgcont pt-28 pl-10">
<div class="dcard">
    <img className="sizereduce " src="https://c1.wallpaperflare.com/preview/644/4/839/broom-sweep-brush-sweeping.jpg" alt="not"/>
    <p>2 setk</p>
    <h4>Broomstick</h4>
    <h3>₹181</h3>
    
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK3UPabk34FHoZD9MlR3ui1v9EXTKRqdWzQ&s"alt="not"/>
    <p>1 pcs</p>
    <h4>Lysol</h4>
    <h3>₹91</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9DOz82VF52Dy70yVda5EQIn3pYSXqeOpXA&s"alt="not"/>
    <p>2 pcs</p>
    <h4>Dettol</h4>
    <h3>₹194</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>

</div>
    <div className="dgcont pt-10 pl-10">
<div class="dcard">
    <img className="sizereduce" src="https://www.bigbasket.com/media/uploads/p/xxl/40263298_9-all-out-ultra-power-slider-liquid-vaporiser-refill-kills-dengue-malaria-mosquitoes.jpg"alt="not"/>
    <p>3pcs</p>
    <h4>All out</h4>
    <h3>₹248</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsMbiGdwcbY71b9AD4hpRdgH7GS1ZEqMenw&s"alt="not"/>
    <p>5pcs</p>
    <h4>Ariel</h4>
    <h3>₹65.24</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbliZcfNs1QuJn03KhbVpbfjRWl0DW0Pe_Gg&s"alt="not"/>
    <p>3pcs</p>
    <h4>Astropet boxes</h4>
    <h3>₹384.25</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
</div>
    
    </>
  );
};

export default Households;