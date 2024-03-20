import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Appliance = () => {
  return (
    <div>
      <Title/>
        <h3 className="text-3xl text-center font-bold mb-10 mt-10">APPLIANCE CLEANING</h3>
        <div className="flex justify-center gap-40 ...">
            <div className="">
            <img src={Images.cleaning4} alt=""  className="mb-6"/>
            <div className="mb-8  text-center h-28">
                <p className="mb-6">Interior and exterior cleaning of the refrigerator.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
            </div>
            </div>

            <div className="">
            <img src={Images.cleaning5} alt=""  className="mb-6"/>
            <div className="mb-8  text-center h-28">
                <p className="mb-6">Oven cleaning.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Appliance