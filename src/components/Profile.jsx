import React from 'react';

const Profile = ({id, img, name, rank, txt}) => {
    
  return (
    <div key={id}>
        <div className='w-400px px-6 py-10 bg-white font-poppins h-full'>
            <img src={img} alt="Profile" className='m-auto mb-2' />
            <h3 className='mb-1 font-bold text-3xl'>{name}</h3>
            <h4 className='mb-2 font-medium text-2xl text-#35D145'>{rank}</h4>
            <p>{txt}</p>
        </div>
    </div>
  )
}

export default Profile  