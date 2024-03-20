import React from 'react';
import Images from '../components/Images';

function Faq() {
  const dropdownConditions = [
    false, false, false,
    false, false, false,
    false, false, false,
  ]

  return (
    <>
      <main>
        <div className='bg-#35D145 text-center mb-8 py-60px'>
          <h2 className='font-lato text-50px mb-8 text-white'>How can we help?</h2>
          <div className='relative'>
            <input className='bg-white rounded-20px px-4 h-10 w-600px' placeholder='Type your question' type="text"/>
            <button className='absolute top-2 ml-negative40px'>
              <img src={Images.searchIcon} alt="" />
            </button>
          </div>
        </div>
        <h2 className='font-lato text-50px text-center'>Frequently Asked Questions</h2>
        {/* First Row */}
        <div className='flex mt-8 mb-20 justify-center flex-wrap'>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>Why should I choose you over your competitors?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>How often will you clean my home?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>What cleaning products will you be using?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          {/* Second Row */}
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>Can I get an over the phone estimate?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>Do I have to be home when you are cleaning?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>Is your company insured?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          {/* Third Row */}
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>How do I pay for my cleaning service?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>Do you offer a satisfaction guarantee?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
          <div className='w-500px p-8 text-center shadow-custom m-5'>
            <h3 className='font-lato font-bold text-20px mb-4'>What is your cancellation policy?</h3>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. 
            </p>
            <button>
              <img src={Images.downArrow1} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Faq