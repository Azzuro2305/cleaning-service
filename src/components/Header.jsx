import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Images from './Images';
import Router from '../route/Router';
import Button from '../components/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex align-middle justify-between px-20 py-5'>
          <div>
            <h1>
              <Link className='link' to='/'>
                <img src={Images.headerLogo} alt="" />
              </Link>
            </h1>
          </div>
          <nav className='flex align-middle space-x-10'>
              <Link className='link pt-2 hover:text-#27AC35' to="/" >Home</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/aboutus">About Us</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/service" onMouseEnter={() => setIsOpen(!isOpen)}>
                Service
                <img className='inline ml-2' src={Images.downArrow} alt="" />
              </Link>
              {
                isOpen && (
                  <div className="absolute right-440px flex flex-col p-4 mt-40px rounded-md shadow-lg z-10 bg-white" onMouseLeave={() => setIsOpen(!isOpen)}>
                    <Link className='link my-4 hover:text-#27AC35' to="/general">General Cleaning</Link>
                    <hr />
                    <Link className='link my-4 hover:text-#27AC35' to="/kitchen" >Kitchen Cleaning</Link>
                    <hr />
                    <Link className='link my-4 hover:text-#27AC35' to="/bathroom" >Bathroom Cleaning</Link>
                    <hr />
                    <Link className='link my-4 hover:text-#27AC35' to="/appliance" >Appliance Cleaning</Link>
                    <hr />
                    <Link className='link my-4 hover:text-#27AC35' to="/baseboard" >Base Board Cleaning</Link>
                    <hr />
                    <Link className='link my-4 hover:text-#27AC35' to="/window" >Window Cleaning</Link>
                </div>
                )
              }
              <Link className='link pt-2 hover:text-#27AC35' to="/qa">QA</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/faq">FAQ</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/contact">Contact Us</Link>
              <Link className='link hover:text-#27AC35' to="/signin"><Button txt={"Sign in"}/></Link>
          </nav>
      </div>
      <Router />
    </>
  )
}

export default Header
