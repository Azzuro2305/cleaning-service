import React from 'react'
import Title from '../../components/Title'
import Images from '../../components/Images'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Kitchen = () => {
    return (
        <div>
            <Title/>
            <h3 className="text-3xl text-center font-bold mb-10 mt-10">KITCHEN  CLEANING</h3>

            <div className="flex content-center justify-center gap-56">
                <div>
                    <img src={Images.cleaning8} alt=""  className="mb-6"/>
                    <div className="mb-8  text-center h-28">
                        <p  className="mb-6">Wiping down countertops and surfaces.</p>
                        <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                    </div>
                </div>

                <div>
                    <img src={Images.room4} alt=""  className="mb-6"/>
                    <div  className="mb-8  text-center h-28">
                        <p  className="mb-6">Cleaning kitchen appliances.</p>
                        <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                    </div>
                </div>
            </div>

            <div className="flex content-center justify-center gap-56">
                <div>
                    <img src={Images.cleaning9} alt=""  className="mb-6" />
                    <div  className="mb-8  text-center h-28">
                        <p  className="mb-6">Sanitizing sinks and faucets.</p>
                        <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                    </div>
                </div>

                <div>
                    <img src={Images.cleaning10} alt=""  className="mb-6" />
                    <div  className="mb-8  text-center h-28">
                        <p  className="mb-6">Cleaning the exterior of kitchen cabinets.</p>
                        <Link to="/Booking"><Button txt={"Book Now"}/></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Kitchen