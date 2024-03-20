import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const General = () => {
  return (
    <div>
        <Title/>
        <h3 className="text-3xl text-center font-bold mb-10 mt-10">GENERAL CLEANING</h3>
        <div className="flex space-x-4 left-64 justify-between p-9">
            <div className="">
            <img src={Images.cleaning6} alt=""  className="mb-6 "  />
                <div className="mb-8  text-center h-28">
                    <p  className="mb-6">Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                </div>
            </div>

            <div className="">
            <img src={Images.cleaning7} alt=""  className="mb-6 " />
                <div className="mb-8  text-center h-28">
                    <p className="mb-6">Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                </div>
            </div>

            <div className="">
            <img src={Images.bottleDisposal} alt=""  className="mb-6 " />
                <div className="mb-8  text-center h-28">
                    <p className="mb-6">Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                </div>
            </div>



        </div>
    </div>
  )
}

export default General