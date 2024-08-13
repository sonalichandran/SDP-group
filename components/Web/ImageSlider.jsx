import React, { useState, useEffect } from 'react';

const slides = [
  // 'https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg',
  // 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlPjzRF-4PJcplaQ1xrBuAz1VOwh0ofHwnfVFdi0SZAYXHZ-iD3NKKTP99zEW1akP6vj6uqz3KrK7Z3tSZmLMQPHg50fWXz_c7zKrO2gO9czmUQRQQpgS9&usqp=CAE',
  // 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6DYjw3iqjtOhoGzUUHOD5bkh3NbJwQvqkvy1xqt7A-pcIO7CHbO1JnCwNLrpH4X4zxv6VqWc6LRIA18AuMvKBKE7GTmeIXw&usqp=CAE',
  // 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQW5EP-6WwY712Um5BasY7eA04giAdmC9YtngXdPkIsZohdhkGNqgyT1duse1KSjV9jszbbEVmtfyHsj8rdN3M4znaFX6eMEccTzsFQry9&usqp=CAE',
  // 'https://ik.imagekit.io/ka538n3cv/10000067_24-fresho-capsicum-green.webp?updatedAt=1721882522604',
  // 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTillbcJcSdLW71cqOMNTtPtMTrJ0NTLz3icpK8VZVLMxXhCM1wsj2ha5pzEWVVfoDNwFQT1u93oHe5TyYW0LQSYb0oGOhWzHtQQAxxHF02&usqp=CAE',
  // 'https://www.bigbasket.com/media/uploads/p/m/10001008_3-fresho-chicken-neck.jpg?tr=w-1920,q=80',
  // 'https://www.bigbasket.com/media/uploads/p/l/30009286_10-fresho-blueberry.jpg',
  // 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUt6uE-Fwde94pbDT2e3cHAriIdvC-r6XeL-ytdK9NZgKm73HyLNyVTl7QPsWW8eCkeQiTVMvI3148PjoBPFWtWwO3d8ZWYU_qmqHWUKU&usqp=CAE',
  // 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlH_RuP8L2OVaEvRUgyT6OITpfMUcnQslYwp_ri51UXdO4DCjuSv4w7L8pbxwsBuWwgYCwgxNleggT1sDUHgPjCjaLc2N9h4OTdauNjao&usqp=CAE',
  // 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwa0ZVizgdb26CGf6IMTk8jMESKu6BEujQxoJcDMg6ACyYlOqPbi3QsWqTphBhtCaBtolFBDCCXTT0sC5pHcllMwZMl_XJYJKzxd9lkqWz&usqp=CAE'
  'https://transvelo.github.io/freshcart/assets/images/slide-1.jpeg',
  'https://img.freepik.com/free-photo/colorful-veggies-frame-with-copy-space_23-2148290738.jpg?t=st=1723452846~exp=1723456446~hmac=893979aa9e08bf25565c3d29da5fbdf9eed5a13e10fdb9fd57e5ad5e93182e0d&w=996',
  'https://img.freepik.com/free-photo/flat-lay-vegetable-concept-arrangement_23-2148501528.jpg?t=st=1723452366~exp=1723455966~hmac=50814b6887bfd42d78244749da5ad28bfe5838f95f6d11fabc617e9008b550a8&w=996',
  'https://img.freepik.com/premium-photo/bowl-fruit-vegetables-with-word-fruit-top_1064589-166108.jpg?w=1060',
 
  'https://img.freepik.com/free-photo/flat-lay-blackboard-with-fruit-vegetables-reusable-bags_23-2148493508.jpg?t=st=1723452477~exp=1723456077~hmac=da8fe2bdaa68b3966ea43e5b06d85eac60e024ff654f1c19cad442fbe5be505d&w=996',
  'https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?t=st=1723452636~exp=1723456236~hmac=5e7b4471e9a2633c1322dbbd2ff04db07e2197dc36b533b83db088519eb3e60d&w=996',
  'https://img.freepik.com/free-photo/top-view-mix-vegetables-cutting-board-bowl-with-copy-space_23-2148369697.jpg?t=st=1723452714~exp=1723456314~hmac=8b8dde1491f27570c5e0f10178debae88d3f55857ba4c5b981ef543acd9ff7fa&w=996',
  
  
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionCount, setTransitionCount] = useState(0); 

  const goToNextSlide = () => {
    if (transitionCount >= 3) return; 

    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTransitionCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (transitionCount < 2) { 
      const timer = setTimeout(goToNextSlide, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [transitionCount]);

  return (
    <div className="w-full mx-auto overflow-hidden py-16 justify-center flex ">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-96"
          />
        ))}
      </div>
     
   
    </div>
  );
};

export default ImageSlider;
