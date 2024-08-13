import React from 'react';

const Favourites= () => {
  const cartItems = [
    {
      id: 1,
      name: 'Green Moong Dal',
      quantity: 1,
      price: 45,
      description: 'High-quality green moong dal, rich in protein and essential nutrients.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/10000440_17-bb-royal-moong-dal.jpg'
    },
    {
      id: 2,
      name: 'Toor Dal',
      quantity: 2,
      price: 55,
      description: 'Premium toor dal, perfect for making delicious dal tadka.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40159897_3-super-saver-toorarhar-dal-desi.jpg'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      quantity: 1,
      price: 120,
      description: 'Long grain basmati rice, ideal for biryani and pulao.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40072462_12-bb-royal-organic-basmati-rice.jpg'
    }
  ];

  return (
    <div className="pl-20 pt-5 flex flex-col gap-2">
      <h1 className="font-bold text-2xl mb-4">Your Favourites</h1>
      <div className="dgcont p-0">
<div class="dcard">
    <img className="sizereduce " src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201605/lychee-story647_052016105516.jpg?VersionId=Fwg6P2f7ItdmDsF4KgBV7RqprkKKzUWG" alt="not"/>
    <p>Approx 500g-1 Pack</p>
    <h4>Litchi</h4>
    <h3>₹181</h3>
    
    <input type="submit" value="Added" className="dogbtn" />
</div>
<div class="dcard">
    <img className="sizereduce " src="https://www.shutterstock.com/shutterstock/videos/1070216050/thumb/1.jpg?ip=x480" alt="not"/>
    <p>126 g-(18pcs)</p>
    <h4>KitKat</h4>
    <h3>₹111</h3>
    
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
      </div>
     
  );
}

export default Favourites;