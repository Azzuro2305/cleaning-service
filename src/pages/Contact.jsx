import React from 'react';
import Title from '../components/Title';
import Images from '../components/Images';

function Contact() {
  return (
    <>
      <main>
        <section className='flex justify-center space-x-100px mt-50px mb-100px'>
        <form className="grid grid-cols-2 w-500px col-gap-4 rounded-20px shadow-custom py-10 px-8">
          <label className="col-span-1">First Name</label>
          <label className="col-span-1">Last Name</label>
          <input className="bg-#D9D9D9 rounded-20px col-span-1 h-8 mt-2 mr-4 px-2" type="text" name="firstName" />
          <input className="bg-#D9D9D9 rounded-20px col-span-1 h-8 mt-2 px-2" type="text" name="lastName" />
          <label className="col-span-1 mt-2">Email</label>
          <input className="bg-#D9D9D9 rounded-20px h-8 col-span-2 my-2 px-2" type="email" name="email" />
          <label className="col-span-1">Message</label>
          <textarea className='col-span-2 bg-#D9D9D9 rounded-20px mt-2 resize-none p-2' name="" id="" cols="30" rows="4"></textarea>
          <div className="col-span-2 text-center mt-8">
            <button className='bg-#27AC35 text-white h-10 w-full rounded-20px' type=" submit">Send Message</button>
          </div>
      </form>
          <div>
            <div className='w-300px h-300px'>
              <img src={Images.map} alt="" />
            </div>
            <div>
              <p className='mt-2'>MICT Park</p>
              <p className='mt-2'>Yangon</p>
              <p className='mt-2'>Myanmar</p>
              <p className='mt-2'>example@gmail.com</p>
              <p className='mt-2'>(959)123-456-789</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact