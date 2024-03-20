import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Baseboard = () => {
  return (
    <div>
        <Title/>
         <h3  className="text-3xl text-center font-bold mb-10 mt-10">BASEBOARD AND TRIM CLEANING</h3>  
         <div  className="flex ">
            <div>
            <img src={Images.cleaning15} alt=""  />
            </div>
            <div className=" text-center mt-200px">
                <h4 className="mb-6 font-bold">Wiping down baseboards and trim.</h4>
                <p className="mb-6">Cleaning your baseboards isn’t exciting. But it’s the sort of task that, when completed to a sparkling T, 
                    makes your home feel and look better.</p>
                    <Link to="/Booking"><Button txt={"Book Now"}/></Link>
            </div>
        </div> 

        <div  className="flex">
            <div className=" text-center mt-240px">
                <h4 className="mb-6 font-bold">Cleaning light switches and doorknobs.</h4>
                <p className="mb-6">Squirt hydrogen peroxide or rubbing alcohol on a cotton ball and wipe down the doorknobs and switch plates.
                 Allow to dry.</p>
                    <Link to="/Booking"><Button txt={"Book Now"}/></Link>
            </div>
            <div>
            <img src={Images.cleaning16} alt="" className="mb-20"/>
            </div>
        </div> 
    </div>
  )
}

export default Baseboard 
