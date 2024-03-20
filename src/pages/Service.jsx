import React from 'react'
import Images from '../components/Images'
import Button from '../components/Button'
import Title from '../components/Title'
import { Link } from 'react-router-dom'


const Service = () => {
  return (
    <div>
        <Title/>
        
    <h3 className="text-3xl text-center font-bold mb-10 mt-10">BASIC CLEANING</h3>
    <div className="flex space-x-4 left-64 justify-between ">
       <div>
       <div className='general bg-green-200'>
            <img src={Images.cleaning23} alt="" className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">General Cleaning</h4>
                <p className="mb-6">Dusting of furniture , shelves , and surfaces.</p>
                <Link to="/General"><Button txt={"See More"}/></Link>
            </div>
        </div>
       </div>


       <div className="py-11">
       <div className="bg-green-200">
            <img src={Images.cleaning24} alt="" className="mb-6 "  />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Kitchen  Cleaning</h4>
                <p className="mb-6">Wiping down countertops and    surfaces.</p>
                <Link to="/Kitchen"><Button txt={"See More"}/></Link>
            </div>
        </div>
       </div>

       <div>
       <div className="bg-green-200">
            <img src={Images.cleaning25} alt="" className="mb-6 "  />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Bathroom Cleaning</h4>
                <p className="mb-6">Scrubbing and sanitizing bathroom fixtures.</p>
                <Link to="/Bathroom"><Button txt={"See More"}/></Link>
            </div>
        </div>
    </div>
       </div>

    <h3 className="text-3xl text-center font-bold mb-10 mt-10">DEEP CLEANING</h3>
    <div className="flex space-x-4 left-64 justify-between ">
        <div>
        <div className="bg-green-200">
            <img src={Images.cleaning17} alt=""  className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Appliance Cleaning</h4>
                <p className="mb-6">Interior and exterior cleaning of the refrigerator.</p>
                <Link to="/Appliance"><Button txt={"See More"}/></Link>
            </div>
        </div>
        </div>


       <div className="py-11">
       <div className="bg-green-200">
            <img src={Images.cleaning18} alt=""  className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Baseboard and Trim Cleaning</h4>
                <p className="mb-6">Cleaning your baseboards isn’t exciting. But it’s the sort.</p>
                <Link to="/Baseboard"><Button txt={"See More"}/></Link>
            </div>
        </div>
       </div>

       <div>
        <div className="bg-green-200">
            <img src={Images.cleaning19} alt="" className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Window Cleaning</h4>
                <p className="mb-6">Cleaning interior windows and window sills.</p>
                <Link to="/Window"><Button txt={"See More"}/></Link>
            </div>
        </div>
    </div>
    </div>

    <h3 className="text-3xl text-center font-bold mb-10 mt-10">PREMIUM CLEANING</h3>
    <div className="flex space-x-4 left-64 justify-between ">
       <div>
       <div className="bg-green-200">
            <img src={Images.cleaning20} alt="" className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Carpet Cleaning</h4>
                <p className="mb-6">Carpet cleaning is performed to remove stain allergens .</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>    
            </div>
        </div>
       </div>


        <div className="py-11">
        <div className="bg-green-200">
            <img src={Images.cleaning22} alt="" className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Additional Room Cleaning</h4>
                <p className="mb-6">Cleaning of additional rooms like a homeoffice or guest .</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>  
            </div>
        </div>
        </div>


        <div>
        <div className="bg-green-200">
            <img src={Images.cleaning21} alt="" className="mb-6 " />
            <div className="mb-8  text-center h-44">
                <h4 className="mb-6 font-bold text-20px">Furniture Upholstery Cleaning</h4>
                <p className="mb-6">Vacuuming and spot cleaning of upholstery.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>    
            </div>
        </div>
        </div>
    </div> 

</div>

  )
}

export default Service