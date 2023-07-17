import React, { useEffect, useState } from "react";

import './../styles/App.css';

const App = () => {
  const [imgNo, setImgNo] = useState(0);

  let imgArr = [
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
  ];

  useEffect(() => {
    let intervalId = setInterval(() => {
        setImgNo(prev => prev+1);
    }, 5000)

    return () => {
        clearInterval(intervalId);
    }
  }, [])

  if(imgNo > 2){
    setImgNo(0);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <img src={imgArr[imgNo]}/>
    </div>
  )
}

export default App
