import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MainVisual from '../components/MainVisual';
import Images from '../components/Images';


function Home() {
  const condition = [Images.whiteDot, Images.blackDot];
  const status = [false, false, true, false, false];
  const [clickValue, setClickValue] = useState(0);

  const handleClick = (e) => {
    setClickValue(1);
  }

  return (
    <>
      <MainVisual />
      <main className='mx-4'>
        <section className='flex justify-center align-middle space-x-5 mt-negative100px mb-50px'>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.windowCleaning} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Basic Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.laundary} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Deep Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.dishes} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Premium Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
        </section>

        <section className='mb-100px'>
          <h2 className='font-lato font-bold text-50px text-center'>OUR MISSION</h2>
          <div className='flex justify-center mt-50px'>
            <div className='m-auto'>
              <img src={Images.images} alt="" />
            </div>
            <div className='m-auto'>
              <h3 className='font-lato font-bold text-20px mb-5 text-center'>"Clean Like Never Before"</h3>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor 
                sit amet ipsum dolor sit amet sit amet 
                ipsum dolor sit amet dolor sit amet Lorem 
                ipsum dolor sit amet ipsum dolor sit amet 
                ipsum dolor sit amet sit amet ipsum dolor 
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor 
                sit amet ipsum dolor sit amet sit amet 
                ipsum dolor sit amet dolor sit amet Lorem 
                ipsum dolor sit amet ipsum dolor sit amet 
                ipsum dolor sit amet sit amet ipsum dolor 
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor 
                sit amet ipsum dolor sit amet sit amet 
                ipsum dolor sit amet dolor sit amet Lorem 
                ipsum dolor sit amet ipsum dolor sit amet 
                ipsum dolor sit amet sit amet ipsum dolor 
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor 
                sit amet ipsum dolor sit amet sit amet 
                ipsum dolor sit amet dolor sit amet Lorem 
                ipsum dolor sit amet ipsum dolor sit amet 
                ipsum dolor sit amet sit amet ipsum dolor 
                sit amet dolor sit amet
              </p>
            </div>
          </div>
        </section>

        <section className='mb-100px'>
          <h2 className='font-lato font-bold text-50px text-center'>LATEST SERVICES</h2>
          <div className='flex justify-center space-x-100px mt-50px'>
            <div>
              <div>
                <img className='shadow-custom1' src={Images.cleaning27} alt="" />
              </div>
              <p className='font-poppins font-bold text-center text-20px mt-8'>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <div>
                <img className='shadow-custom1' src={Images.dishWashing} alt="" />
              </div>
              <p className='font-poppins font-bold text-20px text-center mt-8'>Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <div>
                <img className='shadow-custom1' src={Images.cleaning29} alt="" />
              </div>
              <p className='font-poppins font-bold text-20px text-center mt-8'>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className='text-center my-6'>
            <Link to="/service">
              <Button txt={"See More"}/>
            </Link>
          </div>
        </section>

        <section className='mb-200px'>
          <h2 className='font-lato font-bold text-50px text-center'>TESTIMONIALS</h2>
          <div className='flex justify-center space-x-125px mt-50px'>

            <div className='border-2 rounded-20px border-black p-10'>
              <div>
                <p className='w-300px mb-8'>
                  “Lorem ipsum dolor sit amet consectetur. 
                  Maurissit amet consectetur. Mauris diam 
                  elit consectetur ipsum dolor sit”
                </p>
              </div>
              <hr className='border-black' />
              <div className='flex space-x-6 mt-2'>
                <div>
                  <img src={Images.profileIcon1} alt="" />
                </div>
                <div>
                  <h3 className='font-lato font-bold text-24px mb-2'>Client</h3>
                  <p className='font-poppins'>Michael</p>
                </div>
              </div>
            </div>

            <div className='border-2 rounded-20px border-black p-10'>
              <div>
                <p className='w-300px mb-8'>
                  “Lorem ipsum dolor sit amet consectetur. 
                  Maurissit amet consectetur. Mauris diam 
                  elit consectetur ipsum dolor sit”
                </p>
              </div>
              <hr className='border-black' />
              <div className='flex space-x-6 mt-2'>
                <div>
                  <img src={Images.profileIcon2} alt="" />
                </div>
                <div>
                  <h3 className='font-lato font-bold text-24px mb-2'>Client</h3>
                  <p className='font-poppins'>Danial</p>
                </div>
              </div>
            </div>
            <div className='border-2 rounded-20px border-black p-10'>
              <div>
                <p className='w-300px mb-8'>
                  “Lorem ipsum dolor sit amet consectetur. 
                  Maurissit amet consectetur. Mauris diam 
                  elit consectetur ipsum dolor sit”
                </p>
              </div>
              <hr className='border-black' />
              <div className='flex space-x-6 mt-2'>
                <div>
                  <img src={Images.profileIcon3} alt="" />
                </div>
                <div>
                  <h3 className='font-lato font-bold text-24px mb-2'>Client</h3>
                  <p className='font-poppins'>Catherine</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center space-x-5 mt-50px'>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
          </div>
        </section>
      
      </main>
    </>
  )
}

export default Home