import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Images from './Images';
import landingBg1 from '../assets/landingBg1.png';

function MainVisual() {
  const images = [
    Images.landingBg1,
    Images.landingBg2,
    Images.landingBg3,
    Images.landingBg4,
    Images.landingBg5,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const leftArrowHandler = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  const rightArrowHandler = () => {
    setCurrentImage((currentImage + 1 + images.length) % images.length);
  }

  return (
    <>
      <div className='h-800px bg-cover flex' style={{ backgroundImage: `url(${images[currentImage]})`}}>
        <button className='absolute left-10 top-1/2 transform -translate-y-1/2' onClick={leftArrowHandler}>
          <img src={Images.leftArrow} alt="" />
        </button>
        <div className='my-auto mx-40'>
            <h2 className='font-lato text-50px py-4 text-white font-bold'>Cleaning Service</h2>
            <p className='font-poppins text-24px py-4 text-white w-300px'>
                We are here to serve for 
                whatever you need
            </p>
            <div className='flex space-x-4'>
                <Link to="/booking">
                  <Button txt={"Book Now"}/>
                </Link>
                <Link to="service">
                  <Button txt={"Learn More"}/>
                </Link>
            </div>
        </div>
        <button className='absolute right-10 top-1/2 transform -translate-y-1/2' onClick={rightArrowHandler}>
          <img src={Images.rightArrow} alt="" />
        </button>
      </div>
    </>
  )
}

export default MainVisual