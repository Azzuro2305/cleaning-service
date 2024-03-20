import React from 'react'
import Title from '../../components/Title'
import Images from '../../components/Images'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Bathroom = () => {
  return (
    <div>
      <Title/>
         <h3 className="text-3xl text-center font-bold mb-10 mt-10">BATHROOM CLEANING</h3>
         <div className="flex content-center justify-center gap-10">
          <div>
              <div>
              <img src={Images.cleaning11} alt="" className="mb-6" />
              <div className="mb-8  text-center h-28">
                <p className="mb-6">Scrubbing and sanitizing bathroom fixtures.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
              </div>
              </div>
          </div>

          <div>
          <div>
              <div>
              <img src={Images.cleaning12} alt="" className="mb-6" />
              <div className="mb-8  text-center h-28">
                <p className="mb-6">Cleaning mirrors.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
              </div>
              </div>
          </div>
          </div>

          <div>
          <div>
              <div>
              <img src={Images.cleaning13} alt="" className="mb-6" />
              <div className="mb-8  text-center h-28">
                <p className="mb-6">Wiping down countertops.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
              </div>
              </div>
          </div>
          </div>

          <div>
          <div>
              <div>
              <img src={Images.cleaning14} alt="" className="mb-6" />
              <div className="mb-8  text-center h-28">
                <p className="mb-6">Mopping floors.</p>
                <Link to="/Booking"><Button txt={"Book Now"}/></Link>
              </div>
              </div>
          </div>
          </div>
            

         </div>
    </div>
  )
}

export default Bathroom