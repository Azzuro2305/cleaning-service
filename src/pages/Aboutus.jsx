import React from 'react'
import Profile from '../components/Profile';
import Images from '../components/Images';
// import image from '../assets/cleaning1.png'
import Button from '../components/Button';

const Aboutus = () => {
    const profiles = [
        {
            id: 1,
            name: "Jennifer",
            position: "Founder & CEO",
            myImage: Images.profile2,
            text: "Ms. Jennifer is the young entrepreneur with more than 11 years of business experiences in facility management. Her Management, Strategic Planning,Leadership and Team Control is the major key of the Clean Pro’s Success Stories."
        },   
        {
          id: 3,
            name: "Andrew",
            position: "Operation Manager",
            myImage: Images.profile3,
            text: "Mr.Andrew strong knowledge and skills on Housekeeping operations in Hotels, Hospitals and condominiums are being utilized to promote systematic, effective, and safe operations in cleaning."
        },
        {
            id: 2,
            name: "Asheley",
            position: "Deputy CEO",
            myImage: Images.profile1,
            text: "Ms. Ashley is the young entrepreneur with more than 9 years of business experiences in facility management."
        },
        {
          id: 4,
            name: "Mark",
            position: "Operation Manager",
            myImage: Images.profile4,
            text: "Mr.Mark the Daily Cleaning Operation has very rich experience in Construction Cleaning, Floor Maintenance & Crystallization, and Deep Cleaning Operations."
        },
    ]
    return (
        <div>
            <h1 className='bg-#35D145 text-center py-40px font-lato text-5xl text-white uppercase font-bold'>About Us</h1>

            <section className='container m-auto my-14 font-poppins'>
                <div className="flex">
                    <div className="w-1/2">
                        <h3 className='mb-5 font-semibold text-4xl'>Welcome to GLC</h3>

                        <p className='pr-5 mb-5'>Turpis adipiscing netus est auctor. Pellentesque et tincidunt varius enim pulvinar miodio. Elementum pellentesque facilisis bibendum pharetra aliquet nascetur. Malesuada erat suspendisse risus turpis ullamcorper adipiscing quisque viverra nulla.
                        Pellentesque et tincidunt varius enim pulvinar miodio. Elementum pellentesque facilisis bibendum pharetra aliquet nascetur.</p>
                            
                        <p className='pr-5 mb-5'>Vel odio tristique faucibus. Dolor sed nisl consequat etiam. Ultricies in in sed fermentum urna.Mattis purus hendrerit sed eget. Neque cursus nisl consequat tincidunt.Mattis purus hendrerit sed eget. Neque cursus nisl consequat tincidunt. </p>

                        <p className='pr-5'>Mattis purus hendrerit sed eget. Neque cursus nisl consequat tincidunt.Vel odio tristique faucibus. Dolor sed nisl consequat etiam. Ultricies in in sed fermentum urna. 
                        Elementum pellentesque facilisis bibendum pharetra aliquet nascetur. </p>
                    </div>

                    <div className="w-1/2">
                        <img className='ms-auto' src={Images.room2} alt="Room Image" />
                    </div>
                </div>

                <div className='flex mb-8'>
                    <div className="flex border-l-8 p-4 border-#35D145 me-40">
                        <span className='text-6xl font-bold me-4 text-#35D145'>18</span> 
                        <div className='mt-1.5 font-semibold'>
                            <p className='text-gray-500'>Years Of</p> 
                            <p className='uppercase text-2xl'>experience</p>
                        </div>
                    </div>

                    <div className="flex border-l-8 p-4 border-#35D145">
                        <span className='text-6xl font-bold me-4 text-#35D145'>50</span> 
                        <div className='mt-1.5 font-semibold'>
                            <p className='text-gray-500'>Popular</p> 
                            <p className='uppercase text-2xl'>Master Cleaners</p>
                        </div>
                    </div>
                </div>

                <Button txt="Read More"/>
            </section>

            <section className='bg-green-200 text-center py-16'>
                <h2 className='uppercase text-5xl font-bold mb-16'>Our Management Team</h2>
                <div className='profiles container m-auto'>
                    <div className='flex justify-center mb-8'>
                        {  
                            profiles.filter((profile) => profile.id === 1).map(
                                (profile) =>  <Profile key={profile.id} img={profile.myImage} name={profile.name} rank={profile.position} txt={profile.text} />
                            )    
                        }
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        {
                            profiles.filter((profile) => profile.id !== 1).map(
                                (profile) =>  <Profile key={profile.id} img={profile.myImage} name={profile.name} rank={profile.position} txt={profile.text} />
                            ) 
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus