import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
const Window = () => {
  return (
    <div>
      <Title />
      <h3 className="text-3xl text-center font-bold mb-10 mt-10">WINDOW CLEANING</h3>
      <div className="flex">
        <div className="mb-11">
          <img src={Images.cleaning28} alt="" />
        </div>
        <div className=" text-center ml-80 mt-150px">
          <h4 className="mb-6 font-bold">Wiping down baseboards and trim.</h4>
          <p className="mb-6">Cleaning interior windows and window sills.</p>
          <Link to="/Booking"><Button txt={"Book Now"} /></Link>
        </div>
      </div>

    </div>
  )
}

export default Window