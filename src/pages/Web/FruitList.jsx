import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';

const FruitList = () => {
  return (

      <>
    <div className="dgcont pt-28 pl-10">
<div class="dcard">
    <img className="sizereduce " src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201605/lychee-story647_052016105516.jpg?VersionId=Fwg6P2f7ItdmDsF4KgBV7RqprkKKzUWG" alt="not"/>
    <p>Approx 500g-1 Pack</p>
    <h4>Litchi</h4>
    <h3>₹181</h3>
    
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://www.bigbasket.com/media/uploads/p/m/40008982_16-fresho-dragon-fruit.jpg?tr=w-1080,q=80"alt="not"/>
    <p>1 pc-(Approx. 300g- 400g)</p>
    <h4>Dragon Fruit</h4>
    <h3>₹91</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_640.jpg"alt="not"/>
    <p>1 kg</p>
    <h4>Sweet Potato</h4>
    <h3>₹94</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>

</div>
    <div className="dgcont pt-10 pl-10">
<div class="dcard">
    <img className="sizereduce" src="https://img.freepik.com/premium-photo/texture-kiwi-hd-8k-wallpaper-stock-photographic-image_853645-50418.jpg"alt="not"/>
    <p>3 pcs-Approx. 220g-300g</p>
    <h4>Zespri Kiwi</h4>
    <h3>₹248</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://png.pngtree.com/thumb_back/fh260/background/20210827/pngtree-grapes-green-grape-fruit-green-background-image_764524.jpg"alt="not"/>
    <p>500g</p>
    <h4>Grapes-green</h4>
    <h3>₹65.24</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlElHnY1MutLdfgBD44g7ZdKDctJNm7eD6Cw&s"alt="not"/>
    <p>1 kg</p>
    <h4>Rambutan</h4>
    <h3>₹384.25</h3>
    <input type="submit" value="Add to Cart" className="dogbtn" />
</div>
</div>
    
    </>
  );
};

export default FruitList;