import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images';


function Footer() {
  return (
    <>
      <footer className='bg-black pt-10'>
        <div>
            <img className='ml-140px' src={Images.footerLogo} alt="" />
        </div>
        <div className='flex justify-center space-x-150px py-8'>
            <div className='w-200px'>
                <p className='font-poppins text-20px text-#7D7D7D'>
                    Lorem ipsum dolor sit amet consectetur. 
                    Mauris diam elit velit consectetur. 
                </p>
            </div>
            <div>
                <h3 className='font-poppins font-bold text-20px text-#7D7D7D mb-4'>Yangon Office</h3>
                <p className='font-poppins text-20px mb-2 text-#7D7D7D'>Mon-Fri: 9:00 am – 5:00 pm</p>
                <p className='font-poppins text-20px text-#7D7D7D'>Sat-Sun: 11:00 am – 4:00 pm</p>
            </div>
            <div>
                <h3 className='font-poppins font-bold text-20px text-#7D7D7D mb-4'>Mandalay Office</h3>
                <p className='font-poppins text-20px mb-2 text-#7D7D7D'>Mon-Fri: 9:00 am – 5:00 pm</p>
                <p className='font-poppins text-20px text-#7D7D7D'>Sat-Sun: 11:00 am – 4:00 pm</p>
            </div>
            <div>
                <h3 className='font-poppins font-bold text-20px text-#7D7D7D mb-4'>Get in touch</h3>
                <p className='font-poppins text-20px mb-2 text-#7D7D7D'>Phone: +95 9007007007</p>
                <p className='font-poppins text-20px mb-4 text-#7D7D7D'>Email: yamin@email.com</p>
                <div className='flex space-x-4'>
                    <a href="" target='_self'>
                        <img src={Images.facebookIcon} alt="" />
                    </a>
                    <a href="" target='_self'>
                        <img src={Images.twitterIcon} alt="" />
                    </a>
                    <a href="" target='_self'>
                        <img src={Images.instagramIcon} alt="" />
                    </a>
                    <a href="" target='_self'>
                        <img src={Images.youtubeIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
        <hr className='border-#7D7D7D'/>
        <address className='flex justify-center align-middle text-#7D7D7D py-8'>
            &copy; 2024 GLC All Rights Reserved.
        </address>
      </footer>
    </>
  )
}

export default Footer